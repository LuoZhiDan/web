'use strict'

import { Component } from 'react'
import ReactDOM from 'react-dom'
import { Form, FormControl, Modal } from 'rctui'

import './index.css'

/**
* This is the description for my class.
*
* @class Demo
* @constructor
*/
class Demo extends Component {
	/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
* @method methodName
* @param {String} foo Argument 1
* @param {Object} config A config object
* @param {String} config.name The name on the config object
* @param {Function} config.callback A callback function on the config object
* @param {Boolean} [extra=false] Do extra, optional work
* @return {Boolean} Returns true on success
*/
  render () {
    return (
      <div>
        <h2>React UI Form demo</h2>
        <Form onSubmit={(data) => Modal.alert(JSON.stringify(data), 'alert')} button="submit">
          <FormControl type="text" name="text" grid={1 / 4} label="text" />
          <FormControl type="date" name="date" label="date" />
          <FormControl type="time" name="time" label="time" />
          <FormControl type="select" name="select" grid={1 / 4} label="select" data={['1', '2', '3', '4', '5', '6', '7']} />
        </Form>
      </div>
    )
  }
  
  /**
* My property description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
* 
* @property lll
* @type {Object}
* @default "foo"
*/
	lll : 55
}

ReactDOM.render(<Demo />, document.getElementById('demo'))

