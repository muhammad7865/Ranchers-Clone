import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import * as Icon from "react-native-feather";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "All fields are mandatory.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email.");
      return;
    }
    Alert.alert("Success", "Login successful!");
    // Proceed with login logic
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#171717]"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header Image */}
      <Image
        className="h-[35%] "
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SJueouF-GEdDFWjK9dJr5xJ_upHU7P6YHw&s",
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Login Section */}
        <View className="p-4">
          <Text className="text-white text-3xl text-center mt-10 ">
            LOGIN TO <Text className="text-[#F4BA45]">RANCHERS</Text>
          </Text>

          {/* Email Input */}
          <Text className="text-white mt-10 ">Email</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Enter your Email"
            placeholderTextColor="#A9A9A9"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Password Input */}
          <Text className="text-white mt-2">Password</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-2"
            placeholder="Enter your Password"
            placeholderTextColor="#A9A9A9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Forget Password */}
          <Text className="text-[#F4BA45] text-right font-semibold mb-5">
            Forget Password?
          </Text>

          {/* Sign In Button */}
          <TouchableOpacity
            onPress={validateLogin}
            className="bg-[#F4BA45] rounded-lg h-12 flex items-center justify-center mb-5"
          >
            <Text className="text-white font-bold text-lg">LOG IN</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <Text className="text-white text-center">
            Don't have an account?{" "}
            <Text
              className="text-[#F4BA45] font-bold"
              onPress={() => router.push("/auth/signup")}
            >
              Sign Up
            </Text>
          </Text>
          {/* Social Media Login */}
        </View>
          <View className="flex flex-row justify-center" >
            <Icon.Twitter  stroke="skyblue" style={{marginRight:8}} />
            <Icon.Instagram stroke="purple" style={{marginRight:8}}/>
            <Icon.Github stroke="Green"/>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
