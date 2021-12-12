import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils, Admin, Resource } from 'react-admin';
import Users from './users';
import { NotificationEditor, NotificationList, NotificationCreator} from './notifications';
import { authProvider } from './auth';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(`${API_DOMAIN}/admin`, httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={Users} />
      <Resource name="notifications" list={NotificationList} edit={NotificationEditor} create={NotificationCreator}/>
  </Admin>
);
export default App;