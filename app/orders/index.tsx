import CartItem from "@/components/CartItem";
import { useItemContext } from "@/hooks/ItemContext";
import { FlatList, Text, View } from "react-native";
import * as Icon from "react-native-feather";
import { ShoppingCart } from "react-native-feather";

export default function Orders() {
  const { selectedItems } = useItemContext();

  return (
    <View className="bg-[#171717] flex-1">
      <View className="mt-20 flex flex-row items-center ">
        <Text className="color-white text-4xl font-extrabold pl-2">ORDERS</Text>
      </View>
      {selectedItems.length == 0 ? (
       <View
       className="flex-1 justify-center"
       style={{ alignItems: "center", paddingBottom: 120 }}
     >
       <View className="flex-row">
         <Icon.Bell stroke="#F4BA45" width={30} height={20} />
         <Text className="text-white text-xl font-extrabold">
           {" "}
           No Order Yet
         </Text>
       </View>
     </View>
      ) : (
        <View
          style={{
            borderWidth: 3,
            borderColor: "#F4BA45",
            borderRadius: 50,
            margin: 20,
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={selectedItems}
            renderItem={({ item }) => {
              return (
                <View className="flex mt-2" style={{padding:17}} >
                  <View
                    className="flex-row justify-between "
                    style={{ backgroundColor: "#FABA45" ,padding:3, borderRadius: 50}}
                  >
                    <Text className="font-bold">{item.name}</Text>
                    <Text className="font-bold">{item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
          {
            <Icon.Heart
              style={{ marginLeft: 170, marginBottom: 10 }}
              stroke="#FABA45"
              width={32}
              height={32}
            />
          }
        </View>
      )}
    </View>
  );
}
