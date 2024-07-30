import styled from 'styled-components';
import { View,Text,Image } from 'react-native';
import Constants from 'expo-constants';

const StatusbarHeight = Constants.statusBarHeight;

//colors
export const Colors ={
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darklight: '#9CA3AF',
    brand: '#602809',
    green: '#108981',
    red: '#EF4444',
};
const {primary, secondary, tertiary , darklight,brand,green,red} = Colors

export const StyleContainer = styled.view`
flex:1;
padding: 25px;
padding-top:${statusBarHeight +10}px ;
background-color: ${primary};

`
export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;

`;
export const Pagelogo = styled.image`
 width: 250px;
 height: 200px;
`;
export const PageTitle = styled.text`
 font-size: 30px;
 text-align: center;
 font-wright: bold;
 color: ${brand};
 padding: 10px;
`
