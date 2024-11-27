import { useItemContext } from "@/hooks/ItemContext";
import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Minus, Plus } from "react-native-feather";
import CustomAccordion from "./CustomAccrodion";

const ItemModal = ({ visible, onClose, item }: any) => {
  const [quantity, setQuantity] = useState(1);
  const { selectedItems, setSelectedItems } = useItemContext();

  
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
            
          </SafeAreaView>

          {/* Bottom Bar */}
          <View className="p-4 mb-10 flex-row items-center justify-between bg-[#171717] border-t border-gray-800">
          <TouchableOpacity
              onPressOut={() => {
                {
                  setQuantity(1);
                }
              }}
              onPress={onClose}
              className="bg-[#F4BA45] px-4 py-3 rounded-full"
            >
              <Text className="text-black font-bold text-lg">Close</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPressOut={() => {  setQuantity(1) }}
              onPress={onClose}
              className="bg-[#F4BA45] px-3 py-3 rounded-full"
            >
              <Text className="text-black font-bold text-lg">Add to Cart</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ItemModal;