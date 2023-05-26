import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../home/Home";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Header = () => {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        height: '5%',
        backgroundColor: '#eee',
        textAlign: 'center'
    }
})

export default Header;