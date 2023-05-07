import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Caraousel from "../../Components/Caraousel";
// import { Homecarousel } from "./crousel/crousel"

let data__home__img3 = [
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_1.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_2.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/HP-Banner/6tile/01/Desktop_3.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_4.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/08/Desktop_9.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_7.jpg",
];

let data__home__img5 = [
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif",
  "https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg",
];

let data__home__img6 = [
  "https://banner.caratlane.com/live-images/79a051bec38941a2a055387f502579a9.jpg",
  "https://banner.caratlane.com/live-images/bdd989ae1f2549ae9f8e8d41c144221e.jpg",
];

export const Home = () => {
  return (
    <div>
      <div class="home__img1" width="100vw">
        <Caraousel />
      </div>
      <div className="home__img2">
        <div>
          <Link to="">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/ResponsiveBanner/30/Responsive_Banner001.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/NEWIN/05/1X.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/CurationAT/01/2x.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
      </div>
      <div class="home__img3">
        {data__home__img3.map((el) => {
          return (
            <div>
              <Link to="">
                <img src={el} alt="img" height="100%" width="100%" />
              </Link>
            </div>
          );
        })}
      </div>
      <div class="home__img4">
        <div>
          <Link to="">
            <img
              class="zoom__img"
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/Collection/Collection_Harry_potter_1.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>

        <div>
          <div>
            <Link to="">
              <img
                class="zoom__img"
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Envogue/01/Collection_ENVOUE.jpg"
                alt="pic1"
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          <button class="btn__all__collection">View All Collections</button>
        </div>

        <div>
          <Link to="">
            <img
              class="zoom__img"
              src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Blaze.jpg"
              alt="pic1"
              height="100%"
              width="100%"
            />
          </Link>
        </div>
      </div>

      <div class="home__img5">
        {data__home__img5.map((el) => {
          return (
            <div>
              <Link to="">
                <img src={el} alt="img" height="100%" width="100%" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* <div class="home__img6">
          <div><Link to="">
            <img
              src="https://banner.caratlane.com/live-images/79a051bec38941a2a055387f502579a9.jpg"
              alt="pic1"
              height="100%"
              width="60%"
              />
              <div class="home__img6__more">
                <h2>Not Sure Which Design To Pick?</h2>
                <p>Book A FREE Home Trial!</p>
                <button>Schedule Appointment</button>
              </div>
              </Link>
         </div>
         <div><Link to="">
            <img
              src="https://banner.caratlane.com/live-images/bdd989ae1f2549ae9f8e8d41c144221e.jpg"
              alt="pic1"
              height="100%"
              width="60%"
              /></Link>
         </div>
        </div> */}

      {/* <div class="home__img7">
            <div><Link to="">
                <img
                  // class="zoom__img"
                  src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png"
                  alt="pic1"
                  // height="90%"
                  // width="70%"
                  /></Link>
            </div>
            <div></div>
        </div> */}
      <Link to="">
        <div class="home__img8">
          <div>
            <img
              // class="zoom__img"
              src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png"
              alt="pic1"
            />
            <p>
              The highest quality of craftsmanship and innovation,
              <br />
              that brings you modern, everyday designs.
            </p>
            <button>Know More</button>
          </div>
        </div>
      </Link>

      <div>{/* <Homecarousel /> */}</div>

      <div class="home__email">
        <div>
          <h2>Sign up to be a CaratLane Insider</h2>
          <input type="email" />
          <button>SUBMIT</button>
          <div class="home__radio">
            <div>
              <input type="radio" name="cheese" id="cheese" />
              <label for="cheese">Female</label>
            </div>
            <div>
              <input type="radio" name="cheese" id="cheese" />
              <label for="cheese">Male</label>
            </div>
            <div>
              <input size="40" type="radio" name="cheese" id="cheese" />
              <label for="cheese">Other</label>
            </div>
          </div>
          <p>Know More about CaratLane</p>
        </div>
      </div>
    </div>
  );
};
