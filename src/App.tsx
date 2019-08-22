import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router';
import LoginForm from './components/login-form/LoginForm'
import ChooseStage from './components/ChooseStage'
import Chart from './pages/Chart'
import TaskList from './components/task-list/TaskList'
import {history} from './store/AppStore'
export default class App extends React.Component<any, {}> {

  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="main">
          <Switch>
            <Route path="/" component={Chart}/>
            <Route path="/login" component={LoginForm}/>
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}


