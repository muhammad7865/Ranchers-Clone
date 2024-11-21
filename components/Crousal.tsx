import React, { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import { ChevronLeft, ChevronRight } from "react-native-feather"

const SCREEN_WIDTH = Dimensions.get('window').width

const Carousel = ({ children: slides, autoSlide = true, autoSlideInterval = 3000 }:any) => {
    const [curr, setCurr] = useState(0)
    const scrollViewRef = useRef(null)

    const prev = () => {
        const newIndex = curr === 0 ? slides.length - 1 : curr - 1
        setCurr(newIndex)
        scrollViewRef.current?.scrollTo({
            x: newIndex * SCREEN_WIDTH,
            animated: true
        })
    }

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
    }, [curr])

    return (
        <View className="h-52 relative bg-[#171717]">
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
                {React.Children.map(slides, (child, index) => (
                    <View style={{ width: SCREEN_WIDTH }} key={index}>
                        <View className="h-52 justify-center items-center">
                            {child}
                        </View>
                    </View>
                ))}
            </ScrollView>
            
            <View className="absolute inset-0 flex-row items-center justify-between px-2 z-10">
                <TouchableOpacity 
                    onPress={prev} 
                    className="w-8 h-8 rounded-full bg-black/30 items-center justify-center"
                >
                    <ChevronLeft stroke="white" width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={next} 
                    className="w-8 h-8 rounded-full bg-black/30 items-center justify-center"
                >
                    <ChevronRight stroke="white" width={24} height={24} />
                </TouchableOpacity>
            </View>
            
            <View className="absolute bottom-2 right-0 left-0 z-10">
                <View className="flex-row items-center justify-center gap-1">
                    {slides.map((_: any, i: React.Key | null | undefined) => (
                        <View
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full bg-white ${
                                curr === i ? "opacity-100" : "opacity-50"
                            } mx-1`}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Carousel