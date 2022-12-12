import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeNavigatorParamList = {
  HelloWorld: undefined;
};

export type HelloWorldScreenProps = NativeStackScreenProps<
  HomeNavigatorParamList,
  'HelloWorld'
>;
