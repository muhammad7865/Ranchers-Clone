import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
import menuData from "@/categories.json";

const DetailsAccordion = ({ items, handleSelection, selectedItems }: any) => {
  const category = findCategory(items);

  const isSelected = (name: string) =>
    selectedItems.some((selectedItem: any) => selectedItem.name === name);

  const handlePress = (item: any) => {
    handleSelection(item); // Passing the whole item directly
    console.log(selectedItems);
  };

  const renderItem = (item: any, size?: string) => {
    const itemName = size ? `${item.name} ${size.toUpperCase()}` : item.name;
    const itemPrice = size ? item.prices[size] : item.price;

    return (
      <TouchableOpacity
        key={itemName}
        onPress={() =>
          handlePress({
            name: itemName,
            price: itemPrice,
            image: item.image || items.image,
            description: item.description
          })
        }
        className="flex flex-row justify-between items-center mb-3 last:mb-0"
      >
        <View className="flex-row items-center">
          <RadioButton
            color="#F4BA45"
            uncheckedColor="#F4BA45"
            value={itemName}
            status={isSelected(itemName) ? "checked" : "unchecked"}
            onPress={() =>
              handlePress({
                name: itemName,
                price: itemPrice,
                image: item.image || items.image,
                description: item.description
              })
            }
          />
          <Text className="text-white ml-2">{itemName}</Text>
        </View>
        <Text className="text-white">{itemPrice}</Text>
      </TouchableOpacity>
    );
  };

  const renderSizedItems = (item: any, sizes: string[]) => {
    return sizes.map((size) => {
      if (item.prices && item.prices[size]) {
        return renderItem(item, size);
      }
      return null;
    });
  };

  let content;
  switch (category) {
    case "Deals":
    case "Drinks":
      content = renderItem(items);
      break;

    case "Chicken Burger":
    case "Beef Burger":
      content = (
        <>
          {renderItem(items)}
          {items.isCombo &&
            renderItem({
              name: `Combo ${items.name}`,
              price: items.comboPrice,
              image: items.image,
            })}
        </>
      );
      break;

    case "Pizza":
      content = renderSizedItems(items, ["small", "medium", "large"]);
      break;

    case "Fries":
    case "Quick Bites":
      content = items.prices
        ? renderSizedItems(items, ["small", "medium", "large", "1pc", "3pc"])
        : renderItem(items);
      break;

    default:
      content = renderItem(items);
  }

  return (
    <View className="border border-[#F4BA45] mt-3 mb-5 p-4 rounded-lg bg-gray-800">
      {content}
    </View>
  );
};

function findCategory(items: any) {
  for (const category of menuData.products) {
    const foundItem = category.items.find((item) => item.name === items.name);
    if (foundItem) {
      return category.category;
    }
  }
  return "Category not found";
}

export default DetailsAccordion;
