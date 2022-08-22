import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';
import {
  clearPersistedStore,
  getPersistedStore,
  makePersistable,
} from 'mobx-persist-store';

import {User as UserDto} from '../dto/User';
import {AuthUserCredentials} from '../models/AuthUserCredentials';
import {RegisterUserCredentials} from '../models/RegisterUserCredentials';
import {User as UserModel} from '../models/User';
import {AuthUser} from './../dto/AuthUser';
import {
  addAuthHeader,
  deleteAuthHeader,
  httpApi,
} from './api';

export class UserStore {
  public token: string | null = null;
  public loading: boolean = false;
  public user: UserModel | null = null;

  public constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'User',
      properties: ['token'],
      storage: AsyncStorage,
    });
  }

  public registerUser = async (
    credentials: RegisterUserCredentials,
  ) => {
    this.loading = true;

    try {
      const {data} = await httpApi.post<AuthUser>(
        '/auth/local/register',
        credentials,
      );

      addAuthHeader(data.jwt);
      this.token = data.jwt;
    } catch (error) {
      throw new Error(`error: ${error}`);
    } finally {
      this.loading = false;
    }
  };

  public authUser = async (
    credentials: AuthUserCredentials,
  ) => {
    this.loading = true;
    try {
      const {data} = await httpApi.post<AuthUser>(
        '/auth/local',
        credentials,
      );

      addAuthHeader(data.jwt);
      this.token = data.jwt;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      this.loading = false;
    }
  };

  public fetchUser = async () => {
    try {
      const {data}: {data: UserDto} = await httpApi.get(
        '/users/me',
      );

      this.user = mapToUser(data);
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  };

  public authCheck = async () => {
    this.loading = true;
    try {
      const store = await getPersistedStore(this);

      addAuthHeader(store ? store.token : null);
      this.loading = false;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  public signOut = async () => {
    this.token = null;
    this.user = null;
    deleteAuthHeader();

    await clearPersistedStore(this);
  };
}

const mapToUser = (json: UserDto) =>
  new UserModel(
    json.username,
    json.email,
    json.id,
    json.provider,
    json.confirmed,
    json.blocked,
    Date.parse(json.createdAt),
    Date.parse(json.updatedAt),
  );
