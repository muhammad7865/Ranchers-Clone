import { View, Text, TouchableOpacity, Alert ,ScrollView,TextInput,Image} from "react-native";
import { useRouter ,Link} from "expo-router";


export default function Login() {
  const router = useRouter();
    return (
        <ScrollView>
      <View className="bg-[#171717] ">
        <Image
          className=" w-full "
          source={require("../../assets/images/test4.jpeg")}
        />
        <View className="bg-[#171717] rounded-3xl -mt-2">
    
              <Text className="color-white text-3xl pt-6 pb-20 text-center">
            SIGNUP TO <Text className="color-[#F4BA45]">RANCHERS</Text>
          </Text>
  
            <Text className='text-white pb-2 pt-2 pr-6 text-xl font-semibold'>    First Name</Text>
          <View className='flex flex-row items-center justify-center text-white'>
          <TextInput
            className='border-2 border-[#F4BA45] rounded-lg h-12 w-11/12 color-white '
            placeholder="   Enter your First Name"
            keyboardType="default"
          />
          </View>
  
  
          <Text className='text-white pb-2 pt-2 pr-6 text-xl font-semibold'>     Last Name</Text>
          <View className='flex flex-row items-center justify-center'>
          <TextInput
            className='border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  '
            placeholder="   Enter your Last Name"
            keyboardType="default"
          />
          </View>
  
  
  
          <Text className='text-white pb-2 pt-2 pr-6 text-xl font-semibold'>     Email</Text>
          <View className='flex flex-row items-center justify-center'>
          <TextInput
            className='border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  '
            placeholder="   Enter your Email"
            keyboardType="default"
          />
          </View>
  
  
  
          <Text className='text-white pb-2 pt-2 pr-6 text-xl font-semibold'>     Phone</Text>
          <View className='flex flex-row items-center justify-center'>
          <TextInput
            className='border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  '
            placeholder="   Enter your Phone Number"
            keyboardType="default"
          />
          </View>
  
  
  
          <Text className='text-white pb-2 pt-2 pr-6 text-xl font-semibold'>     Password</Text>
          <View className='flex flex-row items-center justify-center'>
          <TextInput
            className='border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  '
            placeholder="   Enter your Password"
            keyboardType="default"
          />
          </View>
  
  
  
          <Text className='text-white pb-2 pt-2 pr-6 text-xl font-semibold'>     Confirm Password</Text>
          <View className='flex flex-row items-center justify-center'>
          <TextInput
            className='border-2 border-[#F4BA45] rounded-lg text-white h-12 w-11/12  '
            placeholder="   Enter your Password"
            keyboardType="default"
          />
          </View>
  
          <View className='flex flex-col items-center justify-center h-9  mt-10 mb-5'>
          <TouchableOpacity className='bg-[#F4BA45] rounded-3xl h-14 w-11/12 '>
            <Text className='text-white font-extrabold text-3xl text-center pt-3 '>CONTINUE</Text>
          </TouchableOpacity>
          </View>
  
  

        </View>
        
      </View>
            </ScrollView>
    );
}