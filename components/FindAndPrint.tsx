import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import menuData from "@/categories.json";

const FindAndPrint = ({ items, handleSelection, selectedItems }: any) => {
  // Identify the category of the item
  const category = findCategory(items);
  const [checked, setChecked] = useState("");

  // Check if the item is already selected
  const isSelected = (name: string) =>
    selectedItems.some((selectedItem: any) => selectedItem.name === name);

  const handleRadioButtonPress = (item: any) => {
    handleSelection(item);
  };

  switch (category) {
    case "Deals":
    case "Drinks":
      return (
        <View style={styles.normal}>
          <View className="flex-row justify-between items-center">
            <RadioButton
              value={items.name}
              status={isSelected(items.name) ? "checked" : "unchecked"}
              onPress={() => handleRadioButtonPress(items)}
            />
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white">{items.price}</Text>
          </View>
        </View>
      );

    case "Chicken Burger":
    case "Beef Burger":
      return (
        <View style={styles.normal}>
          <View className="flex-row justify-between items-center">
            <RadioButton
              value={items.name}
              status={isSelected(items.name) ? "checked" : "unchecked"}
              onPress={() => {
                // Deselect the combo if it's selected
                if (isSelected(`Combo ${items.name}`)) {
                  handleRadioButtonPress({
                    name: `Combo ${items.name}`,
                    price: 0,
                  }); // Deselect combo
                }
                handleRadioButtonPress(items); // Select the regular item
              }}
            />
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white">{items.price}</Text>
          </View>
          {items.isCombo && (
            <View className="flex-row justify-between items-center">
              <RadioButton
                value={`Combo ${items.name}`}
                status={
                  isSelected(`Combo ${items.name}`) ? "checked" : "unchecked"
                }
                onPress={() => {
                  // Deselect the regular item if it's selected
                  if (isSelected(items.name)) {
                    handleRadioButtonPress({ name: items.name, price: 0 }); // Deselect regular item
                  }
                  handleRadioButtonPress({
                    name: `Combo ${items.name}`,
                    price: items.comboPrice,
                  }); // Select the combo item
                }}
              />
              <Text className="text-white">{`Combo ${items.name}`}</Text>
              <Text className="text-white">{items.comboPrice}</Text>
            </View>
          )}
        </View>
      );

    case "Pizza":
      return (
        <View style={styles.normal}>
          {["small", "medium", "large"].map((size) =>
            items.prices[size] ? (
              <View
                key={`${items.name}-${size}`}
                className="flex-row justify-between items-center"
              >
                <RadioButton
                  value={`${items.name} ${size.toUpperCase()}`}
                  status={
                    isSelected(`${items.name} ${size.toUpperCase()}`)
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => {
                    // Deselect other sizes if selected
                    ["small", "medium", "large"].forEach((otherSize) => {
                      if (
                        otherSize !== size &&
                        isSelected(`${items.name} ${otherSize.toUpperCase()}`)
                      ) {
                        handleRadioButtonPress({
                          name: `${items.name} ${otherSize.toUpperCase()}`,
                          price: 0, // Deselect the other size
                        });
                      }
                    });

                    // Select the new size
                    handleRadioButtonPress({
                      name: `${items.name} ${size.toUpperCase()}`,
                      price: items.prices[size],
                    });
                  }}
                />
                <Text className="text-white">{`${
                  items.name
                } ${size.toUpperCase()}`}</Text>
                <Text className="text-white">{items.prices[size]}</Text>
              </View>
            ) : null
          )}
        </View>
      );

      case "Fries":
        if (items.prices) {
          return (
            <View
              style={{
                borderWidth: 1,
                marginTop: 13,
                marginBottom: 19,
                borderColor: "#F4BA45",
                padding: 10,
              }}
            >
              {items.prices.small && (
                <View>
                  <View className="flex-row justify-between">
                    <View className="flex-row ">
                      <RadioButton
                        value="first"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked("first")}
                      />
                      <Text className="text-white  pt-2">{items.name} SMALL</Text>
                    </View>
  
                    <View>
                      <Text className="text-white pt-2">
                        {items.prices.small}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              {items.prices.medium && (
                <View>
                  <View className="flex-row justify-between">
                    <View className="flex-row">
                      <RadioButton
                        value="first"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked("first")}
                      />
                      <Text className="text-white  ">{items.name} MEDIUM</Text>
                    </View>
  
                    <View>
                      <Text className="text-white  ">{items.prices.medium}</Text>
                    </View>
                  </View>
                </View>
              )}
              {items.prices.large && (
                <View>
                  <View className="flex-row justify-between">
                    <View className="flex-row">
                      <RadioButton
                        value="first"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked("first")}
                      />
                      <Text className="text-white  ">{items.name} MEDIUM</Text>
                    </View>
  
                    <View>
                      <Text className="text-white  ">{items.prices.medium}</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          );
        } else {
          return (
            <View
              style={{
                borderWidth: 1,
                marginTop: 13,
                marginBottom: 19,
                borderColor: "#F4BA45",
                padding: 10,
              }}
            >
              <View className="flex flex-row justify-between">
                <Text className="text-white">{items.name}</Text>
                <Text className="text-white"> {items.price}</Text>
              </View>
            </View>
          );
        }
  
      case "Quick Bites":
        if (items.prices) {
          return (
            <View
              style={{
                borderWidth: 1,
                marginTop: 13,
                marginBottom: 19,
                borderColor: "#F4BA45",
                padding: 10,
              }}
            >
              {items.prices["1pc"] && (
                <View>
                  <View className="flex-row justify-between">
                    <View className="flex-row ">
                      <RadioButton
                        value="first"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked("first")}
                      />
                      <Text className="text-white  pt-2">1 {items.name}</Text>
                    </View>
  
                    <View>
                      <Text className="text-white">{items.prices["1pc"]}</Text>
                    </View>
                  </View>
                </View>
              )}
              {items.prices["3pc"] && (
                <View>
                  <View className="flex-row justify-between">
                    <View className="flex-row ">
                      <RadioButton
                        value="first"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked("first")}
                      />
                      <Text className="text-white  pt-2">3 {items.name}</Text>
                    </View>
  
                    <View>
                      <Text className="text-white">{items.prices["3pc"]}</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          );
        } else {
          return (
            <View
              style={{
                borderWidth: 1,
                marginTop: 13,
                marginBottom: 19,
                borderColor: "#F4BA45",
                padding: 10,
              }}
            >
              <View className="flex flex-row justify-between">
                <Text className="text-white">{items.name}</Text>
                <Text className="text-white"> {items.price}</Text>
              </View>
            </View>
          );
        }
  
  
     

    default:
      return (
        <View style={styles.normal}>
          <View className="flex-row justify-between items-center">
            <RadioButton
              value={items.name}
              status={isSelected(items.name) ? "checked" : "unchecked"}
              onPress={() => handleRadioButtonPress(items)}
            />
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white">{items.price}</Text>
          </View>
        </View>
      );
  }
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

export default FindAndPrint;

const styles = StyleSheet.create({
  normal: {
    borderWidth: 1,
    marginTop: 13,
    marginBottom: 19,
    borderColor: "#F4BA45",
    padding: 10,
  },
});
