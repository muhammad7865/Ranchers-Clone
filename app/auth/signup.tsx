import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateSignup = () => {
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are mandatory.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    Alert.alert("Success", "Signup successful!");
    // Proceed with signup logic
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#171717]"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
        <Image
          className="h-[40%] w-full"
          source={require("../../assets/images/test5.jpeg")}
        />
          <ScrollView>
        <View className="p-4">
          <Text className="text-white text-3xl text-center mb-8">
            SIGNUP TO <Text className="text-[#F4BA45]">RANCHERS</Text>
          </Text>

          {/* First Name */}
          <Text className="text-white mb-2">First Name</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Enter your First Name"
            placeholderTextColor="#A9A9A9"
            value={firstName}
            onChangeText={setFirstName}
          />

          {/* Last Name */}
          <Text className="text-white mb-2">Last Name</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Enter your Last Name"
            placeholderTextColor="#A9A9A9"
            value={lastName}
            onChangeText={setLastName}
          />

          {/* Email */}
          <Text className="text-white mb-2">Email</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Enter your Email"
            placeholderTextColor="#A9A9A9"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Phone */}
          <Text className="text-white mb-2">Phone</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Enter your Phone Number"
            placeholderTextColor="#A9A9A9"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          {/* Password */}
          <Text className="text-white mb-2">Password</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Enter your Password"
            placeholderTextColor="#A9A9A9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Confirm Password */}
          <Text className="text-white mb-2">Confirm Password</Text>
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 px-3 mb-5"
            placeholder="Confirm your Password"
            placeholderTextColor="#A9A9A9"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {/* Continue Button */}
          <TouchableOpacity
            onPress={validateSignup}
            className="bg-[#F4BA45] rounded-lg h-12 flex items-center justify-center"
          >
            <Text className="text-white font-bold text-lg">CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
