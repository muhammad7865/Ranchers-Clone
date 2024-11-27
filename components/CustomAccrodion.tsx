import React, { useState } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { RadioButton } from "react-native-paper";
import { ChevronUp, ChevronDown } from "react-native-feather";
import extras from "@/categories.json";
import DetailsAccordion from "./DetailsAccordion";

const CustomAccordion = ({
  currentItem,
  handleSelection,
  selectedItems,
}: any) => {
  const [isAddonOpen, setIsAddonOpen] = useState(false);
  const [isSelectedOpen, setisSelectedOpen] = useState(false);
  const [checked, setChecked] = useState("unchecked");
  const [addOns] = useState<any[]>(extras.products[6].items);

  const toggleAccordionitem = () => {
    setisSelectedOpen(!isSelectedOpen);
  };
  const toggleAccordionaddOn = () => {
    setIsAddonOpen(!isAddonOpen);
  };

  return (
    <View>
      {/* Item selected View  */}

      <View>
        <TouchableOpacity onPress={() => toggleAccordionitem()} onPressIn={()=>setIsAddonOpen(false)}>
          <View
            className="border-2 flex flex-row justify-between p-2"
            style={{ borderColor: "#F4BA45" }}
          >
            <TouchableOpacity>
              <Text className="text-white font-bold align-center pt-2">
                OPTIONS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleAccordionitem} onPressIn={()=>setIsAddonOpen(false)}>
              {isSelectedOpen ? (
                <ChevronUp stroke="#F4BA45" width={23} />
              ) : (
                <ChevronDown stroke="#F4BA45" width={23} />
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {isSelectedOpen && (
          <View>
            <DetailsAccordion
              items={currentItem}
              handleSelection={handleSelection}
              selectedItems={selectedItems}
            />
          </View>
        )}
      </View>

      {/* Addon View */}

      <View className="mt-4 ">
        <TouchableOpacity onPress={() => toggleAccordionaddOn()} onPressIn={()=>setisSelectedOpen(false)}>
          <View
            className="border-2 flex flex-row justify-between p-2"
            style={{ borderColor: "#F4BA45" }}
          >
            <Text className="text-white font-bold align-center pt-2">
              AddOn
            </Text>

            <TouchableOpacity onPress={toggleAccordionaddOn} onPressIn={()=>setisSelectedOpen(false)}>
              {isAddonOpen ? (
                <ChevronUp stroke="#F4BA45" width={23} />
              ) : (
                <ChevronDown stroke="#F4BA45" width={23} />
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
                <TouchableOpacity onPress={() => handleSelection(item)}>
                  <View className="flex flex-row items-center ">
                    <View>
                      <RadioButton
                        color="#F4BA45"
                        uncheckedColor="#F4BA45"
                        value={item.name}
                        status={
                          selectedItems.some(
                            (selected: any) => selected.name === item.name
                          )
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => handleSelection(item)}
                      />
                    </View>
                    <View className="flex-1 flex-row justify-between items-center">
                      <Text className="text-white">{item.name}</Text>
                      <Text className="text-white">{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomAccordion;
