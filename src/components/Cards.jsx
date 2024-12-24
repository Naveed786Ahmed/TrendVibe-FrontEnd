import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Cards = ({ item }) => {
    let { img1, title, price } = item
    let [heart, setHeart] = useState(false)

    let navigate = useNavigate()

    const goModal = (value) => {
        navigate(`/product/${value}`)
    }

    return (
        <>
            <div className="cardCont">
                <div className="cardImg" onClick={() => goModal(item.id)}>
                    <img src={img1} alt="" width={"99%"} height={"100%"} />
                </div>
                <div className="cardtitle">
                    <h4>{title}</h4>
                </div>
                <div className="cardPrice">
                    <p>PKR: {price}</p>
                    <div>
                        {heart ? (
                            <FaHeart
                                onClick={() => setHeart(false)} // Toggle back to false
                                style={{ cursor: "pointer", color: "#7a0404" }} // Red color
                            />
                        ) : (
                            <CiHeart
                                onClick={() => setHeart(true)} // Toggle to true
                                style={{ cursor: "pointer", fontSize: "20px" }} // Gray color
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards

