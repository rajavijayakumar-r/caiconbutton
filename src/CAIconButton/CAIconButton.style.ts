import { ColorValue, StyleSheet } from "react-native";
import { State, StyleObject } from "./CAIconButton.type";

const CAIconButtonStyle = (styleProperties: StyleObject, isHovered: boolean) => {
    const sizeProperties = styleProperties.theme[styleProperties.size];
    const state: State = isHovered ? "hover" : styleProperties.state;
    const colorProperties = styleProperties.theme[styleProperties.type][state];

    return StyleSheet.create({
        container: {
            backgroundColor: colorProperties.backgroundColor.value,
            width: sizeProperties.height.value,
            height: sizeProperties.height.value,
            borderColor: colorProperties.borderColor.value,
            borderWidth: sizeProperties.borderWidth.value,
            borderRadius: sizeProperties.borderRadius.value,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: sizeProperties.paddingTop.value,
            paddingBottom: sizeProperties.paddingBottom.value,
            paddingLeft: sizeProperties.paddingLeft.value,
            paddingRight: sizeProperties.paddingRight.value
        },
        innerCircle: {
            width: sizeProperties.iconSize.value,
            height: sizeProperties.iconSize.value,
            borderWidth: 2,
            borderRadius: sizeProperties.iconSize.value / 2,
            borderColor: colorProperties.iconColor.value,
            backgroundColor: colorProperties.backgroundColor.value,
            alignItems: "center",
        },
        maskCircle: {
            width: sizeProperties.iconSize.value - 2,
            height: sizeProperties.iconSize.value - 2,
            borderRadius: (sizeProperties.iconSize.value - 2) / 2,
            backgroundColor: colorProperties.backgroundColor.value,
            alignItems: "center",
        }
    });
}


export default CAIconButtonStyle;

