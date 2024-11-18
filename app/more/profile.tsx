import { View, Text, SafeAreaView } from 'react-native'
import React,{useState} from 'react'

export default function profile() {
  const[loggedin,setloggedin]=useState(false)
  
  return (
    <SafeAreaView>
    <View>
      <Text>profile</Text>
    </View>
    </SafeAreaView>
  )
}