import React, {useEffect} from 'react'
import './offer.css'
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import a2kfblogo from '../../Assets/a2k-fb-logo.jpg'
import bulbImg from '../../Assets/bulb.png'
import dartImg from '../../Assets/dart.png'
import balImg from '../../Assets/balances.jpg'
//array MAP

import 'aos/dist/aos.css'
import Aos from 'aos'


const Offers = [
    {
    id: 1,
    imgSrc: a2kfblogo,
    h4title: 'OUR STORY',
    dates:'April 21, 2024'
  },
  {
    id: 2,
    imgSrc: bulbImg,
    h4title: 'OUR MISSION',
     dates:'April 15, 2024'
  },
  {
    id: 3,
    imgSrc: dartImg,
    h4title: 'OUR VISION',
    dates:'March 14, 2024'
  },
  {
    id: 4,
    imgSrc: balImg,
    h4title: 'OUR CORE VALUES',
    dates:'March 7, 2024'
  },
  
]

const Offer = () => {

    useEffect(() => {
    Aos.init({duration: 2000})
  },[])




  return (
    <section className="offer container section">

      <div className="secContainer" data-aos="fade-up" data-aos-duration="3000">

        <div className="secIntroduce">
          <h2 className="secTitle">
            A2K GROUP
          </h2>
          <p>
            Know Our Story and Who we Are
          </p>
        </div>

        

        <div className="mainContent grid">
          {Offers.map((item) => { 
            return (
              <div className="singleNews">
            <div className="newsImage">
              <img src={item.imgSrc} alt={`Service ${item.id}`} />
            </div>

            <div className="offerBody">
                  <div className="price flex">
                    
                <h4>
                  {item.h4title}
                </h4>
                
              </div>

              {/*<div className="amenities flex">
                <div className="singleAmenity flex">
                  <IoNewspaperOutline className='icon' />
                  <small>{item.dates}</small>
                </div>

              </div>*/}
              <button className='btn flex' data-aos="zoom-in">Know More {/*<MdOutlineKeyboardArrowRight className='icon' />*/}</button>

            </div>
          </div>
            );
          })}
          
        </div>
      </div>

    </section>
  )
}

export default Offer