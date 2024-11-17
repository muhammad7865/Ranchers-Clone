import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import { Stack } from "expo-router";
import * as Icon from "react-native-feather";

export default function contactus() {
  return (
    <ScrollView>
      <View className="bg-[#171717] h-screen ">
        <Text className="text-white  ml-4 mt-10 pb-2 pt-2 pr-6 text-xl font-semibold">
          {" "}
          Full Name
        </Text>
        <View className="flex flex-row items-center justify-center text-white">
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg h-12 w-11/12 color-white "
            placeholder="   Enter your Full Name"
            keyboardType="default"
          />
        </View>

        <Text className="text-white ml-4 pb-2 pt-2 pr-6 text-xl font-semibold">
          {" "}
          Email
        </Text>
        <View className="flex flex-row items-center justify-center">
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  "
            placeholder="   Enter your Email"
            // onChangeText={(text) =>
            //   text.match("@") ? (
            //     <View>
            //       <Icon.Check height={30} width={30} stroke="#F4BA45" />
            //     </View>
            //   ) : (
            //     <View>
            //       <Icon.XCircle height={30} width={30} stroke="#F4BA45" />{" "}
            //     </View>
            //   )
            // }
            keyboardType="default"
          />
        </View>
        <Text className="text-white ml-4 pb-2 pt-2 pr-6 text-xl font-semibold">
          {" "}
          Phone
        </Text>
        <View className="flex flex-row items-center justify-center">
          <TextInput
            className="border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  "
            placeholder="   Enter your Phone Number"
            keyboardType="default"
          />
        </View>

        <Text className="text-white ml-4 pb-2 pt-2 pr-6 text-xl font-semibold">
          {" "}
          Message
        </Text>
        <View className="flex flex-row items-center justify-center">
          <TextInput
            className="border-2  border-[#F4BA45] rounded-lg text-white h-12 w-11/12  "
            placeholder="   Your Message Here"
            keyboardType="default"
          />
        </View>

        <View className="flex flex-col items-center justify-center h-9  mt-10 mb-5">
          <TouchableOpacity className="bg-[#F4BA45] rounded-3xl h-14 w-11/12 ">
            <Text className="text-white font-extrabold text-3xl text-center pt-3 ">
              CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
