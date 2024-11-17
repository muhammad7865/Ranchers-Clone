import { Link ,router} from 'expo-router';
import * as React from 'react';
import { Text, View ,TouchableOpacity, SafeAreaView,StatusBar} from 'react-native';

export default function HomeScreen() {
  return (
   <SafeAreaView className='bg-black'>
    <StatusBar barStyle="dark-content"/>
    <View className="flex-1 space-x-2 px-4 pb-2 items-center">
      {/* <View className='flex-row flex-1 item-center p-3  border border-gray-3'> */}
        <Text className='text-white text-lg font-semibold'>Home</Text>

      {/* </View> */}
    </View>

   </SafeAreaView>
  );
}