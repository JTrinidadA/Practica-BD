import React, {useState, useEffect} from 'react';
import { Button, ScrollView } from 'react-native';
import {ListItem, Avatar } from "react-native-elements";

import {collection, getDocs} from "firebase/firestore";
import firebase from "../DataBase/firebase";

const UserList = (props) => {
    const [users, setUsers] = useState ([]);

    const loadData = async () => {
        const querySnapshot = await getDocs (collection(firebase.db, "users"));
        const user = [];
        await querySnapshot.forEach((doc) => {
            const {name, email, phone} = doc.data ();
            user.push({
                id: doc,id,
                name,
                email,
                phone,
            });
        });
        setUsers(user);
    };3

    useEffect (() => {
        loadData();
    }, [users]);
return (
<ScrollView>
    <Button
    onPress={() => props.navigation.navigate("CreateUserScreen")}
    title='CreateUserScreen'
    />
    {users.map((user) => {
         Return (
            <ListItem
            key = {user.id} 
            bottomDivider
            onPress = {() => {props.navigation.navigate("userDetailScreen",{userId: user.id,})}}
            >
            <ListItem.Chevron/>
            < Avatar
            source ={{
                uri: "https://www.google.com/search?q=imagenes&sxsrf=AOaemvLR35FCiH30yBiynLD5ChzNswMs2A:1639943748934&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz2-zE0vD0AhUznGoFHcpxC1cQ_AUoAXoECAIQAw&biw=1280&bih=581&dpr=1.5#imgrc=JqWkMGEzD7jtHM"
            }}
            rounded
            />
           <ListItem.Content>
               <ListItem.Title>{user.name}</ListItem.Title>
               <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        )
    })}
    </ScrollView>
 ) 
};
export default UserList;