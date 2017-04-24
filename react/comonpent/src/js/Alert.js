/**
 * Created by zdluoa on 2017/4/17.
 */
import React, { Component,PropTypes } from 'react';
import classnames from 'classnames';
import Styles from './css/bootstrap.css';

export default class Alert extends Component{
    constructor(props){
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(){
        console.log(this.refs.element)
    }
    render(){
        const { children, className, onClose, type, ...others } = this.props
        console.log(Styles.alert)
        return <div ref="element" className={
            classnames({alert : true })
        } onClick={this.handleClose}>Alert</div>;
    }
}

Alert.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClose: PropTypes.func,
    type: PropTypes.string
}

Alert.defaultProps = {
    type: 'info'
}