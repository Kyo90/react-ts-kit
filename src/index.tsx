import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { ThemeProvider } from '@material-ui/styles'
import {appStore} from "./store/AppStore";
import App  from './App';
import { themes } from './theme'



ReactDOM.render(
<Provider store={appStore}>
  <App />
 </Provider>,
document.getElementById('root')
);

