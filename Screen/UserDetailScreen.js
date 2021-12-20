import React, {useEffect, useState} from 'react';
import {View,ScrollView,Button,ActivityIndicator,StyleSheet } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

import {
    collection,
    getDocs,
    query,
    where,
    getDoc,
    detleteDoc,
    updateDoc,
    doc,
} from "firebase/firestore";
import firebase from "../DataBase/Firebase";

const initialstate = {
    id : "",
    name: "",
    email: "",
    phone: "",
};

const UserDetailScreen = (props) => {
    const [user, setUser] = useState(true);

    const handleChangeText = (value, prop) => {
        setUser ({...user,[prop]:value});
    };

    const getUserById = async (id) => {
        const querySnapshot = await getDoc(
            doc (firebase.db, "users", props.route.params.userId)
        );
        const user = querySnapshot.data();
        console.log(user);
        setUser({...user, id: doc.id});
        setLoading(false);
    };

    const detleteUser = async () => {
        setLoading(true);
        await detleteDoc(doc(firebase.db, "users", props.route.params,userId));
        setLoading(False);
        props.navigation.navigate("userslist");
    };

    const updateUser = async () => {
        await updateDoc(doc(firebase.db, "users", props.route.params.userId),{
            name : user.name,
            email : user.email,
            phone : user.phone,
        });
        setUser(initialstate);
        props.navigation.navigate("usersList");
    };

    useEffect (() => {
        getUserById(props.route.params.userId);
    },[]);

    if (Loading) {
        return (
            <View style ={styles.loader}>
            <ActivityIndicator size = "large" color="#9E9E9E"/>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
        <View>
            <TextInput
              placeholder='name'
              autoComplete='username'
              style = {styles.inputGroup}
              value= {user.name}
              onChangeText= {(value)=> handleChangeText(value, "name")}
              />
              </View>
              <View>
            <TextInput
              placeholder='email'
              autoComplete='email'
              style = {styles.inputGroup}
              value= {user.name}
              onChangeText= {(value)=> handleChangeText(value, "email")}
              />
              </View>
              <View>
            <TextInput
              placeholder='phone'
              autoComplete='tel'
              style = {styles.inputGroup}
              value= {user.name}
              onChangeText= {(value)=> handleChangeText(value, "phone")}
              />
              </View>
              <View style ={styles.btn}>
                  <Button title="Delete" onPress={()=> deleteUser()} color= "#E37399"/>
                  </View>
                  <View>
                    <Button title='Update' onPress={()=> UpdateUser} color= "#19AC52"/>
                  </View>
              </ScrollView>
    );
};

const styles = StyleSheet.create({
    container :{
        flex : 3,
        padding: 35,
    },
    loader: {
        left: 0,
        rigth: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        borderBottomColor: "#cccccc",
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 35,
        borderBottomWidth: 3,
        borderBottomColor: "#cccccc",
    },
    btn: {
        marginBottom: 7,
    }
});

export default UserDetailScreen;