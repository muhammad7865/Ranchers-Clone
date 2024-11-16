import { Link ,router} from 'expo-router';
import * as React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
    <Text className="text-white text-xl mb-4">Home</Text>
    <TouchableOpacity
      className="px-4 py-2 bg-orange-500 rounded"
      onPress={() => router.push("/cart")}
    >
      <Text className="text-white">Go to Cart</Text>
    </TouchableOpacity>
  </View>
  );
}