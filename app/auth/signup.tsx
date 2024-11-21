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
          source={{uri:"data:image/jpeg;base64,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"}}
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
