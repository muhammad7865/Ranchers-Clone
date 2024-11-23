import React, { useState } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { RadioButton } from "react-native-paper";
import { ChevronUp, ChevronDown } from "react-native-feather";
import extras from "@/categories.json";
import FindAndPrint from "./FindAndPrint";
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

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
          className="border-2 flex flex-row justify-between p-2 rounded-md "

          style={{ borderColor: "#F4BA45" ,marginHorizontal:20 ,borderRadius:10 ,paddingTop:10}}
        >
          <TouchableOpacity>
            <Text className="text-white pt-1 text-xl align-center">
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
          
          <View style={{marginHorizontal:20  }} className="rounded-2xl">
             <FindAndPrint items={currentItem} />
          </View>
        )}
      </View>

      {/* Addon View */}
      <View className="mt-4 ">
        <View
          className="border-2 flex flex-row justify-between p-2"
          style={{ borderColor: "#F4BA45" ,marginHorizontal:20 ,borderRadius:10 ,paddingTop:10}}
        >
          <TouchableOpacity>
            <Text className="text-white pb-2 align-center pt-1 text-xl">
              Add Ons
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
              borderRadius:10,
              marginHorizontal:20  
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

                  <View   style ={{  
                    display:"flex" ,
                    flexDirection:"row",
                    justifyContent: "space-between",
                    alignItems: "center", 
                    width:300,
                    marginVertical:5
                     }}>

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
