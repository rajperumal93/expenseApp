import { StyleSheet, View } from "react-native";
import Input from "../../components/Input";
import TuchableOpacityBtn from "../../components/TuchableOpacityBtn";
import { useState } from "react";

const ForgotPassword = ({navigation}) => {
    const [mobileNumber, setMobileNumber] = useState('');

    const inputHandle = (val) => {
        setMobileNumber(val);
    }

    const forgotPasswordAction = () => {
        if(mobileNumber.length >= 10) {
            alert('New PIN sent your Mobile Number.');
            navigation.navigate('Login');
        } else {
            alert('Please Enter Valid Mobile Number.');
            setMobileNumber('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Input type="number" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number. e.g 8608672249" value={mobileNumber} pattern="[789][0-9]{9}" onChangeText={(val) => { inputHandle(val) }} />
            </View>
            
            <View style={styles.formGroup}>
                <TuchableOpacityBtn title='Submit' className='secondaryBtn' classNameForText='primaryText' onPress={() => { forgotPasswordAction() }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6969'
    },
   
    formGroup: {
        margin: 10,
    },
})

export default ForgotPassword;