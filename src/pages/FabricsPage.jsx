import React from 'react'
import HeaderApp from '../components/Header.jsx'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CategoryCards from '../components/CategoryCards.jsx'
import Footers from '../components/Footer.jsx'

const FabricsPage = () => {

    let { fabric } = useParams()

    let fabProds = useSelector((state) => state?.allProducts)
    let filterFabrics = fabProds.filter((item) => item.fabric == fabric)

    return (
        <>
            <HeaderApp />
            <div className="fabricHeading">
                {fabric.toUpperCase()}
            </div>
            <div className="catCardsMain">
                {
                    filterFabrics?.map((item, index) => {
                        return (
                            <CategoryCards item={item} key={index} />
                        )
                    })
                }
            </div>
            <Footers/>
        </>
    )
}

export default FabricsPage