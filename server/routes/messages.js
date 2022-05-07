const Message = require('../models/message.model')
const router = require("express").Router();
const User = require('../models/user.model');

router.post("/add/:id", (req, res) => {
    
    const {sender , message, attachment} = req.body;
    const id = req.params.id;

    Message.findById({_id:id}).then( out => {
        let newMessage; try{ newMessage = [...out.messages, {sender, message, attachment}]}catch{newMessage = [{sender, message, attachment}]}
        Message.findOneAndUpdate({_id:id},{messages:newMessage}).then( out => {
            res.json(out)
        })
    })




});
router.post("/get/:id", (req, res) =>{
    const id = req.params.id;
    Message.findById({_id:id}).then( out => {
        res.json(out)
    })

});

router.post('/getOpen', (req, res) => {
    const { users } = req.body;
    Message.findOne({users:users}, {users:1})
    .then(message => {
        if(!message){
            Message.findOne({users:users.reverse()}, {users:1}).then( message => {
                res.json(message)
            })
        }else{
            res.json(message)
        }
    })


})

router.post('/create', (req, res) =>{
    const {users} = req.body;
    const message = new Message({users:users })
    message.save().then(out => {
        users.map( user => {
            User.findOneAndUpdate(
                {username:user},
                {$addToSet: {chats:message}}
            ).exec();

        })
        res.json(out)
    })
    

})

module.exports = router;