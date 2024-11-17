import { View, Text, TouchableOpacity, Alert,Image,TextInput, ScrollView } from "react-native";
import { router } from "expo-router";


export default function Login() {
  return(
    
    // LOGIN PAGE
    <View className=' h-[90%] w-full '>
       <Image className='h-[40%] w-full' 
       source={require('../../assets/images/test2.jpeg')} />
      <View className='bg-[#171717] rounded-lg -mt-2'>
 
       <Text className='color-white text-3xl pb-20 text-center' >
         LOGIN TO <Text className='color-[#F4BA45]'>
         RANCHERS
       </Text>
       </Text>
       
       <Text className='text-white pb-4 pr-6'>     Enter Email</Text>
        <View className='flex flex-row items-center justify-center'>
        <TextInput
          className='border-2 border-[#F4BA45] rounded-lg text-white h-10 w-11/12  '
          placeholder="   Enter your Email"
          keyboardType="default"
        />
        </View>
        <Text className='text-white pb-4 pt-10 '>     Enter Password</Text>
        <View className='flex flex-row items-center justify-center'>
        <TextInput
          className='border-2 border-[#F4BA45] rounded-lg text-white h-10 w-11/12  '
          placeholder="   Enter your Password"
          keyboardType="default"
        />
        </View>
        <Text className='text-[#F4BA45] text-left pl-64 font-semibold mt-2'>Forget Password?</Text>
        <Text className='text-white text-center pt-10'>Don't have an account? <Text className='text-[#F4BA45]'>Sign Up</Text></Text>
        <View className='flex flex-col items-center justify-center h-9  mt-5 mb-5'>
        <TouchableOpacity 
        onPress={() => router.push('/auth/signup') }  // replace with navigation
        className='bg-[#F4BA45] rounded-lg h-10 w-11/12 '>
          <Text className='text-white font-bold text-lg text-center pt-2 '>SIGN IN</Text>
        </TouchableOpacity>
        </View>
        {/* <Button title='SIGN IN' className='bg-[#F4BA45] text-white'></Button> */}

      </View>
      
    </View>
  );
}