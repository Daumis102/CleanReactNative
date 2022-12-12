import React from 'react';
import { Text, View } from 'react-native';
import { HelloWorldScreenProps } from '@navigation/HomeNavigator';

export function HelloWorldScreen({ navigation }: HelloWorldScreenProps) {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
