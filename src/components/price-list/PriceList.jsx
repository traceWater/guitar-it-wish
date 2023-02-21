import React from 'react'
import './PriceList.css'
import {ListGroup, ListGroupItem} from 'reactstrap'

const PriceList = props => {

    const { totalItems, totalPrice } = props

    return (
        <ListGroup className="shadow-sm mb-4">
            
            <ListGroupItem>Price ( {totalItems} item )<span className="float-right">{totalPrice}</span></ListGroupItem>

            <ListGroupItem>Delivery Fee<span className="float-right">0</span></ListGroupItem>

            <ListGroupItem color="success"><b>TOTAL AMOUNT<span className="float-right">{totalPrice}</span></b></ListGroupItem>
            
        </ListGroup>
    )
}

export default PriceList
