import './index.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Waterfall from '../src/ReactWaterfallComponent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 40
    }
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      count: e.target.count.value
    })
  }
  render () {
    var { count } = this.state
    var slide = []
    for (let i = 0; i < count; i++) {
      slide.push(
        <div key={i} style={{height: 50 + 50 * Math.random()}}>
          {count}-{i + 1}
        </div>
      )
    }
    return (
      <div>
        <form onSubmit={this.onChange}>
          <div>children.length === </div>
          <input
            type='number'
            defaultValue={this.state.count}
            min='1'
            name='count'
            placeholder='请输入个数' />
          <div><button type='submit'>提交</button></div>
        </form>
        <Waterfall margin={10}>
          {slide}
        </Waterfall>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
