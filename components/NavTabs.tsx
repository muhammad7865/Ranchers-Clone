import { Link } from "expo-router";
import React from "react";
import { View,Text } from "react-native";



const NavTabs = () => {
  return (
    <View className="flex-1 flex-row absolute bottom-0 justify-center items-center gap-x-4">
        <Link href="./one">
        <Text>One</Text>
        </Link>
        <Link href="./oneeee">
        <Text>Two</Text>
        </Link>
        <Text>Three</Text>
    </View>
  );
};

export default NavTabs;
