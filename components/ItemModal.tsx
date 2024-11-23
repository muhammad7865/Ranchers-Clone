import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Minus, Plus } from "react-native-feather";
import CustomAccordion from './CustomAccrodion';
import extras from "@/categories.json";

const ItemModal = ({ visible, onClose, item }: any) => {
  const [quantity, setQuantity] = useState(1);

  const [addOns, setAddOns] = useState<any[]>(extras.products[6].items);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/80">
        <View className="flex-1 mt-20 bg-[#171717] rounded-t-3xl">
          <View className="border border-b-0 border-t-2 border-white">
            <Text>msdj</Text>
          </View>

          <ScrollView className="flex-1">
            {/* Header */}
            <View className="p-5">
              <View className="flex-row mt-20 justify-between items-start">
                <Text className="text-white text-4xl font-bold flex-1">
                  {item?.name}
                </Text>
                <Text className="text-white text-2xl font-bold">
                  Rs.{item?.price}
                </Text>
              </View>
              <Text className="text-white mt-5 mb-5 text-base">
                {item?.description}
              </Text>
            </View>

            {/* Options Sections */}
            <View>
              <CustomAccordion extra={addOns} currentItem={item}/>
              
            </View>
            {/* Add Ons Section */}
          </ScrollView>

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
              onPress={onClose}
              className="bg-[#F4BA45] px-3 py-3 rounded-full"
            >
              <Text className="text-black font-bold text-lg">Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
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