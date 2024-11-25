import menuData from "@/categories.json";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

const DetailsAccordion = ({ items, handleSelection, selectedItems }: any) => {
  // Identify the category of the item
  const category = findCategory(items);

  // Check if the item is already selected
  const isSelected = (name: string) =>
    selectedItems.some((selectedItem: any) => selectedItem.name === name);

  const handlePress = (item: any) => {
    handleSelection(item);
  };

  switch (category) {
    case "Deals":
    case "Drinks":
      return (
        <View style={styles.normal}>
          <View className="flex-row justify-between items-center">
            <RadioButton
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
            
              value={items.name}
              status={isSelected(items.name) ? "checked" : "unchecked"}
              onPress={() => handlePress(items)}
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
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
              value={items.name}
              status={isSelected(items.name) ? "checked" : "unchecked"}
              onPress={() => {
                // Deselect the combo if it's selected
                if (isSelected(`Combo ${items.name}`)) {
                  handlePress({
                    name: `Combo ${items.name}`,
                    price: 0,
                  }); // Deselect combo
                }
                handlePress(items); // Select the regular item
              }}
            />
            <Text className="text-white">{items.name}</Text>
            <Text className="text-white">{items.price}</Text>
          </View>
          {items.isCombo && (
            <View className="flex-row justify-between items-center">
              <RadioButton
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
                value={`Combo ${items.name}`}
                status={
                  isSelected(`Combo ${items.name}`) ? "checked" : "unchecked"
                }
                onPress={() => {
                  // Deselect the regular item if it's selected
                  if (isSelected(items.name)) {
                    handlePress({ name: items.name, price: 0 }); // Deselect regular item
                  }
                  handlePress({
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
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
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
                        handlePress({
                          name: `${items.name} ${otherSize.toUpperCase()}`,
                          price: 0, // Deselect the other size
                        });
                      }
                    });

                    // Select the new size
                    handlePress({
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
      return (
        <View className="border border-[#F4BA45] mt-3 mb-5 p-4">
          {["small", "medium", "large"].map(
            (size) =>
              items.prices?.[size] && ( // Only render if the size exists
                <View
                  key={`${items.name}-${size}`}
                  className="flex-row justify-between items-center mb-2"
                >
                  <View className="flex-row items-center">
                    <RadioButton
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
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
                            isSelected(
                              `${items.name} ${otherSize.toUpperCase()}`
                            )
                          ) {
                            handlePress({
                              name: `${items.name} ${otherSize.toUpperCase()}`,
                              price: 0, // Deselect the other size
                            });
                          }
                        });

                        // Select the new size
                        handlePress({
                          name: `${items.name} ${size.toUpperCase()}`,
                          price: items.prices[size],
                        });
                      }}
                    />
                    <Text className="text-white ml-2">
                      {items.name} {size.toUpperCase()}
                    </Text>
                  </View>
                  <Text className="text-white">{items.prices[size]}</Text>
                </View>
              )
          )}
          {/* Render for items without multiple sizes */}
          {!items.prices && (
            <View className="flex flex-row justify-between">
              <Text className="text-white">{items.name}</Text>
              <Text className="text-white">{items.price}</Text>
            </View>
          )}
        </View>
      );

    case "Quick Bites":
      return (
        <View className="border border-[#F4BA45] mt-3 mb-5 p-4">
          {["1pc", "3pc"].map(
            (size) =>
              items.prices?.[size] && ( // Render only if the size exists
                <View
                  key={`${items.name}-${size}`}
                  className="flex-row justify-between items-center mb-2"
                >
                  <View className="flex-row items-center">
                    <RadioButton
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
                      value={`${items.name} ${size}`}
                      status={
                        isSelected(`${items.name} ${size}`)
                          ? "checked"
                          : "unchecked"
                      }
                      onPress={() => {
                        // Deselect other sizes if selected
                        ["1pc", "3pc"].forEach((otherSize) => {
                          if (
                            otherSize !== size &&
                            isSelected(`${items.name} ${otherSize}`)
                          ) {
                            handlePress({
                              name: `${items.name} ${otherSize}`,
                              price: 0, // Deselect the other size
                            });
                          }
                        });

                        // Select the new size
                        handlePress({
                          name: `${items.name} ${size}`,
                          price: items.prices[size],
                        });
                      }}
                    />
                    <Text className="text-white ml-2">
                      {`${size === "1pc" ? "1" : "3"} ${items.name}`}
                    </Text>
                  </View>
                  <Text className="text-white">{items.prices[size]}</Text>
                </View>
              )
          )}
          {/* Render for items without multiple price options */}
          {!items.prices && (
            <View className="flex flex-row justify-between">
              <Text className="text-white">{items.name}</Text>
              <Text className="text-white">{items.price}</Text>
            </View>
          )}
        </View>
      );

    default:
      return (
        <View style={styles.normal}>
          <View className="flex-row justify-between items-center">
            <RadioButton
                      color="#F4BA45"
                      uncheckedColor="#F4BA45"
              value={items.name}
              status={isSelected(items.name) ? "checked" : "unchecked"}
              onPress={() => handlePress(items)}
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

export default DetailsAccordion;

const styles = StyleSheet.create({
  normal: {
    borderWidth: 1,
    marginTop: 13,
    marginBottom: 19,
    borderColor: "#F4BA45",
    padding: 10,
  },
});
