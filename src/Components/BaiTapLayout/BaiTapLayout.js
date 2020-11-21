import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductsList from './ProductsList'
import Slider from './Slider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Slider/>
                <ProductsList/>
                <Footer/>
            </div>
        )
    }
}
