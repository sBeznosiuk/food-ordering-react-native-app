import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AuthNavigationRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
}

export type AuthStackParams = {
  [AuthNavigationRoutes.Login]: undefined;
  [AuthNavigationRoutes.SignUp]: undefined;
};

export interface AuthNavigationScreenType<
  S extends AuthNavigationRoutes,
> {
  navigation: StackNavigationProp<AuthStackParams, S>;
  route: RouteProp<AuthStackParams, S>;
}
