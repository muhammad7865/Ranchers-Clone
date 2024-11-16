import { Tabs } from "expo-router";
import * as Icon from "react-native-feather";
import '../global.css'
import { BlurView } from "expo-blur";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: 'rgba(48, 50, 66, 0.95)',
          borderRadius: 40,
          height: 80,
          paddingBottom: 0,
          paddingTop: 0,
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={30}
            className="absolute inset-0 rounded-[40px] overflow-hidden"
          />
        ),
        headerShown: false,
        tabBarActiveTintColor: "#FFB800",
        tabBarInactiveTintColor: "#ffffff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarItemStyle: {
          paddingTop: 8,
          height: 80,
        }
      }}
    >
      <Tabs.Screen
        name="auth"
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, focused }) => (
            <View className={`p-2 ${focused ? 'bg-orange-500/20 rounded-full' : ''}`}>
              <Icon.LogIn width={24} height={24} stroke={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <View className={`p-2 ${focused ? 'bg-orange-500/20 rounded-full' : ''}`}>
              <Icon.FileText width={24} height={24} stroke={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <View className={`p-2 ${focused ? 'bg-orange-500/20 rounded-full' : ''}`}>
              <Icon.ShoppingCart width={24} height={24} stroke={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View className={`p-2 ${focused ? 'bg-orange-500/20 rounded-full' : ''}`}>
              <Icon.Home width={24} height={24} stroke={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          tabBarLabel: "Location",
          tabBarIcon: ({ color, focused }) => (
            <View className={`p-2 ${focused ? 'bg-orange-500/20 rounded-full' : ''}`}>
              <Icon.MapPin width={24} height={24} stroke={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, focused }) => (
            <View className={`p-2 ${focused ? 'bg-orange-500/20 rounded-full' : ''}`}>
              <Icon.MoreHorizontal width={24} height={24} stroke={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}