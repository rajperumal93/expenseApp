import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import Label from "../../components/Label";
import Input from "../../components/Input";

const Signup = () => {
    const signUpAction = () => {
        alert('Success');
    }

    return (
        <View style={styles.signupPage}>
            <View style={styles.formGroup}>
                <Input type="text" name="name" id="name" placeholder="Name" />
            </View>
            <View style={styles.formGroup}>
                <Input type="email" name="email" id="email" placeholder="Email" />
            </View>
            <View style={styles.formGroup}>
                <Input type="text" name="username" id="username" placeholder="Username"/>
            </View>
            <View style={styles.formGroup}>
                <Input type="password" name="password" id="password" placeholder="Password" secureTextEntry={true} />
            </View>

            <View style={styles.formGroup}>
                <Button title='sign up' onPress={() => { signUpAction() }}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a'
    },
    signupTitle: {
        fontSize: 28,
        marginBottom: 40
    },

    textWhite: {
        color: '#FFF'
    },
    formGroup: {
        margin: 10,
        width: 300
    },
    linkBtn: {
        marginBottom: 10
    },
    linkBtnText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16
    }
})

export default Signup;