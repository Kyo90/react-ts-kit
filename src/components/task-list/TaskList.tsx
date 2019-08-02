import * as React from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../../store/reducers'
import { Task } from '../../model'
import TaskCloseButton from '../task-close-button/TaskCloseButton';
interface IProps {
  tasks: Task[]
}
class TaskList extends React.Component<IProps, any> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>task</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{this.renderTasks()}</tbody>
      </table>
    )
  }
  public renderTasks() {
    const { tasks } = this.props
    return tasks.map((task: Task, index: number) => {
      return (
        <tr key={index}>
          <td>{task.description}</td>
          <td>
            <button>编辑</button>
            <TaskCloseButton id={task.id} />
          </td>
        </tr>
      )
    })
  }
}



const mapStateToProps = (state: IAppState) => ({
  tasks: state.tasks,
})

export default connect(mapStateToProps)(TaskList)
