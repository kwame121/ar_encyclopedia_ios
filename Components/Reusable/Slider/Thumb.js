import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import { defaultScheme } from '../../../Utils/constants';

const THUMB_RADIUS_LOW = 50;
const THUMB_RADIUS_HIGH = 16;

const Thumb = ({name}) => {
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: 30,
    height: 30,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: defaultScheme.defaultColor,
    marginRight:15
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);
