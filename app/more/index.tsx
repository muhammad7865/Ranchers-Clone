import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import {router} from 'expo-router'

export default function more() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
    <Text className="text-white text-xl mb-4">This is the Account Section</Text>
    <TouchableOpacity
      className="px-4 py-2 bg-orange-500 rounded"
      onPress={() => router.push("/(home)")}
    >
      <Text className="text-white">Back to Home</Text>
    </TouchableOpacity>
  </View>
  )
}