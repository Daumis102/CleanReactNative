import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigatorParamList } from '@navigation/HomeNavigator';
import { HelloWorldScreen } from '@screens/HelloWorldScreen';

const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HelloWorldScreen} name="HelloWorld" />
    </Stack.Navigator>
  );
};
