import React from 'react';

export default function(props){
    const {foodOrder} = props;
        return (
            <div>
                <h3>Thank you {foodOrder.name}, your order is being prepared</h3>
            </div>
        )
}