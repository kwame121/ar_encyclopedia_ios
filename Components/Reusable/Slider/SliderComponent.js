import React, {useCallback, useState} from 'react';
import Slider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Notch from './Notch';
import Label from './Label';
import { View } from 'react-native';



const SliderComponent = ({setValue}) => {
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  // const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const renderThumb = useCallback(
    (name='low') => <Thumb name={name} />,
    [],
  );
  const handleValueChange = useCallback((lowValue) => {
    setValue(lowValue);
  }, []);

  return (
    <Slider
    style={{display:'flex',padding:0,width:'100%',textAlign:'center',justifyContent:'center'}}
    disableRange = {true}
    min={0}   
    max={360}
    step={0.01}
    renderThumb={renderThumb}
    renderRail={renderRail}
    renderRailSelected={renderRailSelected}
    // renderLabel={renderLabel}
    renderNotch={renderNotch}
    onValueChanged={handleValueChange}
    
    />
    
  )
}

export default SliderComponent;