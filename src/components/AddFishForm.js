import React, { Component, createRef } from 'react';

export default class AddFishForm extends Component {

    nameRef = createRef();
    priceRef = createRef();
    statusRef = createRef();
    descRef = createRef();
    imageRef = createRef();

    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
                <input type="text" name="price" ref={this.priceRef} placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc" />
                <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}