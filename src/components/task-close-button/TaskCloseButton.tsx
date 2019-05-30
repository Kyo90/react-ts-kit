import * as React from 'react';
import { connect } from 'react-redux';
import {deleteTask} from '../../store/actions'

interface IProps {
  id: number,
  onRemoveTask: any
}
class CloseButton extends React.Component<IProps,any> {

  render(){
    return (
      <button type="button" onClick={this.closeTask}>关闭</button>
    )
  }

  private closeTask = () => {
    const {id} = this.props;
    this.props.onRemoveTask(id)
  }
}


const mapActionsToProps = {
  onRemoveTask: deleteTask
}

export default connect(undefined, mapActionsToProps)(CloseButton)
