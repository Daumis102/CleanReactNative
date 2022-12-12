import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigatorParamsList = {
  Root: undefined;
  HomeNavigator: undefined;
};

export type RootScreenProps = NativeStackScreenProps<
  RootNavigatorParamsList,
  'Root'
>;
