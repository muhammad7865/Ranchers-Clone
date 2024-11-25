import { useItemContext } from "@/hooks/ItemContext";
import { FlatList, Text, View } from "react-native";

export default function Orders() {
  const { selectedItems } = useItemContext();
  return (
    <View className="bg-[#171717] flex-1">
      <View className="mt-20 flex flex-row items-center pl-">
        <Text className="color-white text-4xl font-extrabold pl-2">ORDERS</Text>
      </View>
      {selectedItems.length == 0 ? (
        <FlatList
          data={selectedItems}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text className="text-white ">{item.name}</Text>
              <Text className="text-white ">{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text className="text-white "> There is nothing In Cart</Text>
      )}
    </View>
  );
}
