import React from 'react';
import { Card } from 'antd';
import '../App.css';
const { Meta } = Card;

export const Character = (props) => {
    return (
        <div className='cards'>
            <Card className='card'
                hoverable
                cover={<img className='image'alt="example" src={props.data.image} />}
            >
            <Meta title={props.data.name}/>
            <Meta description={props.data.status}/>
            </Card>
        </div>
    )
}
