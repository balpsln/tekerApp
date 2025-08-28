import { AppRegistry } from 'react-native';
import App from './App';               // keep this path if App.tsx is in root
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
