import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Vectoricon from '../utils/Vectoricon'
import { Colors } from '../utils/Colors'
import Logo from '../assests/Images/Logo.png'
const LoginScreen = () => {
    const[email,setEmail] = useState('')
    const[Password,setPassword] = useState('')

  return (
    <View style={style.container}>
      <Vectoricon 
        name="arrow-back-outline"
        type="Ionicons"
        color={Colors.black} 
        size={20}/>
        <View style ={style.subContainer}>   
        <Image source={Logo} style={style.logoStyle} />
            <TextInput style={style.inputBox} placeholder='Mobile number or email' 
                value={email}  
                onChangeText={value=> 
                setEmail(value)
                }/>
            <TextInput style={style.inputBox} 
                placeholder='Password' 
                value={Password}  
                onChangeText={value=> 
                setPassword(value)
                }/> 
            <TouchableOpacity style={style.loginButton} >
                <Text style={style.login}>Log in</Text>
            </TouchableOpacity>                                                 
        </View>       
    </View>
  )
}
const style = StyleSheet.create({
   logoStyle: {
    height:60,
    width:60,
    marginVertical:'20%',

   },
   container:{
    padding:16,
    
   },
   subContainer:{
    justifyContent:'center',
    alignItems:'center',
   },
   inputBox:{
    borderWidth:1,
    color:Colors.borderGrey,
    padding:10,
    borderRadius:12,
    width:'95%',
    marginTop:12,
   },
   loginButton:{
    backgroundColor:Colors.primaryColor,
    padding:10,
    borderRadius:20,
    width:'95%',
    alignItems:'center',
    marginTop:12,
   },
   login:{
    color:Colors.white,
    fontSize:15,
    fontWeight:'500'

   },

})
export default LoginScreen;