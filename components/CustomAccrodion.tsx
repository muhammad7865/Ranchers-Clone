import React, { useState } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { RadioButton } from "react-native-paper";
import { ChevronUp, ChevronDown } from "react-native-feather";
import extras from "@/categories.json";
import FindAndPrint from "./FindAndPrint";

const CustomAccordion = ({ currentItem }: any) => {
  const [isAddonOpen, setIsAddonOpen] = useState(false);
  const [isSelectedOpen, setisSelectedOpen] = useState(false);
  const [checked, setChecked] = useState("unchecked");
  const [selectedItem, setSelectedItem] = useState(null);
  const [addOns] = useState<any[]>(extras.products[6].items);
  

  const toggleAccordionitem = () => {
    setisSelectedOpen(!isSelectedOpen);
  };
  const toggleAccordionaddOn = () => {
    setIsAddonOpen(!isAddonOpen);
  };
  const handleSelectItem = (item) => {
    const exists = selectedItems.find((selected) => selected.name === item.name);
    if (exists) {
      // If item is already selected, remove it
      setSelectedItems(selectedItems.filter((selected) => selected.name !== item.name));
    } else {
      // If item is not selected, add it
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <View>
      {/* Item selected View  */}

      <View>
        <View
          className="border-2 flex flex-row justify-between p-2"
          style={{ borderColor: "#F4BA45" }}
        >
          <TouchableOpacity>
            <Text className="text-white font-bold align-center pt-2">
              OPTIONS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleAccordionitem}>
            {isSelectedOpen ? (
              <ChevronUp stroke="#F4BA45" width={23} />
            ) : (
              <ChevronDown stroke="#F4BA45" width={23} />
            )}
          </TouchableOpacity>
        </View>
        {isSelectedOpen && (
          <View>
            <FindAndPrint items={currentItem} />
          </View>
        )}
      </View>

      {/* Addon View */}
      <View className="mt-4 ">
        <View
          className="border-2 flex flex-row justify-between p-2"
          style={{ borderColor: "#F4BA45" }}
        >
          <TouchableOpacity>
            <Text className="text-white font-bold align-center pt-2">
              AddOn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleAccordionaddOn}>
            {isAddonOpen ? (
              <ChevronUp stroke="#F4BA45" width={23} />
            ) : (
              <ChevronDown stroke="#F4BA45" width={23} />
            )}
          </TouchableOpacity>
        </View>
        {isAddonOpen && (
          <View
            style={{
              borderWidth: 1,
              marginTop: 13,
              marginBottom: 19,
              borderColor: "#F4BA45",
            }}
          >
            <FlatList
              data={addOns}
              renderItem={({ item }) => (
                <View className="flex flex-row">
                  <View>
                  <RadioButton
                  value={item.name}
                  status={selectedItem === item.name ? "checked" : "unchecked"}
                  onPress={() => handleSelectItem(item)}
                />

                  </View>
                  <View className="flex flex-row justify-between">
                    <Text className="text-white">{item.name}</Text>
                    <Text className="text-white"> {item.price}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomAccordion;
