import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

export default class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        const initialOrderState = localStorage.getItem(params.storeId);

        if (initialOrderState) {
            this.setState({ order: JSON.parse(initialOrderState) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    addFish = fish => {
        //Take a copy of the existing state
        const fishes = { ...this.state.fishes };

        //Add our new fish  to existing state 
        fishes[`fish${Date.now()}`] = fish;

        //Set the update fishes object in state
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updatedFish;
        this.setState({ fishes });
    };

    deleteFish = key => {
        const fishes = { ...this.state.fishes };
        fishes[key] = null;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: fishes })
    };

    addToOrder = key => {
        //take a copy of state
        const order = { ...this.state.order }

        //Either add to the order or update the number in our order
        order[key] = order[key] + 1 || 1;

        //Update the state
        this.setState({ order: order });

    }
    updateOrder = key => {
        const order = { ...this.state.order }
        delete order[key];
        this.setState({ order })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]} key={key} />
                        )}
                    </ul>
                </div>
                <Order updateOrder={this.updateOrder} fishes={this.state.fishes} order={this.state.order} />
                <Inventory updateFish={this.updateFish} deleteFish={this.deleteFish} fishes={this.state.fishes} loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
            </div>
        );
    }
}