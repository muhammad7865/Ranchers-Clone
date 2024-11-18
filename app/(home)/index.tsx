import { Link ,router} from 'expo-router';
import * as React from 'react';
import { Text, View ,TouchableOpacity, SafeAreaView,StatusBar} from 'react-native';

export default function HomeScreen() {
  return (

    <View className="bg-[#171717] h-screen " >
    <View className="mt-9 flex flex-row items-center pl-" >
      <Text className="color-white text-4xl font-extrabold pl-2" >
        MENU
      </Text>
    </View>
    </View>
   
  );
}