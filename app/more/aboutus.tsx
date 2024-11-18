import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function aboutus() {
  return (
    <SafeAreaView>
      <View className="bg-[#171717] h-screen ">
        <ScrollView>
          <View className="mt-10 ml-2">
            <Text className=" text-[#F4BA45] text-3xl font-extrabold ">
              A TALE UNTOLD
            </Text>
            <Text className="text-white leading-8 text-2xl mt-5 ">
              One night aftr' a long day ov' showdowns, a couple of cowboys came
              together to cook up sum monstrous burgers to fill up their empty
              bellies. Texas Jack, one of them, said to ye others "I want meself
              a meal like this every single day!". Bill, who was cookin' up the
              finger licking meat thought why not? So, he started cooking up the
              biggest, messiest and mightiest burgers the town had ever
              devoured!
            </Text>

            <Text className="text-white leading-8 text-2xl">
              And with this came "Ranchers", the ranch where all cowboys came
              after a hard day to re-fuel themselves with the juiciest and
              meatiest burgers in all of town. Why we are irresistible? No
              cowboy has ever gone back unsatisfied from the Ranch.
            </Text>
          </View>

          <View className="mt-10 ml-2">
            <Text className=" text-[#F4BA45] text-3xl font-extrabold ">
              FOOD QUALITY
            </Text>
            <Text className="text-white leading-8 text-2xl mt-5 ">
              The Homely Touch of the Highest Quality Standards at Ranchers.
            </Text>

            <Text className="text-white leading-8 text-2xl">
              At Ranchers, it's always like coming home. We make sure that the
              warmth of our homely touch reaches your highest expectations. Be
              it food service or the ambiance, we keep elevating our quality
              standards to new levels. Ranchers has implemented rigorous food
              safety standards called "from farm to restaurants". Here food is
              not just meant for thought. Food means quality by all means. That
              is why Ranchers is served to you and your loved ones with all
              our heart and soul.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
