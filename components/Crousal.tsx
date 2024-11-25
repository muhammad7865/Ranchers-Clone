import React, { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import { ChevronLeft, ChevronRight } from "react-native-feather"

const SCREEN_WIDTH = Dimensions.get('window').width

interface SlideImage {
  id: number;
  imageUrl: string;
}

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const slides: SlideImage[] = [
  { id: 1, imageUrl: "https://rancherscafe.com/wp-content/uploads/2024/05/TRIOFEAST-1.webp" },
  { id: 2, imageUrl: "https://rancherscafe.com/wp-content/uploads/2024/09/ANY2.webp" },
  { id: 3, imageUrl: "https://rancherscafe.com/wp-content/uploads/2024/07/TWOFORYOU.webp" },
  { id: 4, imageUrl: "https://rancherscafe.com/wp-content/uploads/2024/07/GRUBONTHEGO.webp" }
 
]

const Carousel: React.FC<CarouselProps> = ({ 
  autoSlide = true, 
  autoSlideInterval = 3000 
}) => {
    const [curr, setCurr] = useState(0)
    const scrollViewRef = useRef<ScrollView>(null)


    const next = () => {
        const newIndex = curr === slides.length - 1 ? 0 : curr + 1
        setCurr(newIndex)
        scrollViewRef.current?.scrollTo({
            x: newIndex * SCREEN_WIDTH,
            animated: true
        })
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [curr, autoSlide, autoSlideInterval])

    return (
        <View className="h-48 relative bg-[#171717]">
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const slideNumber = Math.round(
                        event.nativeEvent.contentOffset.x / SCREEN_WIDTH
                    )
                    setCurr(slideNumber)
                }}
            >
                {slides.map((slide) => (
                    <View 
                        style={{ width: SCREEN_WIDTH }} 
                        key={slide.id}
                        className="px-4"
                    >
                        <View className="h-48 rounded-xl overflow-hidden">
                            <Image
                                source={{ uri: slide.imageUrl }}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
            
        </View>
    )
}

export default Carousel

