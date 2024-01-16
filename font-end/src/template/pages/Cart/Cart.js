import { useState } from 'react';
import './Cart.css';

function Cart() {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className="title_login pt-5">
                <h2>Giỏ Hàng</h2>
                <div className='link_cumb'>
                    <a href='#'>Home</a>
                    <p><i class="fa-solid fa-chevron-right"></i></p>
                    <p className='text_title_login'>Giỏ Hàng</p>
                </div>
            </div>
            <div className="cart_page">
                <div className='row'>
                    <div className='col-lg-7'>
                        <h6>Giỏ hàng của bạn(2 sản phẩm)</h6>
                        <hr />
                        <div className='profile_product'>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='img_cart'>
                                        <img src='https://res.cloudinary.com/dlizopaio/image/upload/v1702893316/sp1_sdvgfr.webp'></img>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='name_cart'>
                                        <p>Thịt bò Kobe</p>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='quantity_cart'>
                                        <button onClick={() => decreaseQuantity()} className='how_quantity'>-</button>
                                        <p className='text_quantity'>{quantity}</p>
                                        <button onClick={() => increaseQuantity()} className='how_quantity'>+</button>
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className='price_cart'>
                                        <p>200$</p>
                                    </div>
                                </div>

                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h6>Thành tiền</h6>
                        <hr />
                        <div className='subtotle'>
                            <p>Tạm tính :</p>
                            <p>200$</p>
                        </div>
                        <div className='ship'>
                            <p>Phí vận chuyển :</p>
                            <p>200$</p>
                        </div>
                        <hr />
                        <div className='totle'>
                            <h6>Tổng :</h6>
                            <h6>200$</h6>
                        </div>
                        <div className='button_checkout'>
                            <button>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default Cart;