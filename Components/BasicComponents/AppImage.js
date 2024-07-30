import { useEffect } from "react";
import { View,Image, StyleSheet } from "react-native";

function AppImage({url , isOnline,otherStyleForImage ={},...props}){
const getURL = () => {
    if(isOnline){
        return {uri:"https://picsum.photos/200/300"};
    }else{
        return url;
    }
};
return(
 <View {...props}>
    <Image source={getURL()} style={[otherStyleForImage,styles.AppImage]}/>
 </View>
);
}
export default AppImage;

const styles = StyleSheet.create({
    AppImage:{
        height:75,
        width:75,

    },
});
  
