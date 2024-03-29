import React from "react";
//c3d7b0a1-4a37-420c-b061-bd75c1f0e3e1

import {connect } from "react-redux";

import { addCartItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({item, addCartToItem }) => {
    const {name , price,   imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image"
                style= {{
                    backgroundImage : `url(${imageUrl})`

                }}
            ></div>


            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>

            <CustomButton inverted = {true} onClick = { ()=> addCartToItem(item)} >Add to cart </CustomButton>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addCartToItem: item => dispatch( addCartItem(item) )
})


export default connect(null,mapDispatchToProps)(CollectionItem);