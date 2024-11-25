import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Items {
  selectedItems: any[];
  setSelectedItems: Dispatch<React.SetStateAction<any[]>>;
  TotalAmount: number;
  setTotalAmount: Dispatch<React.SetStateAction<number>>;
}

const ContextData = createContext<Items | undefined>(undefined);

export function useItemContext() {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error("useItemContext must be used within a ContextDataProvider");
  }
  return context;
}

interface ContextDataProviderProps {
  children: ReactNode;
}

export function ContextDataProvider({ children }: ContextDataProviderProps) {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [TotalAmount, setTotalAmount] = useState<number>(0);

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    const total = selectedItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotalAmount(total);
  };

  // Recalculate total amount when selectedItems change
  useEffect(() => {
    calculateTotalAmount();
  }, [selectedItems]);

  const contextDataValue: Items = {
    selectedItems,
    setSelectedItems,
    TotalAmount,
    setTotalAmount
  };

  return (
    <ContextData.Provider value={contextDataValue}>
      {children}
    </ContextData.Provider>
  );
}
