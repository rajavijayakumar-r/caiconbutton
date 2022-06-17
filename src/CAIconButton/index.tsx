import React, { FC } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import CAIconButtonStyle from "./CAIconButton.style";
import { CAIconButtonProps, IconStyle, StyleObject } from "./CAIconButton.type";

let Pressable: any = null;
if (Platform.OS === "web") {
  const Hover = require("react-native-web-hover");
  Pressable = Hover?.Pressable;
}

const CAIconButton: FC<CAIconButtonProps> = (props) => {
  const {
    theme,
    callback,
    size = "l",
    state = "active",
    type = "cta"
   } = props;

   const themeObject: StyleObject = {
     theme: theme as IconStyle,
     size: size,
     state: state,
     type: type,
   };

  if (Platform.OS === "web") {
    return (
      <Pressable focusable = {false}>
        { ({hovered}: any) => {
            const styles = CAIconButtonStyle(themeObject, hovered);
            return (
              <TouchableOpacity onPress={ props.callback }>
                <View style={ styles.container }>
                  <View style={ styles.innerCircle }></View>
                </View>
              </TouchableOpacity>
            );
          }
        }
      </Pressable>
    );
  }

  const styles = CAIconButtonStyle(themeObject, false);
  return (
    <TouchableOpacity onPress={ 
      () => { console.log('Touched'); } 
    }>
      <View style={styles.container}>
        <View style={styles.innerCircle}>
          <View style={styles.maskCircle}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CAIconButton;
