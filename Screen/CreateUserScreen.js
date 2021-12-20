import React, { useState } from 'react';
import { TextInput, View, Button, ScrollView, StyleSheet } from 'react-native';
import  firebase from '../DataBase/firebase';
import { addDoc, collection, Collection, connectFirestoreEmulator } from 'firebase/firestore';

const CreateUserScreen = (props) => {
    const initialstate = {
        name: "",
        Email: "",
        phone: "",
    };

    const {state, setstate} = useState(initialstate);

    const handleChangeText = (Value, name) => {
        setstate({...state, [name]: Value });
    };

    const saveNewUser = async => {
        if (state.name === " ") {
           alert ("introduce un nombre");
        }else {
           try { 
               await addDoc(collection(firebase.db, "users"), {
                   name : state.name,
                   email: state.email,
                   phone: state.phone,
               });


               props.navigation.navigate("userList");
           } catch (error){
               console.log(error);
           }
        }
    };

    return ( <ScrollView style = {styles.container}>
        <View style = {styles.inputGroup}>
        <TextInput placeholder = 'Name'
        On onChangeText = {
            (Value) => console.log(Value)}
        />   
        </View> 
        <View style = {styles.inputGroup}>
        <TextInput placeholder = 'Email'
        onChangeText = {(Value) => console.log(Value)}
        /> 
        </View > 
        <View style = {styles.inputGroup} >
        <TextInput placeholder = 'Phone'
        onChangeText = {(Value) => console.log(Value) }
        />    
        </View>
        <View style = {styles.Button} >
        <Button title = "Save User" onPress={() => saveNewUser()} />
        </View> </ScrollView >
    );
};

const newLocal = " #ccccccc";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginbottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#FF5733",
    }
});

export default CreateUserScreen;