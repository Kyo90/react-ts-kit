import * as React from 'react'
import { connect } from 'react-redux'
import {Task} from './model'
import TaskForm from './components/task-form/TaskForm'
import TaskList from './components/task-list/TaskList'
import { IAppState } from './store/AppStore'
interface Props {
    tasks: Task[]
}

class App extends React.Component<Props, {}> {
  renderThumbnails = () => {}

  renderComponentEditor = () => {}

  render() {
      const {tasks} = this.props;
    return (
      <div className="main">
        <h3>React Todo App1</h3>
        <TaskForm />
        <TaskList tasks={tasks} />
      </div>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
  tasks: state.tasks,
})

export default connect(mapStateToProps)(App)
