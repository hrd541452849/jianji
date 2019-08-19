import React, { Component } from 'react';

import './input.scss'

class Input extends Component {
    render() {
        const {placeHolder, val, type = 'text', children} = this.props;
        return (
            <label className = 'log_reg_input' >
                <input type = {type} placeholder = {placeHolder} value = {val} onChange = {this.changeAction} />
                {children}
            </label>
        );
    }
    changeAction = (ev) => {
        this.props.onChangeAction(ev.target.value);
    }
}

export default Input;