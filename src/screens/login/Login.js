import { StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import { useState } from "react";
import TuchableOpacityBtn from "../../components/TuchableOpacityBtn";
import {setLogin} from "../../services/LoginServices";

const Login = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const inputHandle = (val) => {
        const passwordLength = val.length;
        setPassword(val);
        setErrorMsg("");
        if (passwordLength >= 3) {
            if (val === '123') {
                setLogin(true);
                navigation.navigate("Home");
            } else {
                setErrorMsg("Incorrect PIN. Please try again.");
                setPassword('');
            }
        }
    }

    const handleNavigation = (page) => {
        navigation.navigate(page);
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textWhite, styles.loginTitle]}>Enter Your PIN</Text>
            <View>
                <View style={styles.formGroup}>
                    <Input type="password" name="password" id="password" placeholder="PIN" className='loginFld' secureTextEntry={true} value={password} onChangeText={(val) => { inputHandle(val) }} />
                </View>
                {errorMsg.length != 0 ?
                    <View style={styles.errorBlog}>
                        <Text>{errorMsg}</Text>
                        <TuchableOpacityBtn title='Forgot Password' className='link' classNameForText='secondaryText' onPress={() => { handleNavigation("Forgot Password") }} />
                    </View>
                    : null}
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6969',
    },
    loginTitle: {
        fontSize: 28,
        marginBottom: 20
    },

    textWhite: {
        color: '#FFF'
    },
    formGroup: {
        margin: 10,
        width: 100,
        alignSelf: 'center'
    },
    errorBlog: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Login;