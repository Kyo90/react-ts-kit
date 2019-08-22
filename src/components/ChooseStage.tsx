import * as React from 'react'
import { BLOCK_SIZE as B } from '../utils/constants'
import Screen from './Screen'
import Text from './Text'
class ChooseStage extends React.PureComponent {
  render() {
    return (
      <Screen  background="#333">
        <Text content="choose stage:" x={0.5 * B} y={0.5 * B}/>
      </Screen>
    );
  }
}

export default ChooseStage;
