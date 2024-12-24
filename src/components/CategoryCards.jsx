import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const CategoryCards = ({ item }) => {
    let { title, img1, price, id } = item
    let [heart, setHeart] = useState(false)

    let discount = price * 0.15
    let navigate = useNavigate()

    const goFabPage = (value) => {
        navigate(`/product/${value}`)
    }

    return (
        <>
            <div className="catCardCont">
                <div className="catCardImg">
                    <img src={img1} alt="" width={"100%"} height={"100%"} onClick={() => goFabPage(id)}/>
                </div>
                <div className="catCardTitle">
                    <h4>{title}</h4>
                </div>
                <div className="catCardPrice">
                    <p><span className='dis'>PKR:{price + Math.ceil(discount)}</span>PKR: {price}</p>

                    <div>
                        {heart ? (
                            <FaHeart
                                onClick={() => setHeart(false)} // Toggle back to false
                                style={{ cursor: "pointer", color: "#7a0404" }} // Red color
                            />
                        ) : (
                            <CiHeart
                                onClick={() => setHeart(true)} // Toggle to true
                                style={{ cursor: "pointer", fontSize: "20px"}} // Gray color
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCards
