import React, { useState } from 'react'
import cardImg from "../assets/images/payment.webp"
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const [order, setOrder] = useState("Complete Order");
    let navigate = useNavigate()

    const goHome = () => {
        navigate("/")
    }

    let allCartsData = useSelector((state) => state?.addCart)
    let subTotal = useSelector((state) => state?.subTotals)
    console.log(allCartsData, subTotal);


    return (
        <>
            <div className="checkOutHeader">
                <h1>
                    <span onClick={goHome}>TrendVibe</span>
                    <div >
                        <UserOutlined />
                    </div>

                </h1>

            </div>
            <div className="checkOutMainBody">
                <div className="checkOutMainBodyRight">
                    <div className="checkOutMainBodyRightMain">
                        <h3>Contact</h3>
                        <div className="mail">
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="names">
                            <div className="fName">
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className="lName">
                                <input type="text" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className="mail">
                            <input type="text" placeholder='Address' />
                        </div>
                        <div className="names">
                            <div className="fName">
                                <input type="text" placeholder='City' />
                            </div>
                            <div className="lName">
                                <input type="text" placeholder='Postal Code (optional)' />
                            </div>
                        </div>
                        <div className="mail">
                            <input type="text" placeholder='Phone' />
                        </div>
                        <h2>Shipping Method</h2>
                        <div className="shppingStandard">
                            <p>Standard</p>
                            <p>Free</p>
                        </div>
                        <h2>Payment</h2>
                        <div className="paymentDiv">
                            <div className="debitCredit" onClick={() => setOrder("Pay Now")}>
                                <p>Debit-Credit Card</p>
                                <div className="debitCreditImg">
                                    <img src={cardImg} alt="" />
                                </div>
                            </div>
                            <div className="COD" onClick={() => setOrder("Complete Order")}>
                                Cash On Delivery (COD)
                            </div>
                        </div>
                        <div className="OrderBtn">
                            <div className="orderButton">
                                {order}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkOutMainBodyLeft">
                    <div className="checkOutMainBodyLeftMain">
                        <div className="cartBoxes">
                            {
                                allCartsData.map((item) => {
                                    let {id, img1, title, price, quantity} = item

                                    return (
                                        <>
                                            <div className="cartBoxesDiv" key={id}>
                                                <div className="cartBoxesImg">
                                                    <img src={img1} alt="" />
                                                    <div className="Qbatch">
                                                        {quantity}
                                                    </div>
                                                </div>
                                                <div className="cartBoxesText">
                                                    <div className="cartBoxesTextTitle">
                                                        {title}
                                                    </div>
                                                    <div className="cartBoxesTextPrice">
                                                        Rs {quantity * price}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="cartBoxesSubTotal">
                            <div>
                                <p className='colorGray'>Subtotal</p>
                                <p className='colorGray'>{subTotal}</p>
                            </div>
                            <div>
                                <p className='colorGray'>Shipping</p>
                                <p className='colorGray'>Free</p>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <p>Total</p>
                                <p><span style={{fontSize: "12px", color: "gray", fontWeight: "400", marginRight: "8px"}}>PKR</span>{subTotal}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut