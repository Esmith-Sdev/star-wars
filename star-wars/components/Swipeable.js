import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import Animated, {
  SlideInLeft,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
export default function Swipeable({ onSwipe, name }) {
  const pressed = useSharedValue(false);
  function onScroll(e) {
    e.nativeEvent.contentOffset.x >= 200 && onSwipe();
  }
  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll,
  };
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: pressed.value ? "#e5703d" : "#fff",
  }));

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })

    .onChange((event) => {
      offset.value = event.translationX;
    })

    .onFinalize(() => {
      if (offset.value >= 200) {
        runOnJS(onSwipe)();
      }
      offset.value = withSpring(0);
      pressed.value = false;
    });
  return (
    <View style={styles.swipeContainer}>
      <ScrollView {...scrollProps}>
        <Animated.View entering={SlideInLeft}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[styles.swipeItem, animatedStyles]}>
              <Text style={styles.swipeItemText}>{name}</Text>
            </Animated.View>
          </GestureDetector>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
