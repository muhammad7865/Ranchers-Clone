import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Dimensions, Alert } from "react-native";
import { useRouter } from "expo-router";
import * as Icon from "react-native-feather";
import { Dropdown } from "react-native-element-dropdown";
import locationsData from "@/locations.json";

export default function LocationScreen() {
  const [selectedCity, setSelectedCity] = useState("all");


  const cityData = locationsData.cities.map(city => ({
    label: city.name,
    value: city.id
  }));

  const getBranches = useCallback(() => {
    if (selectedCity === "all") {
      return locationsData.cities.slice(1).flatMap(city => city.branches);
    }
    const city = locationsData.cities.find(city => city.id === selectedCity);
    return city ? city.branches : [];
  }, [selectedCity]);

  const renderBranch = useCallback(({ item: branch }: any) => (
    <View className="border border-[#626161] h-auto w-11/12 ml-4 mt-6 rounded-xl pb-4">
      <Text className="text-white pl-4 pt-4 text-3xl font-bold">
        {branch.name}
      </Text>
      <View className="flex flex-row ml-4 mt-4 items-center">
        <Icon.MapPin
          height="20"
          width="20"
          stroke="#F4BA45"
          className="pl-4 pt-2"
        />
        <Text className="text-white pl-4 text-lg flex-1 flex-wrap">
          {branch.address}
        </Text>
      </View>

      {branch.phone.map((phoneNumber: any, phoneIndex: any) => (
        <View key={phoneIndex} className="flex flex-row ml-4 mt-4 items-center">
          <Icon.PhoneCall
            height="20"
            width="20"
            stroke="#F4BA45"
            className="pl-4 pt-2"
          />
          <Text className="text-white pl-4 text-lg">{phoneNumber}</Text>
        </View>
      ))}

      <TouchableOpacity 
      onPress={()=>{
        Alert.alert("OOps ! Maps are not Available 😐")
      }}
      className="bg-[#F4BA45] h-12 w-[60%] rounded-3xl mx-auto mt-8">
        <Text className="text-lg text-center mt-3">Get Directions</Text>
      </TouchableOpacity>
    </View>
  ), []);

  return (
    <View className="bg-[#171717] flex-1">
      <View className="mt-20 flex flex-row items-center pl-2">
        <Text className="color-white text-4xl font-extrabold">
          Branches
        </Text>
      </View>
      <View className="border border-[#F4BA45] h-14 rounded-lg mx-2 text-white mt-8">
        <Dropdown
          data={cityData}
          placeholder="Select City"
          placeholderStyle={{ color: "white", marginTop: 15, marginLeft: 10 }}
          iconColor="#F4BA45"
          iconStyle={{ marginTop: 15, marginRight: 10 }}
          labelField="label"
          valueField="value"
          onChange={(item) => setSelectedCity(item.value)}
          value={selectedCity}
        />
      </View>
      <FlatList
        data={getBranches()}
        renderItem={renderBranch}
        keyExtractor={(item: any, index) => `${item.name}-${index}`}
        contentContainerStyle={{ 
          paddingBottom: 100 
        }}
        className="mb-16" 
      />
    </View>
  );
}

