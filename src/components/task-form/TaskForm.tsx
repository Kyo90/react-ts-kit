import * as React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../store/actions'
interface IState {
  currentTask: string
  nextTaskId: number
}

interface IProps {
  onAddTask: any
}

class TaskForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      currentTask: '',
      nextTaskId: 0,
    }
  }
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="add a task"
          onChange={this.inputChange}
          value={this.state.currentTask}
        />
        <button type="submit">add</button>
      </form>
    )
  }

  private onAddTask() {
    this.props.onAddTask({
      id: this.state.nextTaskId,
      description: this.state.currentTask,
    })
    this.updateStateOnSubmit()
  }

  private updateStateOnSubmit() {
    this.setState({
      currentTask: '',
      nextTaskId: this.state.nextTaskId + 1,
    })
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.onAddTask()
  }

  private inputChange = (e: any) => {
    this.setState({
      currentTask: e.target.value,
    })
  }
}

const mapActionsToProps = {
  onAddTask: addTask,
}

export default connect(
  undefined,
  mapActionsToProps,
)(TaskForm)
