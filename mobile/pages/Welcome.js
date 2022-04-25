// import { Link } from 'react-router-dom';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Welcome = () =>{
    return(

    <View style={styles.container}>
      <Text>Hello Julia</Text>
      <StatusBar  style="auto" />
    </View>
        // <View className='grid grid-main justify-center w-full h-full items-center'>
        //     <View className='col-span-8'>
        //         <Image src={require('../assets/logo.png')} className='h-24 mx-auto w-24'/>
        //         <View className='my-5 text-5xl'>
        //                <Text>Welcome to PennThrift!</Text>
        //         </View>
        //         <View className='w-full h-[1px] bg-[gray]'></View>
        //         <View className='my-5'>
        //                <Text>Your one-stop-shop for buying, trading, gifting, and thrifting at Penn.</Text>
        //         </View>
        //         <View className='flex mx-16 justify-between'>
        //             <View className='flex flex-col text-center'>
        //                 <View className=''>
        //                     <Text>New Here?</Text>
        //                 </View>
        //                 <Link to='/register' className='bg-[#368481] my-3 w-28 rounded-[30px] h-12 text-white flex justify-center items-center'>
        //                     Register
        //                 </Link>
        //             </View>
        //             <View className='flex flex-col text-center'>
        //                 <View className=''>
        //                     Returning User?
        //                 </View>
        //                 <Link to='/login'  className='bg-[#368481] my-3 w-28 rounded-[30px] h-12 text-white flex justify-center items-center'>
        //                     Login
        //                 </Link>
        //             </View>
        //         </View>
        //     </View>
            
        // </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Welcome;