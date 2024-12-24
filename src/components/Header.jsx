import { UserOutlined } from '@ant-design/icons';
import { Badge, Drawer } from 'antd';
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdDeleteOutline } from 'react-icons/md';
import { RiShoppingBagLine } from 'react-icons/ri';
import { TbShoppingCartX } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../actions/actionType.js';

const HeaderApp = () => {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    let navigate = useNavigate()

    let headerProducts = useSelector((state) => state.allProducts)
    let uniqueCategory = [...new Set(headerProducts.map((item) => item.category))]
    let dispatch = useDispatch()
    let getTotal = useSelector((state) => state?.subTotals)
    let getValue = useSelector((state) => state?.addCart)
    let getAll = useSelector((state) => state?.allProducts)
    let findSearch = getAll.filter((item) => item.title == searchValue)

    const getSearch = (e) => {
        setSearchValue(e.target.value);
    }



    const goCollection = (item) => {
        navigate(`/collection/${item}`)
    }

    const goHome = () => {
        navigate("/")
    }

    const handleInc = (id) => {
        const cartItem = getValue.find((item) => item.id === id)

        if (cartItem) {
            dispatch({
                type: ProductType.updateQuantity,
                payload: { id, quantity: cartItem.quantity + 1 }
            })
        }
    }

    const handleDec = (id) => {
        const cartItem = getValue.find((item) => item.id === id)

        if (cartItem && cartItem.quantity > 1) {
            dispatch({
                type: ProductType.updateQuantity,
                payload: { id, quantity: cartItem.quantity - 1 }
            })
        }
    }

    const goModalPag = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <>
            <div className="headerCont">
                <div className="headerLogo" onClick={goHome}>
                    <h1>TrendVibe</h1>
                </div>
                <div className="searchBarContainer">
                    <div className="searchBar">
                        <input type="text" placeholder='Search for Products' onChange={getSearch} />
                        <div className="searchIcon">
                            <CiSearch />
                        </div>
                    </div>
                    <div className="searchDropdown">

                        {
                            findSearch ?
                                findSearch.map((item) => {
                                    return (
                                        <div className="searchItem">
                                            <div className="searchItemImage">
                                                <img src={item.img1} alt="" onClick={()=>goModalPag(item.id)} />
                                            </div>
                                            <div className="searchItemText">
                                                <div className="searchItemTitle">
                                                    {item.title}
                                                </div>
                                                <div className="searchItemPrice">
                                                    <span className='searchItemDis'>PKR {item.price + Math.ceil(item.price * 0.15)}</span>PKR {item.price}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                                :
                                <div></div>
                        }
                    </div>

                </div>

                <div className="headerRight">
                    <div className="headerRightMain">
                        <div className="loginIcon">
                            <UserOutlined />
                        </div>
                        <div className="AddToCartIcon">
                            <Badge count={getValue.length}>
                                <RiShoppingBagLine onClick={showDrawer} className='cartIcon' />
                            </Badge>
                            <Drawer title="Shoping Cart" onClose={onClose} open={open}>

                                {
                                    getValue.length > 0 ?
                                        (
                                            <div className='cartMain'>
                                                <div className="cartMainBox">
                                                    {
                                                        getValue.map((item) => {

                                                            let { title, img1, price, id, quantity } = item
                                                            let updatePrice = quantity * price

                                                            return (
                                                                <>
                                                                    <div className="addCartProd">
                                                                        <div className="addCartProdImg">
                                                                            <img src={img1} alt="" />
                                                                        </div>
                                                                        <div className="addCartProdText">
                                                                            <div className="addCartProdTitle">
                                                                                {title}
                                                                            </div>
                                                                            <div className="addCartProdPrice">
                                                                                PKR {updatePrice}
                                                                            </div>
                                                                            <div className="addCartProdCart">
                                                                                <div className="incDec" onClick={() => handleDec(id)}>-</div>
                                                                                <div className="incDec">{quantity}</div>
                                                                                <div className="incDec" onClick={() => handleInc(id)}>+</div>

                                                                            </div>
                                                                            <div className="addCartDeleteIcon">
                                                                                <MdDeleteOutline onClick={() => dispatch({ type: ProductType.deleteCart, payload: { id: id } })} style={{ cursor: "pointer" }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <div className="subTotalDiv">
                                                    <div className="subTotalBox">
                                                        <p>Subtotal:</p>
                                                        <p>PKR {getTotal}</p>
                                                    </div>
                                                    <div className="checkBtn">
                                                        <div className="checkButton">
                                                            CHECK OUT
                                                        </div>
                                                    </div>
                                                </div>
                                            </ div>
                                        )
                                        :
                                        (
                                            <div className="noCart">
                                                <div className="noCartIcon">
                                                    <TbShoppingCartX />
                                                </div>
                                                <h2>Your Cart is Empty</h2>
                                            </div>
                                        )

                                }


                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navHeader">
                <ul className='navHeaderItem'>
                    {
                        uniqueCategory?.map((item, index) => <li key={index} onClick={() => goCollection(item)}>{item.toUpperCase()}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default HeaderApp