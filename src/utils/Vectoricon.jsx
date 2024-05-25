import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octions from 'react-native-vector-icons/dist/Octicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Vectoricon = (props) => {
    const {name,size,color,type,onPress} = props
  return (
    <View>
    { type==="MaterialCommunityIcons"?(
       <MaterialCommunityIcons 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
       /> 
    )
    : type==="FontAwesome" ?(
       <FontAwesome 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   /> )
    : type==="FontAwesome5" ?(
        <FontAwesome5 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):type==="Feather" ?(
        <Feather 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):type==="AntDesign" ?(
        <AntDesign 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):type==="Entypo" ?(
        <Entypo 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):type==="Iconions" ?(
        <Ionicons 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):type==="EvilIcons" ?(
        <EvilIcons 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):
    type==="Octions" ?(
        <Octions 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />
    ):
    ( 
    <MaterialIcons 
        onPress={onPress}
        name={name}
        size={size}
        color={color}
   />)
    }
    </View>
  )
}

export default Vectoricon
