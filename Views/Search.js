import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight, TouchableWithoutFeedback, Animated , Keyboard,ScrollView} from 'react-native';
import Title from '../Components/Reusable/Title';
import BookResults from '../Components/Search/BookResults';
import ModuleResults from '../Components/Search/ModuleResults';
import { getBook } from '../Utils/functions';
import { getModule } from '../Utils/functions';
import { colorScheme } from '../Utils/constants';
import SearchTabs from '../Components/Reusable/SearchTabs';


const stylesheet = StyleSheet.create({
    container:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:'100%'
    },
    inputStyle:{
        width:'100%',
        padding:10,
        backgroundColor:'#E7E8E8',
        borderRadius:10,
        fontSize:18
    },
    buttonStyle:{
        padding:25,
        backgroundColor:'black',
        borderRadius:10
    },
    resultAreaStyle:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginTop:0
    },
    tabContainerStyle:{
      backgroundColor:colorScheme.dark,
      color:colorScheme.light1
    }
});


const Search = ({navigation}) => {
  const [showTitle,setShowTitle] = React.useState(true);
  const bounceAnim = React.useRef(new Animated.Value(0)).current;
  const opacityAnimation = React.useRef(new Animated.Value(1)).current;
  const bounceAnimTextField = React.useRef(new Animated.Value(0)).current;
  const cancelAnim = React.useRef(new Animated.Value(100)).current;
  const [tabValue,setTabValue] = React.useState(0);
  const [searchString,setSearchString] = React.useState('');
  const [isEmpty,setIsEmpty] = React.useState(true);
  const [searchResults,setSearchResults] = React.useState([]);
  const [moduleResults,setModuleResults] = React.useState([]);

  const runSearch = (string) => 
  {
    if (string !== '')
    {
      let results = [];
      if (tabValue == 0)
      {
         results = getBook(string);
         setSearchResults(results);
      }
      else if (tabValue == 2)
      {
        results = getModule(string);
        setModuleResults(results);
      }
      
    }
    else 
    {
      setSearchResults([]);
      setModuleResults([]);
    }
  }


  React.useEffect(()=>{
    runSearch(searchString);
  },[searchString])

  React.useEffect(()=>{
    runSearch(searchString);
  },[tabValue]);


  React.useEffect(() => {
    if(showTitle == false)
    {
        Animated.timing(
            cancelAnim,
           {
             toValue: 0,
             useNativeDriver:true,
             duration: 300,
           }
         ).start();

        Animated.timing(
            bounceAnim,
           {
             toValue: -100,
             useNativeDriver:true,
             duration: 300,
           }
         ).start();

         Animated.timing(
            opacityAnimation,
           {
             toValue: 0,
             useNativeDriver:true,
             duration: 10,
           }
         ).start();

         Animated.timing(
            bounceAnimTextField,
            {
                toValue:-80,
                useNativeDriver:true,
                duration:300
            }
         ).start();
    }
    else 
    {
        Animated.timing(
            cancelAnim,
           {
             toValue: 100,
             useNativeDriver:true,
             duration: 300,
           }
         ).start();

        Animated.timing(
            bounceAnim,
           {
             toValue: 0,
             useNativeDriver:true,
             duration: 300,
           }
         ).start();

         Animated.timing(
            opacityAnimation,
           {
             toValue: 1,
             useNativeDriver:true,
             duration: 10,
           }
         ).start();

         Animated.timing(
            bounceAnimTextField,
            {
                toValue:0,
                useNativeDriver:true,
                duration:300
            }
         ).start();
    }
   
  }, [showTitle]);

  const handleBookNavigation = (id) => {

    navigation.navigate('Details',{id:id});
}

const handleModuleNavigation = (id) => {
    navigation.navigate('ModuleDetails',{id:id});
}


  return (
    <View style={stylesheet.container}>
        <Animated.View style={{padding:25,opacity:opacityAnimation,paddingBottom:0,transform:[{translateY:bounceAnim}]}}>
            <Title text={'Search'}/>
        </Animated.View>
        
        <Animated.View style={{padding:25,width:'100%',paddingTop:15,transform:[{translateY:bounceAnimTextField}],display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1}}>
                <TextInput style={{
                padding:10,
                backgroundColor:'#E7E8E8',
                borderRadius:10,
                fontSize:18}} 
                placeholder={'Enter Title or Author Name'} 
                placeholderTextColor={'gray'}
                onFocus={()=>{
                  setShowTitle(false)}}
                onBlur={()=>{setShowTitle(true)}}
                onChangeText={(text)=>{setSearchString(text)}}
                />
                </View>
                {
                    !showTitle && 
                    <TouchableWithoutFeedback onPress={()=>{
                        setShowTitle(!showTitle);
                        if (showTitle == false)
                        {
                            Keyboard.dismiss();
                        }
                        }}>
                        <Animated.View style={{marginLeft:'auto',transform:[{translateX:cancelAnim}],marginLeft:10}}>
                        <Text style={{fontSize:16,fontWeight:'600',color:'red'}}>Cancel</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    
                }
            </View>

            <ScrollView style={stylesheet.resultAreaStyle}>
                <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
                  <SearchTabs text={'Books'} value={0} selected={tabValue==0} onclick={setTabValue}/>
                  <SearchTabs text={'Modules'} value={2} selected={tabValue==2} onclick={setTabValue}/>  
                </View>
                
                {
                  tabValue == 0 &&
                  <BookResults onclick={handleBookNavigation}  data = {searchResults}/>
                }
                {
                  tabValue == 2 && 
                  <ModuleResults onclick={handleModuleNavigation} data={moduleResults}/>
                } 
            </ScrollView>
        </Animated.View>
        
    </View>
  )
}

export default Search