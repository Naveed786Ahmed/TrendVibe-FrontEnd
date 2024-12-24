import React, { useEffect } from 'react'
import HeaderApp from '../components/Header'
import Slider from "react-slick";
import Sliders from '../components/Slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dastoor from "../assets/images/dastoorCat.png";
import KKStudio from "../assets/images/KKStudioCAt.png";
import AuraWinter from "../assets/images/AuraWinterCat.png";
import Kids from "../assets/images/kidsCat.png";
import Enchanted from "../assets/images/enhancedcat.png";
import Embroidered from "../assets/images/EmbroideredCAt.png";
import { useDispatch, useSelector } from 'react-redux';
import { ProductType } from "../actions/actionType.js";
import axios from 'axios';
import Cards from '../components/Cards.jsx';
import Footers from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let whatsNew = [
    {
      img: Dastoor,
      title: "Dastoor"
    },
    {
      img: KKStudio,
      title: "Formals"
    },
    {
      img: AuraWinter,
      title: "Aura Winter’24"
    },
    {
      img: Kids,
      title: "Silky Smiles"
    },
    {
      img: Enchanted,
      title: "Enchanted Elegance"
    },
    {
      img: Embroidered,
      title: "Embroidered"
    },
  ]

  let dispatch = useDispatch()
  let currentState = useSelector((state) => state?.allProducts)

  const fetchData = async () => {
    let response = await axios.get("https://trend-vibe-02.vercel.app/clothes")
    dispatch({ type: ProductType.allProduct, payload: response?.data?.data })
  }


  useEffect(() => {
    fetchData()
  }, [])

  const settings = {
    dots: false,
    infinite: whatsNew.length,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const values = {
    dots: false,
    infinite: currentState?.length,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  let navigate = useNavigate()

  const goFabPage = (value) => {
    navigate(`/fabric/${value}`)
  }

  return (
    <>
      <HeaderApp />
      <Sliders />
      <div className="whatsNew">
        <div className="whatsNewTitle">
          <h1>WHAT'S NEW</h1>
        </div>

        <div className="whatsNewCategory">
          <Slider {...settings} className="catSlider">
            {
              whatsNew.map((item, key) => {
                return (
                  <div className='catBoxes' key={key}>
                    <div className="catBoxImg" onClick={() => goFabPage(item.title)}>
                      <div className="catBoxImage">
                        <img src={item.img} alt="" width={"100%"} height={"100%"} />
                      </div>
                    </div>
                    <div className="catBoxTitle">
                      {item.title}
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
      <div className="trendingHeading">
        <h1>TRENDING</h1>
      </div>
      <div className="allProductsDiv">
        <Slider {...values} className='allProductSlider'>
          {currentState?.map((item) => {
            return (
              <div className="CardMain" key={item.id}>
                <Cards item={item} />
              </div>
            )
          })}
        </Slider>
      </div>
      <Footers />
    </>
  )
}

export default Home