import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
      if (event.translationX < 0) {
        offset.value = event.translationX;
      }
    })

    .onFinalize(() => {
      if (offset.value <= -150) {
        runOnJS(onSwipe)();
      }
      offset.value = withSpring(0);
      pressed.value = false;
    });
  return (
    <View style={styles.swipeContainer}>
      <Animated.View entering={SlideInLeft}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.swipeItem, animatedStyles]}>
            <Text style={styles.swipeItemText}>{name}</Text>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
