import { Viro3DObject,ViroSpinner } from '@viro-community/react-viro';
import React from 'react';
import { Alert } from 'react-native';


const returnRotation = (axis,value,currentRotation) => {
    console.log(axis,'5');
    if (axis == 'X')
    {
      let index  = 2;
      currentRotation[index] = value;
    }
    else if (axis == 'Y')
    {
        let index  = 1;
        currentRotation[index] = value;
    }
    return currentRotation;
}

export const models = [

    { 
        id:'1',
        title:'Planet Earth',
        src:require('../assets/models/planetEarth.obj'),
        lessonId:'5',
        hasMaterials:true,
        resources:[
            {
                url: require('../assets/models/Earth/Diffuse_2K.png'),
                type:'material'
            },
            {
                url:require('../assets/models/Earth/earthMaterial.mtl'),
                type:'mtl'
            }
        ],
        materialName:'diffuse',
        orientation:'Up',
        physicalWidth: 0.15,
        scale:0.065,
        rotation:[0,0,0],
        trackerId:'1',
        position:[0.0, -0.5, 3],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                        source={require("../assets/models/Earth/earth.glb")}
                        resources={[]}
                        materials={[]}
                        type="GLB"
                        position={[0.0, -0.5, -2]}
                        rotation={rotation}
                        scale={[scale, scale, scale]}
                        onPinch={handlePinch} ref={modelRef}
                        //  onRotate={handleRotation}  
                        />
                )

            }
        return  (
         <Viro3DObject
             source={require("../assets/models/Earth/earth.glb")}
             resources={[
             ]}
             materials={[]}
             type="GLB"
             position={mode=='playground'?[0.0,0.0,-1.5]:[0.0, -0.5, -2]}
             rotation={rotation}
             onDrag={handleDrag}
             dragType={'FixedDistance'}
             scale={[scale, scale, scale]}
             onPinch={handlePinch} ref={modelRef}
             onLoadStart={()=>{startLoading()}}
             onLoadEnd={()=>{endLoading()}}
            //  onRotate={handleRotation}  
            />
            )
        }
    },
    
    {
        id:'2',
        title:'Human Heart',
        src:require('../assets/models/Heart/Heart.obj'),
        lessonId:'4',
        materialName:'heart',
        hasMaterials:false,
        resources:[   
            // {
            //     url:require('../assets/models/Heart/Heart.obj'),
            //     type:'material'
            // },
            // {
            //     url:require('../assets/models/Heart/Heart.mtl'),
            //     type:'mtl'
            // }
        ],
        scale:0.5,
        rotation:[0,0,0],
        trackerId:'2',
        position:[0.0, -0.5, -2],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                    source={require("../assets/models/Heart/heartSmall.glb")}
                    type="GLB"
                //     resources={['../assets/models/Heart/Heart.mtl',
                //    '../ass ets/models/Heart/heartTexture.png']}
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                       dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    // materials={['heart']}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   />
                )

            }
            console.log(position,90)
        return  (
          <Viro3DObject
          source={require("../assets/models/Heart/heartSmall.glb")}
          type="GLB"
        //   resources={['../assets/models/Heart/Heart.mtl',
        //  '../assets/models/Heart/heartTexture.png']}
          position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
          rotation={rotation}
          onDrag={handleDrag}
          dragType={'FixedDistance'}
          scale={[scale, scale, scale]}
          onPinch={handlePinch} ref={modelRef}
          materials={[]}
          onLoadStart={()=>{startLoading()}}
          onLoadEnd={()=>{endLoading()}}
         //  onRotate={handleRotation}
         />
            )
        }
    },
    
    {
        id:'3',
        title:'Human Brain',
        src:require('../assets/models/Brain/brain.glb'),
        lessonId:'4',
        materialName:'brain',
        hasMaterials:false,
        resources:[  
            {
                url:require('../assets/models/Brain/brain_tex.jpg'),
                type:'material'
            } ,
            {
                url:require('../assets/models/Brain/brain_tex.jpg'),
                type:'mtl'
            } 
        ],
        scale:0.5,
        rotation:[0,0,0],
        trackerId:'3',
        position:[0.0, -0.5, -1.5],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(<Viro3DObject
                    source={require("../assets/models/Brain/brain.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={['../assets/models/Brain/brain_tex.jpg']}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    // materials={['brain']}
                //     onLoadStart={()=>{startLoading()}}
                //     onLoadEnd={()=>{endLoading()}}
                //    //  onRotate={handleRotation}
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Brain/brain.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={['../assets/models/Brain/brain_tex.jpg']}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                // materials={['brain']}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               />
            )
        }
    },
    {
        id:'4',
        title:'Animal Cell',
        src:'',
        lessonId:'4',
        materialName:'golgi',
        hasMaterials:false,
        resources:[  
            {
                url:require('../assets/models/Brain/brain_tex.jpg'),
                type:'material'
            } ,
            {
                url:require('../assets/models/Brain/brain_tex.jpg'),
                type:'mtl'
            } 
        ],
        scale:0.8,
        rotation:[0,0,0],
        trackerId:'4',
        position:[0.0, -0.5, -2],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/AnimalCell/animalCell.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={['golgi']}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/AnimalCell/animalCell.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
            ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={['golgi']}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'5',
        title:'The Kidney',
        src:'',
        lessonId:'7',
        materialName:'',
        hasMaterials:false,
        resources:[  
        ],
        scale:0.007,
        rotation:[180,180,200],
        trackerId:'5',
        position:[0.0, -0.5, -2],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(<Viro3DObject
                    source={require("../assets/models/Kidneys/kidney.glb")}
                    type="GLTF"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1.5]:[0.0, -0.5, -2]}
                    resources={[
                ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Kidneys/scene.gltf")}
                type="GLTF"
                position={mode=='playground'?[position[0],position[1],position[2] - 1.5]:[0.0, -0.5, -2]}
                resources={[
            ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'6',
        title:'The Liver',
        src:'',
        lessonId:'6',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:1.2,
        rotation:[0,0,0],
        trackerId:'6',
        position:[0.0, -0.2, -0.1],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Liver/liver.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        require('../assets/models/Liver/textures/material0_baseColor.jpeg')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Liver/liver.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    require('../assets/models/Liver/textures/material0_baseColor.jpeg')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'7',
        title:'The Skin',
        src:'',
        lessonId:'7',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.6,
        rotation:[0,10,0],
        trackerId:'7',
        position:[0.0, -0.5, -2],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Skin/skin.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                    materials={['extract1','extract3','extract8','Material','PM3D','ZSphere']}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Skin/skin.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
                materials={['extract1','extract3','extract8','Material','PM3D','ZSphere']}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'8',
        title:'The Digestive System',
        src:'',
        lessonId:'9',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.5,
        rotation:[0,0,0],
        trackerId:'8',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(  <Viro3DObject
                    source={require("../assets/models/Git/digestive_system.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Git/digestive_system.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'9',
        title:'The Airways',
        src:'',
        lessonId:'10',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.3,
        rotation:[0,0,0],
        trackerId:'9',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(<Viro3DObject
                    source={require("../assets/models/Airways/lung.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Airways/lung.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'10',
        title:'Mercury',
        src:'',
        lessonId:'10',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.3,
        rotation:[0,0,0],
        trackerId:'10',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Mercury/mercury.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Mercury/mercury.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'11',
        title:'Venus',
        src:'',
        lessonId:'11',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.3,
        rotation:[0,0,0],
        trackerId:'11',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Venus/venus.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Venus/venus.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'12',
        title:'Mars',
        src:'',
        lessonId:'12',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.3,
        rotation:[0,0,0],
        trackerId:'12',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(      <Viro3DObject
                    source={require("../assets/models/Mars/mars.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Mars/mars.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'13',
        title:'Jupiter',
        src:'',
        lessonId:'13',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.3,
        rotation:[0,0,0],
        trackerId:'13',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Jupiter/jupiter.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Jupiter/jupiter.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'14',
        title:'Saturn',
        src:'',
        lessonId:'14',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.3,
        rotation:[0,0,0],
        trackerId:'14',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(      <Viro3DObject
                    source={require("../assets/models/Saturn/saturn.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Saturn/saturn.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },

    {
        id:'15',
        title:'International Space Station',
        src:'',
        lessonId:'19',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.5,
        rotation:[0,0,0],
        trackerId:'15',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/SpaceStation/international_space_station.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/SpaceStation/international_space_station.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },

    {
        id:'16',
        title:'The Wright Flyer',
        src:'',
        lessonId:'21',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.4,
        rotation:[0,0,0],
        trackerId:'16',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Wright/flyer2.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Wright/flyer2.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },

    {
        id:'17',
        title:'The Space Shuttle',
        src:'',
        lessonId:'20',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.1,
        rotation:[0,90,0],
        trackerId:'17',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(  <Viro3DObject
                    source={require("../assets/models/Shuttle/shuttle.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Shuttle/shuttle.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'18',
        title:'The Pantheon',
        src:'',
        lessonId:'22',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.05,
        rotation:[0,0,0],
        trackerId:'18',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return( <Viro3DObject
                    source={require("../assets/models/Pantheon/agrippa_pantheon.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    rotation={rotation}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Pantheon/agrippa_pantheon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                rotation={rotation}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'19',
        title:'The Acropolis',
        src:'',
        lessonId:'24',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.05,
        rotation:[0,0,0],
        trackerId:'19',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                // source={require("../assets/models/Acropolis/acropolis2.glb")}
                source={require("../assets/models/Acropolis/acropolis2.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                // source={require("../assets/models/Acropolis/acropolis2.glb")}
                source={require("../assets/models/Acropolis/acropolis2.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'20',
        title:'Japanese Castle',
        src:'',
        lessonId:'25',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.025,
        rotation:[0,0,0],
        trackerId:'20',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                    source={require("../assets/models/JapanCastle/kokura_castle.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0]-1,position[1]-1.8,position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                //  onRotate={handleRotation}
                />
                )

            }


            return  (
                    <Viro3DObject
                    source={require("../assets/models/JapanCastle/kokura_castle.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0]-1,position[1]-1.8,position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    onDrag={handleDrag}
                    dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    onLoadStart={()=>{startLoading()}}
                    onLoadEnd={()=>{endLoading()}}
                //  onRotate={handleRotation}
                />
               
            )
        }
    },
    {
        id:'21',
        title:'Egyptian Royal Coffin',
        src:'',
        lessonId:'23',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.4,
        rotation:[0,80,0],
        trackerId:'21',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                    source={require("../assets/models/Pharoah/tut.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Pharoah/tut.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'22',
        title:'The Command Module',
        src:'',
        lessonId:'26',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.2,
        rotation:[0,90,0],
        trackerId:'22',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(<Viro3DObject
                    source={require("../assets/models/CommandModule/module.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />)

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/CommandModule/module.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'23',
        title:'Yoruba Head Sculpture',
        src:'',
        lessonId:'27',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:2,
        rotation:[0,-90,0],
        trackerId:'23',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                    source={require("../assets/models/Yoruba/yoruba_mask.glb")}
                    type="GLB"
                    position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                    resources={[
                        // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                    ]}
                    rotation={rotation}
                    // onDrag={handleDrag}
                    // dragType={'FixedDistance'}
                    scale={[scale, scale, scale]}
                    onPinch={handlePinch} ref={modelRef}
                    materials={[]}
                    // onLoadStart={()=>{startLoading()}}
                    // onLoadEnd={()=>{endLoading()}}
                   //  onRotate={handleRotation}
                   
                   />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Yoruba/yoruba_mask.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },

    {
        id:'24',
        title:'Coral',
        src:'',
        lessonId:'29',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.02,
        rotation:[0,-90,0],
        trackerId:'24',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Coral/coral.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Coral/coral.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },

    {
        id:'25',
        title:'Himalayas',
        src:'',
        lessonId:'28',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.5,
        rotation:[0,0,0],
        trackerId:'25',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Himalayas/himalayas.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Himalayas/himalayas.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },

    {
        id:'26',
        title:'Hydrogen',
        src:'',
        lessonId:'32',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.02,
        rotation:[0,-90,0],
        trackerId:'27',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Hydrogen/hydrogen.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Hydrogen/hydrogen.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    {
        id:'27',
        title:'Helium',
        src:'',
        lessonId:'32',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.02,
        rotation:[0,-90,0],
        trackerId:'28',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Helium/helium.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Helium/helium.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'28',
        title:'Lithium',
        src:'',
        lessonId:'33',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.02,
        rotation:[0,-90,0],
        trackerId:'29',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Lithium/lithium.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Lithium/lithium.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'29',
        title:'Saturn V',
        src:'',
        lessonId:'26',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.02,
        rotation:[0,-90,0],
        trackerId:'30',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/SaturnV/saturnV.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/SaturnV/saturnV.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'30',
        title:'Olympus Mons',
        src:'',
        lessonId:'13',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.5,
        rotation:[0,0,0],
        trackerId:'31',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/OlympusMons/olympusmons.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/OlympusMons/olympusmons.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 


    {
        id:'31',
        title:'Grand Canyon',
        src:'',
        lessonId:'34',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.01,
        rotation:[0,0,0],
        trackerId:'32',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Canyon/canyon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Canyon/canyon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'32',
        title:'Neptune',
        src:'',
        lessonId:'35',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.1,
        rotation:[0,0,0],
        trackerId:'34',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Neptune/neptune.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Neptune/neptune.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'33',
        title:'Uranus',
        src:'',
        lessonId:'36',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:2,
        rotation:[0,0,0],
        trackerId:'33',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Uranus/uranus.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Uranus/uranus.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'34',
        title:'Bosomtwe',
        src:'',
        lessonId:'37',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.00005,
        rotation:[0,0,0],
        trackerId:'35',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Bosomtwe/bosomtwe.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Bosomtwe/bosomtwe.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'35',
        title:"Akua'ba",
        src:'',
        lessonId:'38',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.1,
        rotation:[0,0,0],
        trackerId:'36',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Ashanti/akuaba.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Ashanti/akuaba.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'36',
        title:"Carbon Model",
        src:'',
        lessonId:'30',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.005,
        rotation:[0,0,0],
        trackerId:'37',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Carbon/carbon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Carbon/carbon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'37',
        title:"Elephant Foot Glacier",
        src:'',
        lessonId:'39',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.01,
        rotation:[0,0,0],
        trackerId:'38',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Glaciers/glacier.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Glaciers/glacier.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'38',
        title:"Bora Bora Islands",
        src:'',
        lessonId:'40',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.01,
        rotation:[0,0,0],
        trackerId:'39',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Islands/islands.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Islands/islands.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'39',
        title:"Hurricane Harvey",
        src:'',
        lessonId:'41',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.9,
        rotation:[0,0,0],
        trackerId:'40',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Hurricane/hurricane.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Hurricane/hurricane.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'40',
        title:"Amazon Rainforest Model",
        src:'',
        lessonId:'42',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.01,
        rotation:[0,0,0],
        trackerId:'41',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Amazon/amazon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Amazon/amazon.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'41',
        title:"V8 Engine Model",
        src:'',
        lessonId:'43',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.8,
        rotation:[0,0,0],
        trackerId:'42',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/V8/v8.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/V8/v8.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 

    {
        id:'42',
        title:"Turbofan Engine",
        src:'',
        lessonId:'45',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:0.8,
        rotation:[0,0,0],
        trackerId:'43',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Turbofan/turbofan.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Turbofan/turbofan.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'43',
        title:"Simple Nuclear Reactor",
        src:'',
        lessonId:'46',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:1.0,
        rotation:[0,0,0],
        trackerId:'44',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/Reactor/reactor.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/Reactor/reactor.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    }, 
    {
        id:'44',
        title:"Thermal Power Station",
        src:'',
        lessonId:'47',
        materialName:'',
        hasMaterials:false,
        resources:[ 
        ],
        scale:1.0,
        rotation:[0,0,0],
        trackerId:'45',
        position:[-1, 0, 0],
        element: (rotation,scale,handlePinch,axis,mode,position,startLoading,endLoading,isLoading,handleDrag,modelRef) => {
            if (mode != 'playground')
            {
                return(
                    <Viro3DObject
                source={require("../assets/models/ThermalPlant/thermalPlant.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                // onDrag={handleDrag}
                // dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                // onLoadStart={()=>{startLoading()}}
                // onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
                )

            }
            return  (
                <Viro3DObject
                source={require("../assets/models/ThermalPlant/thermalPlant.glb")}
                type="GLB"
                position={mode=='playground'?[position[0],position[1],position[2] - 1]:[0.0, -0.5, -2]}
                resources={[
                    // require('../assets/models/AnimalCell/celula-2/textures/Material.001_normal.png')
                ]}
                rotation={rotation}
                onDrag={handleDrag}
                dragType={'FixedDistance'}
                scale={[scale, scale, scale]}
                onPinch={handlePinch} ref={modelRef}
                materials={[]}
                onLoadStart={()=>{startLoading()}}
                onLoadEnd={()=>{endLoading()}}
               //  onRotate={handleRotation}
               
               />
            )
        }
    },
    ]