import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import AppImage from "./Components/BasicComponents/AppImage";
import AppText from './Components/BasicComponents/AppText';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
      <AppImage
      style={styles.profileImageContainer}
       isOnline 
       otherStyleForIMage={styles.profileImage}/>
       <View style={styles.profileContainer}>
        <AppText text={"M.N.A SAJEE"}/>
        <AppText text={"I am a Full Stack Developer"} textType="p"/>
       </View>
       </View >
       <View style={styles.AboutContainer}>
        <AppText textType="h3" text={"About"} isTextWithBorder/>
        <AppText textType="p" text={"justify"} textAlignment={"My Name is Sajee. I am an 8th grader at KCC.I enjoy spending my free time reading books and playing soccer with my friends.I am passionate about learning new things and exploring different subject."}/>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:Platform.OS == "android" ? StatusBar.currentHeight:"",
    padding:10,
  },
  profileImageContainer:{
    // borderWidth:1,
    // borderColor:"black",
    
  },
  profileImage:{
    borderRadius:100,
  },
  profileContainer:{
    flex:0.15,
    // borderWidth:1,
    // borderColor:"black",
    flexDirection:"row",
    backgroundColor:"#ced4da",
    padding:10,
    marginTop:10,
  },
  profileTextContainer:{
    marginLeft:10,
  },
  AboutContainer:{
    marginTop:2,
  },

});