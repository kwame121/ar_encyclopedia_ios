
'use strict';

import React, { Component,useState } from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
    ViroScene,
    ViroARScene,
    ViroAmbientLight,
    Viro360Video,
    ViroDirectionalLight,
    Viro360Image,
    ViroUtils,
    ViroPortal,
    ViroPortalScene,
    Viro3DObject,ViroSpinner,
ViroNode,ViroImage } from '@viro-community/react-viro';
import { getPortalData } from '../../../Utils/functions';


    
    const Main = (props) => {


        const [portalObj,setPortalObj] = React.useState({});
        const [isLoading,setIsLoading] = React.useState(false);
        const [position,setPosition] = React.useState([0,-1.0,-1.5]);
        const [scale,setScale] = React.useState(1.0);
        const [planeReticleLocation,setPlaneReticleLocation] = useState([0,0,0]);
        const [shouldBillboard,setShouldBillboard] = useState(true);
        const [displayHitReticle,setDisplayHitReticle] = useState(false);
        const [foundPlane,setFoundPlane] = useState(false);
        const [finalPosition,setFinalPosition] = useState([0,0,0]);
        const [isReady,setIsReady]  = useState(false);
        const doorRef = React.useRef()
        React.useEffect(()=>{

            if (props?.sceneNavigator?.viroAppProps?.portalEntry == 'ar')
                {   
                    let _portal = getPortalData((props?.sceneNavigator?.viroAppProps?.id+1).toString());
                    setPortalObj(_portal);
                }
                else
                {   
                    let _portal = getPortalData(props?.sceneNavigator?.viroAppProps?.id)
                    setPortalObj(_portal);
                }
        },[props?.sceneNavigator?.viroAppProps?.id]);

        const handleStartLoading = () => {
            props?.sceneNavigator?.viroAppProps?.setIsLoading(true);
        }

        const handleEndLoading = () => {
            props?.sceneNavigator?.viroAppProps?.setIsLoading(false);
        }

        const handleDrag = (dragPos,source) => {
            doorRef?.current?.setNativeProps({
                position:dragPos
            })
        }
        const handlePinch = (state,scaleFactor) => {
            if (state == 3) 
            {
              let _scale = scale * scaleFactor;
              setScale(_scale);
            }
          }
        
          const onCameraHitTest = (results) => 
          {
              if (isReady) {
                  if (results.hitTestResults.length > 0) {
                    for (var i = 0; i < results.hitTestResults.length; i++) {
                      let result = results.hitTestResults[i];
                      if (result.type == "ExistingPlaneUsingExtent") {
                      setPlaneReticleLocation(result.transform.position);
                      setDisplayHitReticle(true);
                      setFoundPlane(true);
             //           this.props.arSceneNavigator.viroAppProps.setIsOverPlane(true);
                        return;
                      }
                    }
                  }
                  return;
                }
            
                //else we made it here, so just forward vector with unmarked.
                let newPosition = [results.cameraOrientation.forward[0] * 1.5, results.cameraOrientation.forward[1] * 1.5, results.cameraOrientation.forward[2] * 1.5];
                newPosition[0] = results.cameraOrientation.position[0] + newPosition[0];
                newPosition[1] = results.cameraOrientation.position[1] + newPosition[1];
                newPosition[2] = results.cameraOrientation.position[2] + newPosition[2];
                  setPlaneReticleLocation(newPosition);
                  setDisplayHitReticle(true);
                  setFoundPlane(true);
                
              //  this.props.arSceneNavigator.viroAppProps.setIsOverPlane(false);
          }
      
          const _onClickScanningQuads = () => {
              if (foundPlane) {
               setIsReady(true);
              }
              setFinalPosition(planeReticleLocation);
            }
      
          const getScanningQuads  = () => {
      
          if (isReady) {
            return;
          }
      
          return (
            <ViroNode
              transformBehaviors={"billboardY"}
              position={planeReticleLocation}
              scale={[1, 0.1, .8]}
              onClick={_onClickScanningQuads}
            >
              <ViroImage rotation={[-90, 0, 0]} visible={foundPlane} source={require('../../../assets/images/grid.png')} />
              <ViroImage rotation={[-90, 0, 0]} visible={foundPlane} source={require('../../../assets/images/grid.png')} />
            </ViroNode>
          )
          }
      
    

      return (
        <ViroARScene onCameraARHitTest={onCameraHitTest}>
            <ViroDirectionalLight
                color="#ffffff"
                direction={[0, -1, -.5]}
                position={[0, 9, 0]}
                castsShadow={true}
                shadowOpacity={.9}
                />
        <ViroAmbientLight color="#ffffff" intensity={300}/>
            {/* <ViroSpinner
                type='dark'
                position={position}
                visible={props?.sceneNavigator?.viroAppProps?.isLoading}
            /> */}
              {getScanningQuads()}
            {
                isReady && 
                <ViroPortalScene passable={true}>
                <ViroPortal dragType="FixedDistance" onDrag={handleDrag} position={finalPosition} scale={[scale, scale, scale]} onPinch={handlePinch} ref={doorRef}>
                    <Viro3DObject source={require('../../../assets/models/window/residential_window.glb')}
                    onLoadStart = {handleStartLoading}
                    onLoadEnd = {handleEndLoading}
                    type="GLB"/>
                </ViroPortal>
                <Viro360Image source={portalObj?.portalImgUrl}  />
                {/* <Viro360Video source={require('../../../assets/video/antarctica.mp4')}  /> */}
                </ViroPortalScene>
            }
           
      </ViroARScene>
      )
    }
    
    export default Main