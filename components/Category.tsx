import menuData from "@/categories.json";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import CategoryTab from "./CategoryTab";
import MenuItem from "./ItemMenu";
import ItemModal from "./ItemModal";

// Main Category Component
export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(
    menuData.products[0].category
  );
  const [menuItems, setMenuItems] = useState(menuData.products[0].items);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    const categoryData = menuData.products.find((p) => p.category === category);
    setMenuItems(categoryData ? categoryData.items : []);
  };

  const handleAddToCart = (item: any) => {
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
        renderItem={({ item }) => (
          <MenuItem item={item} onAddToCart={handleAddToCart} />
        )}
        keyExtractor={(item) => item.name}
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
