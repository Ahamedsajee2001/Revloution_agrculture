import React from 'react';
import { View, Text } from 'react-native';

import{
    StyleContainer,
    InnerContainer,
    Pagelogo,
    PageTitle,
} from './../components/style'

const login = () => {
    return (
        <StyleContainer>
            <InnerContainer>
                <Pagelogo resizeMode="cover" source = {require('./../assets/icon.png')}/>
                <PageTitle>Agro Mart</PageTitle>
            </InnerContainer>
        </StyleContainer>
    );
}
export default login;
