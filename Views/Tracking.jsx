import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroTrackingStateConstants,
  ViroFlexView,
  ViroImage,
} from '@viro-community/react-viro';



const Tracking = (
  MyARViewProps
) => {
  return (
      <View style={{flex: 1}}>
        <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: HelloWorldSceneAR,
            }}
            style={styles.f1}
        />
        <View style={[styles.buttons]}>
          <View style={[styles.button]}>
            <Text style={[styles.buttonLabel]}>A button</Text>
          </View>
        </View>
      </View>
  );
};

export default Tracking;

const HelloWorldSceneAR = () => {
  const [tracking, setTracking] = useState(false);

  function onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setTracking(true);
    } else if (state === ViroConstants.TRACKING_NONE) {
      setTracking(false)
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {tracking && (<ViroFlexView
          style={{flexDirection: 'row', padding: 0.1}}
          width={2.0}
          height={.4}
          position={[0, 0.25, -1]}
      >
        <ViroText text="hello, world" />
      </ViroFlexView>)}
    </ViroARScene>
  );
};

let styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center"
  },
  buttons: {
    height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 128,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
