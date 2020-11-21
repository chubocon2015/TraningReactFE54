import React from 'react'
//React function component (Thẻ <DemoFunctionComponent></DemoFunctionComponent>)
export default function DemoFunctionComponents() {
    return (//Nội dung thẻ chứa trong lệnh return, Lưu ý: Nội dung phải được bao bọc bởi 1 thẻ
        <div className="container bg-dark text-white">
            <div className="display-4 p-5">
                Component
            </div>
            <div className="p-2 pl-5">
                Nội dung component 
            </div>
        </div>
    )
}
