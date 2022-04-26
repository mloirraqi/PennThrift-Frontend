import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// <View style={styles.container}>
    //   <Text>Hello Julia</Text>
    //   <StatusBar  style="auto" />
    // </View>

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hello Julia</Text>
            <StatusBar  style="auto" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Register;