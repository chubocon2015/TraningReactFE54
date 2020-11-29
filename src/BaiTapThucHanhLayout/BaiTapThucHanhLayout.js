import React, { Component } from 'react'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'
import BT3Header from './BT3Header'
import BT3ProductList from './BT3ProductList'
import BT3SliderBar from './BT3SliderBar'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        const styleSliderBar = {
            marginTop: '100px',
        }
        return (
            <div>
            <div className="container">
                <BT3Header/>
                <div className ="row" style={styleSliderBar}>
                    <div className="col-3">
                    <BT3SliderBar/>
                    </div>
                    <div className="col-9 ">
                        <BT3Content/>
                    </div>
                </div>
                
            </div>
            <div className="mt-3">
                <BT3Footer/>
            </div>
            </div>
        )
    }
}
