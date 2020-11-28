import React from 'react'

export default function ProductRFC(props) {
    // let name = props.name;
    // let price = props.price;
    //ES6
    let {name,price} = props;
    return (
        <div>
            <div className="card text-dark">
                <img className="card-img-top" src="https:picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    )
}

