import React, { useState } from "react";
import {  StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import Input from "../../components/Input";
import { Colors } from "../../config/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AuthMiddleware } from "../../redux/Middlewares/AuthMiddleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showAlert } from "../../redux/Actions/GeneralActions";
import auth from '@react-native-firebase/auth';

const Signin = () => {

const dispatch = useDispatch()
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const navigation = useNavigation()

    const onPressLogin = async () => {
        if (!email) {
            dispatch(showAlert({message: 'Please enter email !'}))
        } 
        else if(!password){
          dispatch(showAlert({message: 'Please enter passsword !'}))
        } else {
           
            // dispatch(showLoading())
            await auth()
                .signInWithEmailAndPassword(email, password)
                .then((res) => { 
                    let token = res?.user?.uid
                    console.log(token);
                    AsyncStorage.setItem('@token', token)
                    AsyncStorage.setItem('@userx', JSON.stringify(res?.user))
                    dispatch(AuthMiddleware.login())

                })
                .catch(error => {
                    console.log(error.message);
                    dispatch(showAlert({message: 'email or password is invalid!'}))
                }).finally(()=> {
                //   dispatch(hideLoading())
                })
        }
    }


    return (
        <View style={styles.container}>
            <TextComponent text={'Signin'} style={styles.heading} />

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

            <View style={styles.flex}>
                <TextComponent text={"Don't have an account ?"} style={styles.heading} />
                <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                    <TextComponent text={"  Create One"} style={styles.heading} />
                </TouchableOpacity>
            </View>

            <Button title={'Signin'} onPress={onPressLogin}  />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Signin;