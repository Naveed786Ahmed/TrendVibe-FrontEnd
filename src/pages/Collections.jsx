import React from 'react'
import HeaderApp from "../components/Header.jsx"
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryCards from '../components/CategoryCards.jsx'
import Footers from '../components/Footer.jsx'

const Collections = () => {

    let { category } = useParams()
    let navigate = useNavigate()

    let collProds = useSelector((state) => state?.allProducts)
    
    let filterCategory = collProds.filter((item) => item.category == category)
    
    let uniqueFabrics = filterCategory.filter((item, index, self) => index === self.findIndex((i) => i.fabric == item.fabric))
    
    const goFabric = (value) => {
        navigate(`/fabric/${value}`)
    }
    

    return (
        <>
            <HeaderApp />
            <div className="collectionCat">
                <div className="collectionCatName">
                    <h1>
                        {category.toUpperCase()}
                    </h1>
                </div>
                <div className="collectionCatBox">
                    {
                        uniqueFabrics.map((item, index) => {
                            return (
                                <div className="catBoxCont" key={index} onClick={() => goFabric(item.fabric)}>
                                    <div className="catBoxContImg">
                                        <div className="catImgBoc">
                                            <img src={item.img1} alt="" />
                                        </div>
                                    </div>
                                    <div className="catBoxTitles">
                                        {item.fabric}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="catCardsMain">
                {
                    filterCategory?.map((item, index) => {
                        return (
                            <CategoryCards item={item} key={index} />
                        )
                    })
                }
            </div>
            <Footers />
        </>
    )
}

export default Collections