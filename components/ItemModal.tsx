import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Minus, Plus } from "react-native-feather";
import CustomAccordion from "./CustomAccrodion";
import Cart from "@/app/cart";
import MenuItem from './ItemMenu';

const ItemModal = ({ visible, onClose, item }: any) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleSelection = (newItem: any) => {
    setSelectedItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.name === newItem.name
      );

      if (existingItemIndex >= 0) {
        // If the item exists, remove it from the list
        return prev.filter((_, index) => index !== existingItemIndex);
      } else {
        // If the item does not exist, add it to the list
        return [...prev, newItem];
      }
    });
  };

  const handleAddToCart = () => {
    <Cart item={selectedItems}/>
    //clear the cart
    setSelectedItems([])
  
    // router.push({
    //   pathname: "/cart", 
    //   params: { items: selectedItems },
    // });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/80 ">
        <View className="flex-1 mt-20 bg-[#171717] rounded-t-3xl">
          <SafeAreaView className="flex-1">
            {/* Header */}
            <View className="p-5">
              <View className="flex-row mt-20 justify-between items-start mr-5 pr-5">
                <Text className="text-white text-3xl font-bold flex-1 pl-5">
                  {item?.name}
                </Text>
                <Text
                  className="text-white text-2xl font-bold  "
                  style={{ marginRight: 20 }}
                >
                  Rs.{item?.price}
                </Text>
              </View>
              <Text className="text-white mt-5 mb-5 text-base pl-5">
                "{item?.description}"
              </Text>
            </View>

            {/* Accordion with seletion function*/}

            <View>
              <CustomAccordion
                currentItem={item}
                handleSelection={handleSelection}
                selectedItems={selectedItems}
              />
            </View>

            <FlatList
              data={selectedItems}
              renderItem={({ item }) => (
                <View>
                  <Text className="color-white">{item.name}</Text>
                </View>
              )}
            />

            {/* SafeAreaView replaced scrollView as flat list performs scrolling too */}
          </SafeAreaView>

          {/* Bottom Bar */}
          <View className="p-4 mb-10 flex-row items-center justify-between bg-[#171717] border-t border-gray-800">
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-10 mr-2 h-10 rounded-full bg-[#F4BA45] items-center justify-center"
              >
                <Minus stroke="black" width="35" />
              </TouchableOpacity>

              <Text className="mx-4 text-white text-xl">{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity((prev) => prev + 1)}
                className="w-10 ml-2 h-10 rounded-full bg-[#F4BA45] items-center justify-center"
              >
                <Plus stroke="black" width="35" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPressOut={() => {
                {
                  setQuantity(1);
                }
                {
                  handleAddToCart();
                }
              }}
              onPress={onClose}
              className="bg-[#F4BA45] px-3 py-3 rounded-full"
            >
              <Text className="text-black font-bold text-lg">Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressOut={() => {
                {
                  setSelectedItems([]);
                }
                {
                  setQuantity(1);
                }
              }}
              onPress={onClose}
              className="bg-[#F4BA45] px-4 py-3 rounded-full"
            >
              <Text className="text-black font-bold text-lg">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ItemModal;
