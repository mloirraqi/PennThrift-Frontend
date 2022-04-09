import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ButtonNm from "./ButtonNm";
const back = require('../assets/back.png');

const Header = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ButtonNm
                style={{width:100,}}
                icon={back}
                onPress={() => navigation.goBack()}
                text='Back'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:30,
        
    },
    icon:{
        width:15,
        height:15,
        marginRight:10
    },
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'400',
    }
})

export default Header;