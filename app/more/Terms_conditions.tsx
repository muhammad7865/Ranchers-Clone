import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function Terms_conditions() {
  return (
      <View className="bg-[#171717] h-screen ">
        <ScrollView>
          <View>
            <Text className="text-[#F4BA45] pt-3 text-xl font-bold text-center mt-12 ">
              PLEASE READ THE FOLLOWING NOTICES AND TERMS AND CONDITIONS
              CAREFULLY{" "}
            </Text>
          </View>
          <View className="mt-10 ml-2">
            <Text className=" text-[#F4BA45] text-3xl font-extrabold ">
              AGE
            </Text>
            <Text className="text-white leading-8 text-2xl mt-5 ">
              If you are under 13 years of age, you should always have the
              express consent of a parent or legal guardian before using
              internet including this website.
            </Text>
          </View>

          <View className="mt-10 ml-2">
            <Text className=" text-[#F4BA45] text-3xl font-extrabold ">
              LEGAL NOTICES
            </Text>
            <Text className="text-white leading-8 text-2xl mt-5 ">
              If you are browsing this website as a non-commercial consumer, you
              may access material displayed on the above mentioned mediums for
              your non-commercial, personal use only and subject to the Terms
              and Conditions stated below. If you are browsing these above
              mentioned mediums as an employee/agent/ member of any business or
              organisation, you may access or download material displayed on the
              above mentioned mediums only in accordance with their Terms and
              Conditions stated below. Read More
            </Text>

            <Text className=" text-[#F4BA45] text-3xl font-extrabold my-4 ">
              ANTI-SPAM NOTICE
            </Text>

            <Text className="text-white leading-8 text-2xl">
              Your access to and use of above mentioned mediums is also subject
              to the above mentioned mediums Terms and Conditions stated below
              and all applicable laws. The material on this above mentioned
              mediums resides on a server in the state of Lahore/Karachi,
              Pakistan. The law applicable to use of the material and to
              disputes arising out of the material is the state of Lahore,
              Pakistan. Read More
            </Text>

            <Text className=" text-[#F4BA45] text-3xl font-extrabold my-4 ">
              WEBSITE TERMS & CONDITIONS
            </Text>

            <Text className="text-white leading-8 text-2xl">
              All material on above mentioned mediums is protected by all
              applicable laws including copyright and trademark laws unless
              otherwise specifically noted and may not be used except as
              permitted in these Website Terms and Conditions or in the text on
              above mentioned mediums.
            </Text>
          </View>
        </ScrollView>
      </View>
  
  );
}
