import React, { Component } from 'react'
import ProductList from './ProductList'

export default class PropsWhitEvent extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right"><button data-toggle="modal" data-target="#modelId">Giỏ hàng (0)</button></div>
                <ProductList/>
            </div>
        )
    }
}
