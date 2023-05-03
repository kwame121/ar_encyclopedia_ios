import React, {useState, useCallback} from 'react';
import { models } from '../../Utils/models';
import { ViroARTrackingTargets,ViroARScene,ViroARImageMarker,ViroMaterials,ViroAmbientLight } from '@viro-community/react-viro';
import { getTrackers } from '../../Utils/functions';
import { useFocusEffect } from '@react-navigation/native'
import { materials } from '../../Utils/materials';
import { Alert } from 'react-native';


export const BookScanner = (props) => {

    const [scale,setScale]  = useState(0.1);
    const [isVisible,setIsVisible] = useState(false);
    const [trackerObj,setTrackerObj]  = useState(null);
    const [materialName,setMaterialName] = useState('');
    const videoRef = React.useRef();
    const modelRef = React.useRef();
    const anchorFound = (e) => 
  {
    console.log(e)
    console.log('anchor found')
  }
  
  const handlePinch = (state,scaleFactor) => {
    if (state == 3) 
    {
      let _scale = scale * scaleFactor;
      props?.sceneNavigator?.viroAppProps?.setScale(_scale);
    }
  }
  
  
    const getTrackerObj = (id) => {
      if (id !== null && id !== undefined) 
      {
        let tracker = getTrackers(id)[0];
        // console.log(tracker?.imgUrl);
        let _trackerObj = {};
        _trackerObj[tracker?.title] = {
          source:tracker.imgUrl,
          orientation:'Up',
          physicalWidth:0.05
        };
        // console.log(_trackerObj,'trackerObj')
        ViroARTrackingTargets.createTargets(_trackerObj);
        setTrackerObj(_trackerObj);
      } 
    }
 
    const getModel = (id) => {
  
      if (isVisible)
      {
        let model = models?.filter((model)=>{
          return model?.trackerId == id;
        })[0];
        // console.log('render triggered')
        return (model?.element(
          props?.sceneNavigator?.viroAppProps?.rotation,
          props?.sceneNavigator?.viroAppProps?.scale,
          handlePinch,
          props?.sceneNavigator?.viroAppProps?.currentAxis,
          '',
          null,null,null,null,null,modelRef
          ));

      }
      return null;  
    }

    const component = React.useMemo(()=>{
      return getModel(props?.sceneNavigator?.viroAppProps?.currentId)
    },[props?.sceneNavigator?.viroAppProps?.currentId,props?.sceneNavigator?.viroAppProps?.scale,props?.sceneNavigator?.viroAppProps?.rotation,props?.sceneNavigator?.viroAppProps?.currentAxis])
  
 
  
  
    React.useEffect(()=>{
      if (!isVisible)
      {
        setIsVisible(true);
      if (props?.sceneNavigator?.viroAppProps?.currentId!==null && props?.sceneNavigator?.viroAppProps?.currentId!==undefined)
      {
        getTrackerObj(props?.sceneNavigator?.viroAppProps?.currentId)
      }
      let model = models?.filter((model)=>{
        return model?.trackerId == props?.sceneNavigator?.viroAppProps?.currentId;
      })[0];
      props?.sceneNavigator?.viroAppProps?.setScale(model?.scale);
      props?.sceneNavigator?.viroAppProps?.setRotation([model?.rotation[0],model?.rotation[1],model?.rotation[2]]);
      setMaterialName(model?.materialName.toString());
      model = null;

      return () => {
        ViroMaterials.deleteMaterials([materialName]);
        ViroARTrackingTargets.deleteTarget([Object?.keys(trackerObj)[0]]);
        setTrackerObj(null);
        setIsVisible(false);
      }
      }   
    },[props?.sceneNavigator?.viroAppProps?.currentId]);

    if (materialName !=='')
    {
      let object = {};
      object[materialName] = materials[materialName];
      console.log({materialName:materials[materialName]})
      ViroMaterials.createMaterials(object);
    }

    return (
        <>
        {(isVisible == true)? 
            <ViroARScene  onError={()=>{Alert.alert('error');props?.sceneNavigator?.viroAppProps?.refresh()}}>
            {
              trackerObj !== null && 
              <ViroARImageMarker target={Object.keys(trackerObj)[0]} onAnchorFound={anchorFound}>
              <ViroAmbientLight color="#ffffff" intensity={1500}/>
                {component}
              </ViroARImageMarker>
            }
          </ViroARScene> :<></>    
        }
        </>       
    );
  };