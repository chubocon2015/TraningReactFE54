import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './img/car/products/red-car.jpg' // giá trị mặc định của state
    }
    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className = "col-6">
                            {/* Hình ảnh của xe */}
                            <img src={this.state.imgSrc} className="w-100"/>
                        </div>
                        <div className = "col-6">
                             {/* Chọn màu xe */}
                             {/* <img src="./img/car/icons/icon-black.jpg" width="100" height="100"/> */}
                             <div class="card text-white">
                               <div class="card-header bg-dark text-white" >Exterior color</div>
                               <div class="card-body">
                                 <div className="row border border-dark p-2">
                                     <div className="col-2">
                                      <img style={{cursor:'pointer'}} onClick ={()=>{
                                          this.changeColor('black')
                                      }} src="./img/car/icons/icon-black.jpg" width="100" height ="100"/>
                                     </div>
                                     <div className="col-10 pt-4">
                                         <h3 className ="text-dark">Black color</h3>
                                     </div>
                                 </div>
                                 <div className="row border border-dark p-2">
                                     <div className="col-2 mt-3">
                                      <img style={{cursor:'pointer'}} onClick ={()=>{
                                          this.changeColor('red')
                                      }}
                                      src="./img/car/icons/icon-red.jpg" width="100" height ="100"/>
                                     </div>
                                     <div className="col-10 pt-5">
                                         <h3 className ="text-dark">Red color</h3>
                                     </div>
                                 </div>
                                 <div className="row border border-dark p-2">
                                     <div className="col-2 mt-3">
                                      <img style={{cursor:'pointer'}} onClick={()=>{
                                          this.changeColor('silver')
                                      }} src="./img/car/icons/icon-silver.jpg" width="100" height ="100" />
                                     </div>
                                     <div className="col-10 pt-5">
                                         <h3 className ="text-dark">Silver color</h3>
                                     </div>
                                 </div>
                                 <div className="row border border-dark p-2">
                                     <div className="col-2 mt-3">
                                      <img style={{cursor:'pointer'}} onClick={()=>{
                                          this.changeColor('steel   ')
                                      }} src="./img/car/icons/icon-steel.jpg" width="100" height ="100"/>
                                     </div>
                                     <div className="col-10 pt-5">
                                         <h3 className ="text-dark">Steel color</h3>
                                     </div>
                                 </div>
                               </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
