import React from "react";
import { View, Text, TouchableOpacity ,ScrollView} from "react-native";
import { useRouter } from "expo-router";
import * as Icon from 'react-native-feather';
import { Dropdown } from 'react-native-element-dropdown';


export default function LocationScreen() {
  const router = useRouter();
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  return(
    
    <View className="bg-[#171717] h-screen " >
      <View className="mt-20 flex flex-row items-center pl-" >
        <Text className="color-white text-4xl font-extrabold pl-2" >
          Branches
        </Text>
      </View>
      <View className="border border-[#F4BA45] h-14 rounded-lg mx-2 text-white mt-8">
      <Dropdown
        
        data={data}
        
        placeholderStyle={{ color: 'white',marginTop:15,marginLeft:10 }}
        iconColor="#F4BA45"
        iconStyle={{marginTop:15,marginRight:10}} 
        labelField="label"
        valueField="value"
        placeholder="Select City"
        onChange={() => {}}
      >

      </Dropdown>

      </View>
      <ScrollView>

      <View className="border border-[#626161] h-72 w-11/12 ml-4 mt-6 rounded-xl " >
        <Text className="text-white pl-4 pt-4 text-3xl font-bold" >
          Branch Name
        </Text>
        <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.MapPin height="20" width="20" stroke="#F4BA45" className="pl-4 pt-2" />
        <Text className="text-white pl-4 text-lg" >
          Address
        </Text>
        </View>
        
        <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.PhoneCall height="20" width="20" stroke="#F4BA45" className="pl-4 pt-2" />
        <Text className="text-white pl-4 text-lg" >
          123456789
        </Text>
        </View>

        <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.PhoneCall height="20" width="20" stroke="#F4BA45" className="pl-4 pt-2" />
        <Text className="text-white pl-4 text-lg" >
          123456789
        </Text>
        </View>

        <TouchableOpacity className="bg-[#F4BA45] h-12 w-[60%] rounded-3xl mx-20 mt-8 " >
            <Text className="  text-lg text-center mt-3" >
              Get Directions
              </Text>
        </TouchableOpacity>
      </View>

      <View className="border border-[#626161] h-72 w-11/12 ml-4 mt-6 rounded-xl " >
        <Text className="text-white pl-4 pt-4 text-3xl font-bold" >
          Branch Name
        </Text>
        <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.MapPin height="20" width="20" stroke="#F4BA45" className="pl-4 pt-2" />
        <Text className="text-white pl-4 text-lg" >
          Address
        </Text>
        </View>
        
        <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.PhoneCall height="20" width="20" stroke="#F4BA45" className="pl-4 pt-2" />
        <Text className="text-white pl-4 text-lg" >
          123456789
        </Text>
        </View>

        <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.PhoneCall height="20" width="20" stroke="#F4BA45" className="pl-4 pt-2" />
        <Text className="text-white pl-4 text-lg" >
          123456789
        </Text>
        </View>

        <TouchableOpacity className="bg-[#F4BA45] h-12 w-[60%] rounded-3xl mx-20 mt-8 " >
            <Text className="  text-lg text-center mt-3" >
              Get Directions
              </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </View>

  );
}
