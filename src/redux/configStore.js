import {combineReducers,createStore} from 'redux';
const stateGiohang = {
    gioHang: [
        {maSP:1 , tenSP:'IphoneX',hinhAnh:'./img/sp_iphoneX.png',donGia:1000,soLuong:5}
    ]
}
const rootReducer = combineReducers({
    //Các state sau này khai báo tại đây
    stateGioHang: (state = stateGiohang,action)=>{
        return state;
    }
})
//Tạo ra store chứa rootReducer (Xem như state tổng của ứng dụng)


export const store = createStore(rootReducer);
