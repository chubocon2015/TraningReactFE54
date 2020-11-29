import React, { Component } from 'react'

export default class BT3SliderBar extends Component {
    render() {
        const cssCategory = {
            border : '1px solid gray'
        }
        return (
            <div className="container">
                <h3>Shop Name</h3>
                <div className="text-primary" style={cssCategory}>
                    <p className="ml-3">Category 1</p>
                </div>
                <div className="text-primary" style={cssCategory}>
                    <p className="ml-3">Category 2</p>
                </div>
                <div className="text-primary" style={cssCategory}>
                    <p className="ml-3">Category 3</p>
                </div>
            </div>
        )
    }
}
