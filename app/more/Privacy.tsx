import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

export default function Privacy() {
  return (
    <SafeAreaView className="flex-1 bg-[#171717]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        {/* CONTACT INFORMATION */}
        <View className="mt-10 ml-2">
          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            CONTACT INFORMATION:
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            We might wrangle up yer name and street address. We might also nab
            yer phone number o' re-mail address.
          </Text>
        </View>

        {/* BILLING INFORMATION */}
        <View className="mt-10 ml-2">
          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            BILLING INFORMATION:
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            When ya buy one of our meals, we'll need to rustle up yer zip code.
          </Text>

          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            INFORMATION YOU SUBMIT OR POST
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            Well, pardner, if ya go ahead 'n' post somethin', apply for a job,
            or fill out a survey, we'll be collectin' all the info ya give us.
          </Text>

          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            DEMOGRAPHIC INFORMATION:
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            We might just rustle up some info 'bout the services and products
            y'all order. Might ask ya to share yer thoughts in a good ol'
            survey, if ya don't mind.
          </Text>

          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            OTHER INFORMATION:
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            If y'all are usin' our website or app, we might just gather up
            some info 'bout where yer computer's or phone is located or what
            kind of browser you're wranglin'.
          </Text>

          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            YOU GOT SOME OPTIONS 'BOUT HOW WE HANDLE YER INFO.
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            If y'all ain't interested in receiving our marketing emails, just
            holler at us by sending a request to customercare@rancherscafe.com
            or following the directions in any of them promotional messages we
            send ya. Might take us 'bout ten (10) workin' days to get ya taken
            care of. But don't ya fret none! Even if ya opt outta them
            marketin' messages, we'll still send ya them transactional ones.
            Like if we gotta reach out 'bout your orders or such.
          </Text>

          <Text className="text-[#F4BA45] text-3xl font-extrabold mb-5">
            YA'LL CAN GET YER ACCOUNT UPDATED OR SCRAPPED IF YA WANT
          </Text>
          <Text className="text-white leading-8 text-2xl mb-10">
            We might switch up how we do things 'round here with your privacy.
            If we make any big ol' changes, we'll holler at ya 'bout it like
            the law says we gotta. We'll even post a new copy up on our site
            or app so you can take a gander at it whenever ya please. Just
            make sure to mosey on over to our site or app every now and again
            to see what's new.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
