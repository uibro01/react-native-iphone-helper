import { Dimensions, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info'

export const isIphone6 = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 6"
  );
};

export const isIphone6Plus = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 6 Plus"
  );
};

export const isIphone61stGen = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone SE (1st generation)"
  );
};

export const isIphone7 = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 7"
  );
};

export const isIphone7Plus = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 7 Plus"
  );
};

export const isIphone8 = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 8"
  );
};

export const isIphone8Plus = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 8 Plus"
  );
};


export const isIphoneX = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone X"
  );
};

export const isIphone11 = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 11"
  );
};

export const isIphoneXR = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone XR"
  );
};

export const isIphoneXS = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone XS"
  );
};

export const isIphoneXSMax = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone XS Max"
  );
};


export const isIphone11Pro = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 11 Pro"
  );
};


export const isIphone11ProMax = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 11 Pro Max"
  );
};

export const isIphone122ndgen = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone SE (2nd generation)"
  );
};


export const isIphone12mini = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 12 mini"
  );
};


export const isIphone12 = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 12"
  );
};


export const isIphone12Pro = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 12 Pro"
  );
};


export const isIphone12ProMax = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 12 Pro Max"
  );
};

export const isIphone12ProMax = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" && DeviceInfo.getModel() === "iPhone 12 Pro Max"
  );
};

export const concernSESize = (originalSize, x2Size) => {
  return isIphone12() ? x2Size : originalSize;
};
