import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { RadioButton } from "react-native-paper";

const CustomAccordion = ({ extra,currentItem }: any) => {
  const [isAddonOpen, setIsAddonOpen] = useState(false);
  const [isComboOpen, setIsComboOpen] = useState(false);
    const[checked,setChecked]=useState("unchecked");

  const toggleAccordionCombo = () => {
    setIsComboOpen(!isComboOpen);
  };
  const toggleAccordionaddOn = () => {
    setIsAddonOpen(!isAddonOpen);
  };


  return (
    <View>
        <View >
        <TouchableOpacity onPress={toggleAccordionCombo}>
        <Text className="text-white">Combo</Text>

      </TouchableOpacity>

      {isComboOpen && (
          <View>
            <Text className="text-white font-bold " >{currentItem.name}</Text>
            <Text  className="text-white font-bold ">{currentItem.price}</Text>
            </View>
      )}
        </View>
        
    <View >
        
      <TouchableOpacity onPress={toggleAccordionaddOn}>
        <Text className="text-white">Open</Text>

      </TouchableOpacity>
      {isAddonOpen && (
          <View >
          <FlatList
            data={extra}
            renderItem={({ item }) => (
                <View className="flex flex-row">
                <View className="">
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                    />
                </View>
                <View className="flex flex-row justify-between items-center ">
                  <Text className="text-white">{item.name}</Text>
                  <Text className="text-white">{item.price}</Text>
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