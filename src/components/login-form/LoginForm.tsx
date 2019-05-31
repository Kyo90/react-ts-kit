import * as React from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/actions'
interface IState {
  username: string
  password: string
}

interface IProps {
  login: any
}

class TaskForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  public render() {
    const {username, password} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          className="form-input"
          type="text"
          placeholder="username"
          onChange={this.inputChange}
          value={username}
        />
        <input
          name="password"
          className="form-input"
          type="password"
          placeholder="密码"
          onChange={this.inputChange}
          value={password}
        />
        <button type="submit">add</button>
      </form>
    )
  }

  private login() {
    const {username, password} = this.state;
    this.props.login(username, password)
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.login()
  }

  private inputChange = (e: any) => {
    const key = e.target.name;
    switch(key) {
      case 'username':{
        this.setState({
          username: e.target.value,
        })
        break;
      }
      case 'password': {
        this.setState({
          password: e.target.value
        })
        break;
      }
    }
  }
}

const mapActionsToProps = {
  login,
}

export default connect(
  undefined,
  mapActionsToProps,
)(TaskForm)
