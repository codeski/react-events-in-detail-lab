// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButtons extends React.Component {

    logClick = (event) => {
        let cords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(cords)
    }
    
    // console.log([event.clientX, event.clientY])

    render() {
        return <button onClick={this.logClick}>CoordinatesButton</button>
    }
}

export default CoordinatesButtons