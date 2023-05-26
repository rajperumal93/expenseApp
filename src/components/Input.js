import { StyleSheet, TextInput } from 'react-native';

const Input = ({ type, name, id, placeholder, secureTextEntry = false, className, value, pattern = null, onChangeText }) => {
    return <TextInput
        type={type}
        secureTextEntry={secureTextEntry}
        name={name}
        id={id}
        placeholder={placeholder}
        placeholderTextColor='#FFF'
        style={[styles.inputField, styles[className]]}
        value={value}
        pattern={pattern}
        onChangeText={onChangeText} />
}

const styles = StyleSheet.create({
    inputField: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 10,
        color: '#FFF',
        fontSize: 16
    },
    loginFld: {
        borderWidth: 0,
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    textDark: {
        color: '#1A1A1A'
    }
})

export default Input;