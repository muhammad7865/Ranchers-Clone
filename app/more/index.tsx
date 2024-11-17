import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import * as Icon from "react-native-feather";
import { Link, Stack } from "expo-router";
import { Route } from "expo-router/build/Route";

export default function More() {
  return (
    <View className="bg-[#171717] h-screen">
      <View className="">
        <Text className="text-white font-extrabold text-4xl mt-20 ml-6">
          ACCOUNT
        </Text>

        {/* Orders history */}

        <TouchableOpacity
          onPress={() => {
            router.push("/more/orderHistory");
          }}
        >
          <View className="flex flex-row justify-between w-full pt-14">
            <View className="flex flex-row pl-8">
              <Icon.FileText height={30} width={30} stroke="#F4BA45" />
              <Text className="text-white text-center pt-2 pl-5 pb-4 text-lg">
                Orders History
              </Text>
            </View>

            <View className="pr-4">
              <Icon.ArrowRight height={30} width={30} stroke="#F4BA45" />
            </View>
          </View>
        </TouchableOpacity>
        {/* borderLine */}
        <BorderLine />

        {/* My profile */}

        <TouchableOpacity
          onPress={() => {
            router.push("/more/profile");
          }}
        >
          <View className="flex flex-row justify-between w-full pt-4">
            <View className="flex flex-row pl-8">
              <Icon.User height={30} width={30} stroke="#F4BA45" />
              <Text className="text-white text-center pt-2 pl-5 pb-4 text-lg">
                My Profile
              </Text>
            </View>
            <View className="pr-4">
              <Icon.ArrowRight height={30} width={30} stroke="#F4BA45" />
            </View>
          </View>
        </TouchableOpacity>

        <BorderLine />

        <TouchableOpacity
          onPress={() => {
            router.push("/more/contactus");
          }}
        >
          <View className="flex flex-row justify-between w-full pt-4">
            <View className="flex flex-row pl-8">
              <Icon.Mail height={30} width={30} stroke="#F4BA45" />
              <Text className="text-white text-center pt-2 pl-5 pb-4 text-lg">
                Contact Us
              </Text>
            </View>
            <View className="pr-4">
              <Icon.ArrowRight height={30} width={30} stroke="#F4BA45" />
            </View>
          </View>
        </TouchableOpacity>

        <BorderLine />

        <TouchableOpacity
          onPress={() => {
            router.push("/more/feedback");
          }}
        >
          <View className="flex flex-row justify-between w-full pt-4">
            <View className="flex flex-row pl-8">
              <Icon.MessageSquare height={30} width={30} stroke="#F4BA45" />
              <Text className="text-white text-center pt-2 pl-5 pb-4 text-lg">
                Feedback
              </Text>
            </View>
            <View className="pr-4">
              <Icon.ArrowRight height={30} width={30} stroke="#F4BA45" />
            </View>
          </View>
        </TouchableOpacity>

        <BorderLine />

        <TouchableOpacity
          onPress={() => {
            router.push("/more/changepassword");
          }}
        >
          <View className="flex flex-row justify-between w-full pt-4">
            <View className="flex flex-row pl-8">
              <Icon.Lock height={30} width={30} stroke="#F4BA45" />
              <Text className="text-white text-center pt-2 pl-5 pb-4 text-lg">
                Change Password
              </Text>
            </View>
            <View className="pr-4">
              <Icon.ArrowRight height={30} width={30} stroke="#F4BA45" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/more/aboutus");
          }}
        >
          <View className="border border-t border-[#F4BA45] border-1 mb-3 mt-3">
            <Text className="text-white pl-6 pt-4 pb-6">About Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/more/Privacy");
          }}
        >
          <View className="border border-t border-[#F4BA45] border-1 mb-2 mt-2">
            <Text className="text-white pl-6 pt-4 pb-6">Privacy Policy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/more/Terms_conditions");
          }}
        >
          <View className="border border-t border-[#F4BA45] border-1 mb-2 mt-2">
            <Text className="text-white pl-6 pt-4 pb-6">
              Terms and Conditions
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/auth/login");
          }}
        >
          <View className="pl-4 pt-6 flex flex-row items-center">
            <Icon.LogIn height={30} width={30} stroke="#F4BA45" />
            <Text className="text-white text-[#F4BA45] pl-2">Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BorderLine = () => {
  return (
    <View>
      <View className="border-t border-[#F4BA45] border-1 w-full" />
    </View>
  );
};
