import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigatorParamsList } from './types';
import { HomeNavigator } from '@navigation/HomeNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={HomeNavigator} name="HomeNavigator" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
