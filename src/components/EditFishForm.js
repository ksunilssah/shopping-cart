import React, { Component } from 'react';

export default class EditFishForm extends Component {
    handleChange = e => {
        const updatedFish = { ...this.props.fish, [e.currentTarget.name]: e.currentTarget.value };
        this.props.updateFish(this.props.fishId, updatedFish);
    }
    render() {

        const { name, price, desc, image } = this.props.fish;
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={name} placeholder="Name" />
                <input type="text" onChange={this.handleChange} name="price" value={price} placeholder="Fish Price" />
                <select type="text" onChange={this.handleChange} name="status" placeholder="Fish Status" >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" onChange={this.handleChange} name="desc" placeholder="Fish Desc">{desc}</textarea>
                <input type="text" onChange={this.handleChange} name="image" value={image} placeholder="Fish Image" />
                <button onClick={() => this.props.deleteFish(this.props.fishId)}>Remove Fish</button>
            </div>
        );
    }
}