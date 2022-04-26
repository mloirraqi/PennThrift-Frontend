// import { Link } from 'react-router-dom';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const Welcome = ({ navigation }) =>{
    return(
        <View className='grid grid-main justify-center w-full h-full items-center'>
            <View className='col-span-8'>
                <Image source={require('../assets/logo.png')} className='h-24 mx-auto w-24'/>
                <View className='my-5 text-5xl'>
                       <Text>Welcome to PennThrift!</Text>
                </View>
                <View className='w-full h-[1px] bg-[gray]'></View>
                <View className='my-5'>
                       <Text>Your one-stop-shop for buying, trading, gifting, and thrifting at Penn.</Text>
                </View>
                <View className='flex mx-16 justify-between'>
                    <View className='flex flex-col text-center'>
                        <View className=''>
                            <Text>New Here?</Text>
                        </View>
                            <Button
                                title = "Register"
                                onPress = {() => 
                                    navigation.navigate('Register')
                                }
                            /> 
                    </View>
                    <View className='flex flex-col text-center'>
                         <View className=''>
                             <Text>Returning User?</Text> 
                         </View>
                         <Button
                             title = "Login"
                             onPress = {() => 
                             navigation.navigate('Login')
                            }
                         /> 
                     </View>
                 </View>
             </View>
            
         </View>
        
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