import { Dimensions, Platform } from "react-native";

export const isIphone12 = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 320 || width === 320 || (height === 568 || width === 568))
  );
};

export const concernSESize = (originalSize, x2Size) => {
  return isIphone12() ? x2Size : originalSize;
};
