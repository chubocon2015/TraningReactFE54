import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    products = [
        { id: 1, name: 'iphone',picture:<img src='https://picsum.photos/200'/>, price: 10000 },
        { id: 2, name: 'Xphone',picture:<img src='https://picsum.photos/200'/>, price: 20000 },
        { id: 3, name: 'Aphone',picture:<img src='https://picsum.photos/200'/>, price: 30000 },

    ]
    renderProduct = () => {
        let arrJSX = [];
        for (let index in this.products) {
            let product = this.products[index];
            let jsxProduct = <div className="col-4">
                <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                </div>
                </div>
            </div>
            arrJSX.push(jsxProduct);
        }
        return arrJSX;
    }
    renderProductMap = () =>{
        const arrJSX  = this.products.map((product,index)=>{
            return <div className="col-4" key={index}>
            <div className="card">
            <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.price}</p>
            </div>
            </div>
        </div>
            
        })
        return arrJSX;
    }
    renderProductTable =()=>{
        return this.products.map((product,index)=>{
            return <tr key ="index">
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.picture}</td>
                <td>{product.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProductMap()}
                </div>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Hình ảnh</th>
                        <th>PRICE</th>
                    </tr>
                    <tbody>
                    {this.renderProductTable()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
