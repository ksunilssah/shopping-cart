import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        const { name, image, price, desc, status } = this.props.details;
        const IsAvailable = status === 'available' ? true : false;
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button onClick={this.handleClick}
                    disabled={!IsAvailable}>
                    {!IsAvailable ? 'Sold Out' : 'Add to Cart'}
                </button>
            </li>
        );
    }
}