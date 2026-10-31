import React from 'react'

import { View , Image, Text } from 'react-native'

export default function AppHeader() {
  return (
    <View className='w-[380px] h-20 bg-primary'>
        <View>
            <View className=''>
                <Image source={require("@/assets/images/app_favicon_and_pwa_icon_for_d_marchescm_a_civic_public_administration_guide.png")} />
            </View>
            <View>
                <View>
                    <Text>DemarchCM</Text>
                </View>
                <Text></Text>
            </View>
        </View>
        
    </View>
  )
}



width: 326px;
height: 36px;


/* À l'intérieur de l'auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Header */

/* Mise en page automatique */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 390px;
height: 80px;
left: 0px;
top: 0px;

background: #0B6E4F;
box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.06);

/* À l'intérieur de l'auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;

