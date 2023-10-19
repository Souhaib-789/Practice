import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import Input from "../../components/Input";
import { Colors } from "../../config/Colors";
import Button from "../../components/Button";
import { showAlert } from "../../redux/Actions/GeneralActions";
import auth from '@react-native-firebase/auth';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';

const Signup = () => {

const dispatch = useDispatch();
const navigation = useNavigation();
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()

    const onPressSignup =   () => {
        if (!name) {
          dispatch(showAlert({message: 'Please enter your name'}));
        }
        else if (!email) {
          dispatch(showAlert({message: 'Please enter email address'}));
        }
        else if (!password) {
          dispatch(showAlert({message: 'Please enter password'}));
        }
        else if (!confirmPassword) {
          dispatch(showAlert({message: 'Please confirm your entered password'}));
        } else if (password !== confirmPassword) {
          dispatch(showAlert({message: 'Confirm password does not match'}));
        } else {
        //   dispatch(showLoading());
    
           auth()
            .createUserWithEmailAndPassword(email, confirmPassword)
            .then((e) => {
              const user = e.user;
            user.updateProfile({displayName: name , photoURL: null})
              dispatch(showAlert({message: 'Your account has been created !'}));
              console.log('User account created !');
    
              firestore()
                .collection('Users')
                .doc(auth().currentUser.uid)
                .set({
                  chats : [],
                });
    
               navigation.navigate('Signin');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                dispatch(showAlert({message: 'That email address is already in use!'}));
              }
              else if (error.code === 'auth/invalid-email') {
                dispatch(showAlert({message: 'That email address is invalid!'}));
              }else{
                dispatch(showAlert({message: 'Something went wrong'}))
                console.error(error);
              }
              
            })
            // .finally(() => dispatch(hideLoading()));
        }
      };


    return (
        <View style={styles.container}>
            <TextComponent text={'Signup'} style={styles.heading} />


            <Input
                placeholder='Enter Name'
                value={name}
                onChangeText={(e) => setname(e)}
            />

            <Input
                placeholder='Enter Email'
                value={email}
                onChangeText={(e) => setemail(e)}
            />

            <Input
                placeholder='Enter Password'
                value={password}
                onChangeText={(e) => setpassword(e)}
            />

            <Input
                placeholder='Confirm Password'
                value={confirmPassword}
                onChangeText={(e) => setconfirmPassword(e)}
            />

            <Button title={'Signup'} onPress={onPressSignup} />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Signup;