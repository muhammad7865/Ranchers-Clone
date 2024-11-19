import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal, ScrollView, Pressable } from 'react-native';
import { ShoppingCart, ChevronDown, ChevronUp, Minus, Plus } from "react-native-feather";
import menuData from '@/categories.json';
import { Dropdown } from 'react-native-element-dropdown';

// Category Tab Component
const CategoryTab = ({ name, isActive, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`px-4 py-2 mr-2 mx-2 rounded-full ${isActive ? 'bg-[#8B4513]' : 'bg-[#F4BA45]'}`}
  >
    <Text className={`font-semibold ${isActive ? 'text-white' : 'text-black'}`}>
      {name}
    </Text>
  </TouchableOpacity>
);

// ItemModal Component
const ItemModal = ({ visible, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/80">
      
        <View className="flex-1 mt-20 bg-[#171717] rounded-t-3xl">
          <View className='bg-[#F4BA45] '>
            <Text></Text>
          </View>
          <ScrollView className="flex-1">
            
            {/* Header */}
            <View className="p-5">
              <View className="flex-row mt-20 justify-between items-start">
                <Text className="text-white text-4xl font-bold flex-1">{item?.name}</Text>
                <Text className="text-white text-2xl font-bold">Rs.{item?.price}</Text>
              </View>
              <Text className="text-white mt-5 mb-5 text-base">{item?.description}</Text>
            </View>

            {/* Options Sections */}
            


            {/* Add Ons Section */}
          
          </ScrollView>

          {/* Bottom Bar */}
          <View className="p-4 mb-10 flex-row items-center justify-between bg-[#171717] border-t border-gray-800">
            <View className="flex-row items-center">
              <TouchableOpacity 
                onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-10 mr-2 h-10 rounded-full bg-[#F4BA45] items-center justify-center"
              >
                <Minus stroke="black" width="35" />
              </TouchableOpacity>
              <Text className="mx-4 text-white text-xl">{quantity}</Text>
              <TouchableOpacity 
                onPress={() => setQuantity(prev => prev + 1)}
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
}

// Menu Item Component
const MenuItem = ({ item, onAddToCart }) => {
  return (
    <View className="px-4 py-6 mb-4 border-b border-gray-800">
      <Text className="text-white text-2xl font-bold mb-2">{item.name}</Text>
  
      <Image
        source={{ uri: item.image }}
        style={{ width: 130, height: 150, borderRadius: 8 }}
      />
      <Text className="text-white text-base mb-4" numberOfLines={2}>
        {item.description}
      </Text>

      <View className="flex-row mb-3 justify-between items-center">
        <View>
          <Text className="text-[#F4BA45] text-xl font-bold">
            Rs {item.price || (item.prices && item.prices.small) || 'N/A'}
          </Text>
          {item.comboPrice && (
            <Text className="text-[#F4BA45] text-sm mt-1">
              Combo: Rs {item.comboPrice}
            </Text>
          )}
         <View className="border-t border-[#F4BA45] border-1 w-full" />
        </View>
        <TouchableOpacity 
          onPress={() => onAddToCart(item)}
          className="bg-[#F4BA45] p-3 rounded-full"
        >
          <ShoppingCart stroke="black" width={50} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Main Category Component
export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.products[0].category);
  const [menuItems, setMenuItems] = useState(menuData.products[0].items);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const categoryData = menuData.products.find(p => p.category === category);
    setMenuItems(categoryData ? categoryData.items : []);
  };

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View className="flex-1 bg-[#171717]">
      <View className="border-b border-gray-800">
        <FlatList
          data={menuData.products}
          renderItem={({ item }) => (
            <CategoryTab
              name={item.category}
              isActive={item.category === selectedCategory}
              onPress={() => handleCategoryChange(item.category)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="py-3"
        />
      </View>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} onAddToCart={handleAddToCart} />}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <ItemModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={selectedItem}
      />
    </View>
  );
}