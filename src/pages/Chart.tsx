import * as React from 'react'
import Gague from '../components/Gauge'
export default class Chart extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div>
          <Gague max={1000} value={200} width={200} height={160} label="This is a smaller one" color="#123456" />
        </div>
        
      </div> 
    )
  }
}
