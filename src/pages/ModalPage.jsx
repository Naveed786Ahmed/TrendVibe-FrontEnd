import React from 'react'
import HeaderApp from "../components/Header.jsx"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footers from '../components/Footer.jsx'
import { ProductType } from '../actions/actionType.js'

const ModalPage = () => {

    let { id } = useParams()

    let ModalProducts = useSelector((state) => state?.allProducts)
    let findProduct = ModalProducts.find((item) => item.id == id)
    let { title, price, des, img1, img2, img3, img4, size, fabric } = findProduct

    let discount = price * 0.15
    let dispatch = useDispatch()

    return (
        <>
            <HeaderApp />
            <div className="modalMain">
                <div className="ModalLeftSide">
                    <div className="imgBox">
                        <img src={img1} alt="" />
                    </div>

                    {
                        img2 ?
                            <div className="imgBox">
                                <img src={img2} alt="" />
                            </div>
                            :
                            <div className="imgBox">
                            </div>
                    }



                    {
                        img3 ?
                            <div className="imgBox">
                                <img src={img3} alt="" />
                            </div>
                            :
                            <div className="imgBox">
                            </div>
                    }

                    {img4 ?
                        <div className="imgBox">
                            <img src={img4} alt="" />
                        </div>
                        : <div className="imgBox">
                        </div>
                    }

                </div>
                <div className="ModalRightSide">
                    <div className="modalTitle">
                        {title}
                    </div>
                    <div className="modalPKR">
                        <span className='dis'>PKR: {price + Math.ceil(discount)}</span>PKR {price}
                    </div>
                    <div className="modalSize">
                        {Array.isArray(size) && size.map((item, index) => {
                            return (
                                <>
                                    SIZE:
                                    <div className="sizeBox" key={index}>
                                        {item}
                                    </div>
                                </>

                            )
                        })}

                    </div>
                    <div className="modalFabric">
                        Fabric: {fabric}
                    </div>
                    <div className="modalDes">
                        Description: {des}
                    </div>
                    <div className="ModalAddToCard">
                        <div className="modalAddTo" onClick={() => dispatch({type: ProductType.cartProduct, payload: findProduct})}>
                            ADD TO CART
                        </div>
                    </div>
                </div>
            </div>
            <Footers />
        </>
    )
}

export default ModalPage
