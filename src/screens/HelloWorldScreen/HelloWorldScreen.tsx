import React, { useCallback, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useAppDispatch } from '@redux/store';
import { fetchMessage, selectMessage } from '@redux/slices/HelloWorldSlice';
import { HelloWorldScreenProps } from '@navigation/HomeNavigator';
import { useSelector } from 'react-redux';

export function HelloWorldScreen({ navigation }: HelloWorldScreenProps) {
  const dispatch = useAppDispatch();
  const currentMessage = useSelector(selectMessage);

  const getMessage = useCallback(
    (message: string) => {
      dispatch(fetchMessage({ time: 1000, message }))
        .unwrap()
        .then(response => console.log('New message: ', response.message));
    },
    [dispatch],
  );

  useEffect(() => {
    getMessage('Initial message');
  }, [getMessage]);

  return (
    <View>
      <Text>{currentMessage}</Text>
      <Button title="Refresh" onPress={() => getMessage('New message')} />
    </View>
  );
}
