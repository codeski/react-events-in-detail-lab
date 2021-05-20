// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    handleClick = (event) => {
        let e = event.type
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }
    render() {
        return <button onClick={this.handleClick}>DelayButton</button>
    }
}

export default DelayedButton