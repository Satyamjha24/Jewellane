import React from 'react'
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import { TfiInstagram } from "react-icons/tfi";
import "./crouser.css"

let data__home__img5 = [
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg"
   
   ]

  //  let data__home__img4 = [
  //   {
  //     "img":"",
  //     "title":"",

  //   }
  //  ]


   const breakpoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 550,
      itemsToShow: 1,
    },
    {
      width: 760,
      itemsToShow: 2,
    },
    {
      width: 1100,
      itemsToShow: 4,
    },
  ];

export  const Homecarousel = () => {
  return (
    <div class="carousel__main">
        <div>
        <Carousel
         breakPoints={breakpoints}
         isRTL={true}
         itemsToShow={4}
         itemsToScroll={1}
         pagination={false}
         disableArrowsOnEnd={false}
        >
          {data__home__img5.map((el)=>{
            return(
              <div style={{marginLeft:"2rem"}}><Link to="">
                 <img 
                  src={el}
                  alt="img"
                  height="100%"
                  width="100%"
                  />
                  </Link>
              </div>             
            )
          }) } 
        </Carousel>
        </div>

        <div class="home__crousel2">
            <Carousel
                // isRTL={true}
                itemsToShow={1}
                itemsToScroll={1}
                showArrows={false}
                disableArrowsOnEnd={false}
                enableAutoPlay 
                
                autoPlaySpeed={2500}
            >
                <div class="car_box">
                    <TfiInstagram class="home__car__icone"/>
                    <h1>”My fiance wanted to give me something classic and unique.
                         He searched everywhere, literally half of the Chandigarh for the unique design.
                         Our search was complete when we entered CaratLane store.
                         My fiance selected the diamond and I selected the design. 
                         I love it because it is designed just for me.”</h1>
                    <p>Pooja Rajpoot via Instagram</p>
                    <button>Read More</button>
                </div>
                <div class="car_box">
                    <TfiInstagram class="home__car__icone"/>
                    <h1>“I got this necklace as my wedding gift and instantly loved it.
                         It is literally the only accessory I wore on my entire honeymoon.
                         I love how delicate and beautiful it is.”</h1>
                    <p>Tanya Gupta via Instagram</p>
                    <button>Read More</button>
                </div>
                <div class="car_box">
                    <TfiInstagram class="home__car__icone"/>
                    <h1>”The six of us wanted to celebrate our year of togetherness with something which will stay with us forever.
                         So, all of us bought this beautiful ring which is the perfect symbol of our friendship and is just so classy!”</h1>
                    <p>Shilpa Praveen via Instagram</p>
                    <button>Read More</button>
                </div>
                
            </Carousel>
        </div>
    </div>
  )
}
