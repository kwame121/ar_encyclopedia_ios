import React, {useState, useCallback} from 'react';
import { models } from '../../Utils/models';
import { ViroARTrackingTargets,ViroARScene,ViroARImageMarker,ViroMaterials,ViroAmbientLight,
    ViroText,
    ViroConstants,
    Viro3DObject,
    ViroNode,
    ViroDirectionalLight,
    ViroImage,
    ViroQuad,
    ViroBox,
    ViroSpinner,
    ViroVideo
} from '@viro-community/react-viro';
import { getTrackers } from '../../Utils/functions';
import { useFocusEffect } from '@react-navigation/native'
import { materials } from '../../Utils/materials';
import { Alert } from 'react-native';


export const PlaygroundComponent = (props) => {

    const [scale,setScale]  = useState(0.1);
    const [isVisible,setIsVisible] = useState(false);
    const [trackerObj,setTrackerObj]  = useState(null);
    const [materialName,setMaterialName] = useState('');
    const [isReady,setIsReady]  = useState(false);
    const [lastFoundPlaneLocation,setLastFoundPlanetLocation] = useState([0,0,0]);
    const [planeReticleLocation,setPlaneReticleLocation] = useState([0,0,0]);
    const [shouldBillboard,setShouldBillboard] = useState(true);
    const [displayHitReticle,setDisplayHitReticle] = useState(false);
    const [foundPlane,setFoundPlane] = useState(false);
    const [finalPosition,setFinalPosition] = useState([0,0,0]);
    const [videoPosition,setVideoPosition] = useState([0,2,-2]);
    const videoRef = React.useRef();
    const modelRef = React.useRef();
    const [videoRotation,setVideoRotation] = useState([-45,0,0])
    const [videoScale,setVideoScale] = useState([1.2,0.8,1.5])






  const handlePinch = (state,scaleFactor) => {
    if (state == 3) 
    {
      let _scale = props?.sceneNavigator?.viroAppProps?.scale * scaleFactor;
      props?.sceneNavigator?.viroAppProps?.setScale(_scale);
    }
  }

  const handleVideoPinch = (state,scaleFactor) => {
    if (state == 3) 
    {
      let _scale =  [videoScale[0] * scaleFactor,videoScale[1] * scaleFactor, videoScale[2] * scaleFactor];
      setVideoScale(_scale);
    }
  }

  const handleDrag = (dragPos,source) => {
    // setPlaneReticleLocation(dragPos);
    modelRef?.current?.setNativeProps({
      position:dragPos
    });

    if (props?.sceneNavigator?.viroAppProps?.isLocked && videoRef?.current)
    {
      videoRef?.current?.setNativeProps({
        position:[dragPos[0],dragPos[1] - 1.5,dragPos[2]]
      })

    }
   
  }

  const handleDragVideo = (dragPos,source) => {
    try
    {
      videoRef.current.setNativeProps({
        position:dragPos
      })

    }
    catch(e)
    {
      console.log(e);

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
          physicalWidth:0.05,
          videoSource:tracker?.videoUrl
        };
        // console.log(_trackerObj,'trackerObj')
        ViroARTrackingTargets.createTargets(_trackerObj);
        setTrackerObj(_trackerObj);
      } 
    }

    const startLoading = () => {
        props?.sceneNavigator?.viroAppProps?.setIsLoading(true);
    }

    const stopLoading = () => {
        // Alert.alert('this runsss')
        props?.sceneNavigator?.viroAppProps?.setIsLoading(false);
    }

    const getVideo = () => {

      if (trackerObj && !props?.sceneNavigator?.viroAppProps?.isLoading && isReady && props?.sceneNavigator?.viroAppProps?.isVideoShowing)
      {
        let trackerObjKeys = Object.keys(trackerObj);
        if (trackerObj?.[trackerObjKeys[0]]?.videoSource)
        {
          return (
            <ViroVideo
                    source={trackerObj?.[trackerObjKeys[0]]?.videoSource || '' }
                    loop={false}
                    onDrag={handleDragVideo}
                    key={'videoItem'}
                    ref={videoRef}
                    position={[0,-1.5,-1.5]}
                    scale={videoScale}
                    rotation={[-45,0,0]}
                    paused={props?.sceneNavigator?.viroAppProps?.isPaused}
                    // onRotate={handleRotate}
                    rotationalPivot={[0,0,0]}
                    onPinch={handleVideoPinch}
                  />
          )

        }
     

      }

   
     
    }
 
    const getModel = (id) => {
        
  
      if (isVisible == true)
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
          'playground',
          finalPosition,
          startLoading,
          stopLoading,
        props?.sceneNavigator?.viroAppProps?.isLoading,
        handleDrag,
        modelRef
          ));

      }
      return null;  
    }

    const component = React.useMemo(()=>{
      return getModel(props?.sceneNavigator?.viroAppProps?.currentId)
    },[props?.sceneNavigator?.viroAppProps?.currentId,props?.sceneNavigator?.viroAppProps?.scale,props?.sceneNavigator?.viroAppProps?.rotation,props?.sceneNavigator?.viroAppProps?.currentAxis,props?.sceneNavigator?.viroAppProps?.isLoading]);

    const videoComponent = React.useMemo(()=>{
      return getVideo();
    }
    ,[trackerObj,props?.sceneNavigator?.viroAppProps?.rotation,videoScale,props?.sceneNavigator?.viroAppProps?.isLoading,props?.sceneNavigator?.viroAppProps?.isVideoShowing,props?.sceneNavigator?.viroAppProps?.isPaused])


    React.useEffect(()=>{
      let _videoRotation = [-45,props?.sceneNavigator?.viroAppProps?.rotation?.[1],0];
      modelRef?.current?.setNativeProps({
        rotation:props?.sceneNavigator?.viroAppProps?.rotation
      });

      if (props?.sceneNavigator?.viroAppProps?.isLocked)
      {
      videoRef.current?.setNativeProps({
        rotation:_videoRotation
      })
    }
    },[props?.sceneNavigator?.viroAppProps?.rotation])
  
 
  
  
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
      let tracker = getTrackers(model?.trackerId)[0];
      videoRef?.current?.setNativeProps({
        source:tracker?.videoUrl
      })

      return () => {
        ViroMaterials.deleteMaterials([materialName]);
        ViroARTrackingTargets.deleteTarget([Object?.keys(trackerObj)[0]]);
        // setTrackerObj(null);
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
                setLastFoundPlanetLocation(result.transform.position);
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
         {/* <Viro3DObject
                source={require("../../assets/models/Marker/map_pin.glb")}
                type="GLB"
                // position={[0,0,0]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={[0,0,0]}
                // scale={[.5,.5,.5]}
               //  onRotate={handleRotation}
               
          /> */}

        <ViroImage rotation={[-90, 0, 0]} visible={foundPlane} source={require('../../assets/images/grid.png')} />
        <ViroImage rotation={[-90, 0, 0]} visible={foundPlane} source={require('../../assets/images/grid.png')} />
      </ViroNode>
    )
    }


    const handleRotate = (rotateState, rotationFactor, source) =>{
      Alert.alert(rotationFactor)
      if (rotateState == 3) {
        setVideoRotation(old => {
          return [
            old[0] + rotationFactor,
            old[1],
            old[2],
          ]
        });
        videoRef.current.setNativeProps({
          rotation: [
            videoRotation[0] + rotationFactor,
            videoRotation[1],
            videoRotation[2],
          ],
        });
      }
    }


    return (
        <>
            <ViroARScene onCameraARHitTest={onCameraHitTest}  onError={()=>{Alert.alert('error');props?.sceneNavigator?.viroAppProps?.refresh()}}>
            {
              trackerObj !== null && 
              <>
                <ViroDirectionalLight
                color="#ffffff"
                direction={[0, -1, -.5]}
                position={[0, 9, 0]}
                castsShadow={true}
                shadowOpacity={.9}
                />
                <ViroAmbientLight color="#ffffff" intensity={300}/>
                             
                {
                    isReady&& 
                    <>
                        
                            <>
                             {component}
                             {/* {
                                props?.sceneNavigator?.viroAppProps?.isLoading &&
                                <>
                                        <ViroSpinner
                                            type='dark'
                                            position={finalPosition}

                                        />
                                </> 
                             }
                            */}
                              
                           
                            </>    
                    </>
                }
                  
                {getScanningQuads()}

                {videoComponent}
            
                  {/* <ViroVideo
                  source={require('../../assets/video/mercury.mp4')}
                  loop={true}
                  onDrag={handleDragVideo}
                  key={'videoItem'}
                  ref={videoRef}
                  position={[0,-1.5,-1.5]}
                  scale={videoScale}
                  rotation={[-45,0,0]}
                  // onRotate={handleRotate}
                  rotationalPivot={[0,0,0]}
                  onPinch={handleVideoPinch}
                /> 
 */}

            
               
              </>
              
            }

          </ViroARScene>  
        </>       
    );
  };