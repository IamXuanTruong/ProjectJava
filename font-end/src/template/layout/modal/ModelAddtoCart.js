import React, { useState, useEffect } from 'react';
import ProductService from '../../../service/ProductService';
import JSAlert from 'js-alert'
import SuccessIcon from '../../../image/success.png';
import { Link, useParams } from 'react-router-dom';
import CartService from '../../../service/CartService';
import './ModelAddtoCart.css';
function ModelAddtoCart({ showPopup, handleClose, product_id }) {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    };
    const handleAddToCart = () => {
        console.log("product_id " + product_id);
        CartService.AddProductToCart(product_id, quantity)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
        JSAlert.alert("Product is added into your cart", "Successfully", SuccessIcon).dismissIn(500);

    };

    useEffect(() => {
        if (showPopup === true) {
            ProductService.detailProduct(product_id)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }, [product_id, showPopup]);
    return (
        <>
            <div className='modal-addtocart' style={{ display: showPopup ? 'flex' : 'none' }}>
                <div className='AddtoCart '>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="img-product">
                                <img src={product.product_image} alt="Product" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='close-button'>
                                <button onClick={handleClose}><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <div className='product-infor'>
                                <h3 className='name-product'>{product.product_name}</h3>
                                <p>Thương Hiệu: {product.brand}</p>
                                <p className='sellprice'>{new Intl.NumberFormat('vn-VN').format(product.price)}<span>đ</span></p>
                                <p>Nguồn gốc : Việt Nam</p>
                                <div className='quantity-product'>
                                    <p className='lable'>Quantity</p>
                                    <input
                                        pattern="[0-9]*"
                                        type="number"
                                        placeholder="Quantity"
                                        max={product.quantity}
                                        min="1"
                                        value={quantity}
                                        onChange={handleQuantity}
                                    />
                                </div>
                                <div className='AddToCart'>
                                    <button type="button" className="btn btn-outline-success" onClick={handleAddToCart}>Add To Cart</button>
                                </div>
                                <Link to={`/detail/${product.product_id}`}>Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}
export default ModelAddtoCart;