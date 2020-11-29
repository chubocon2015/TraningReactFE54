import React, { Component } from 'react'

export class Product extends Component {
     
    render() {
        let {sp,viewDetailHandler,viewDetailGioHang} = this.props;
        return (
            <div className="col-4" >
                    <div className="card text-left">
                        <img className="card-img-top" height="300" src={sp.hinhAnh} alt='123' />
                        <div className="card-body">
                            <h4 className="card-title">{sp.tenSP}</h4>
                            <button className="btn btn-success" onClick={()=>viewDetailHandler(sp)}>Xem chi tiết</button>
                            <button className="btn btn-danger" onClick={()=>viewDetailGioHang(sp)}>Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Product
