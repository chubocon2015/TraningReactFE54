import React, { Component } from 'react'

export default class DemoState extends Component {
    //state : là thuộc tính có sẵn của component => dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác (click,change,blue)
    state = {
        isLogin : false
    }
    // isLogin = false;
    userName = 'Hoàng';
    renderContent = ()=>{
        if (this.state.isLogin) {
            return <p>
                Hello ! {this.userName}
            </p>
        }
        return <button onClick={()=>{
            this.handleLogin();
        }}>Đăng nhập</button>
    }
    handleLogin = () => {
        //Không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState
        //setState(): là phương thức có sẵn của lớp đối tượng component => dùng để thay đổi giá trị trong this.state đông thợi gọi lại hàm render
        this.setState ( {
            isLogin : true
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h3>If else react</h3>
                    {/* {this.isLogin === true ? <p>Hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}
