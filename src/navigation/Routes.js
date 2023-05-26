import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Signup from '../screens/signup/Signup';
import About from '../screens/about/About';
import Login from '../screens/login/Login';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import ViewExpense from '../screens/expense/ViewExpense';
import DetailsExpense from '../screens/expense/DetailsExpense';
import NewForm from '../screens/expense/NewForm';
import { checkLogin } from '../services/LoginServices';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {checkLogin() ? (
                    <Stack.Group>
                    {/* <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
                        <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
                        <Stack.Screen name="NewForm" component={NewForm} options={{ title: 'NewForm' }} />
                        <Stack.Screen name="ViewExpense" component={ViewExpense} options={{ title: 'ViewExpense' }} />
                        <Stack.Screen name="Expense Details" component={DetailsExpense}
                            options={{
                                title: 'Expense Details',
                                headerStyle: {
                                    backgroundColor: '#FF6969',
                                },
                                headerTintColor: '#FFF',
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                    {/* </Stack.Group>
                ) : (
                    <Stack.Group> */}
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ headerShown: false }} />
                    {/* </Stack.Group> */}
                {/* )
                } */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;