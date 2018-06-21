import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Order extends Component {


    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        //Return if fish object empty
        if (!fish) return null;

        if (!isAvailable) {
            return <li>
                Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        };

        return (
            <CSSTransition classNames="order" key={key} timeout={{ enter: 250, exit: 250 }}>
                <li key={key}>
                    <span>
                        <span className="count">
                            <span> {count}</span>
                        </span> lbs  {fish.name}
                        <button onClick={() => this.props.updateOrder(key)}> x</button>
                    </span>
                    <span> {formatPrice(count * fish.price)}</span>
                </li>
            </CSSTransition>
        );
    };

    render() {

        const orderIds = Object.keys(this.props.order);

        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';

            if (isAvailable) {
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        }, 0);


        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}