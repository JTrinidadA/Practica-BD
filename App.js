import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

import UserList from "./screen/UserList";
import UserDetailScreen from './Screen/UserDetailScreen';
import CreateUserScreen from './Screen/CreateUserScreen';

function MyStack() {
    return ( <
        stack.Navigator >
        screenOptions = {
            {
                headerStyle: {
                    backgroundColor: "#621FF7",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontweight: "bold",
                },
            }
        } <
        Stack.Screen name = "usersList"
        component = { UsersList }
        options = {
            { title: "Users List" } }
        /> <
        Stack.Screen name = "CreateUserScreen"
        component = { CreateUserScreen }
        options = {
            { title: "Create User Screen" } }
        /> <
        Stack.Screen name = "UserDetailScreen"
        component = { UserDetailScreen }
        options = {
            { title: "User Detail Screen" } }
        /> <
        /stack.Navigator>
    );
};

export default function App() {
    return ( < NavigationContainer >
        <
        MyStack / >
        <
        /NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});