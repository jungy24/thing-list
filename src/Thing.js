import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import Actions from './Actions'

class Thing extends Component {
  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  pressed = (ev) => {
    const { thing, saveCheck } = this.props
    console.log('hi')
    thing.completed = ev.target.value
    saveCheck(thing)
  }

  render() {
    const { thing, removeThing } = this.props

    return (
      <li className="Thing">
        <input type="checkbox" value="on" onChange={this.pressed} checked={thing.completed} />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    )
  }
}

export default Thing