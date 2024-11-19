import { Link, router } from "expo-router";
import * as React from "react";
import Category from "@/components/Category";
import Carousel from "@/components/Crousal";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import * as Icon from "react-native-feather";

const slides = [
  require("@/assets/images/deal1.jpeg"),
  require("@/assets/images/deal2.jpeg"),
  require("@/assets/images/deal3.jpeg"),
  require("@/assets/images/deal4.jpeg"),
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#171717]">
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity
          onPress={() => router.push("/location")}
          className="p-1"
        >
          <Icon.MapPin height={30} width={30} stroke="#F4BA45" />
        </TouchableOpacity>

        <Text className="flex-1 text-[#F4BA45] font-extrabold text-2xl text-center">
          RANCHERS CAFE
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="p-1"
        >
          <Icon.LogIn height={30} width={30} stroke="#F4BA45" />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View className="bg-[#F4BA45] py-2 mb-3">
        <Text className="text-center text-black font-bold">
          WE ARE OPEN FROM 11:45 AM TILL 01:00 AM.
        </Text>
      </View>

      {/* Main Content */}
      <View className="flex-1">
        {/* Carousel */}
        <View className="h-40">
          <Carousel autoSlide={true}>
            {slides.map((s, index) => (
              <Image
                key={index}
                source={s}
                className="flex"
                resizeMode="cover"
              />
            ))}
          </Carousel>
        </View>

        {/* Menu Categories and Items */}
        <View className="flex-1">
          <Category/>
        </View>
      </View>
    </SafeAreaView>
  );
}