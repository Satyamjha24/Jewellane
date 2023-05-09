import React from "react";
import styles from "./navdrop.module.css";
import { Link } from "react-router-dom";
import { Navbropdowncon } from "./Navbropdowncon";

export const Navbardropdown = () => {
  return (
    <div className={styles.navdrop}>
      <div className={styles.navdropWrapper}>
        <ul className={styles.navdroplist}>
          <li>
            <Link to="/">
              <div className={styles.navdropheader}>
                <p>BEST SELLERS</p>
              </div>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.navdropheader}>
                <p>NEW ARRIVALS</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/ring">
              <div className={styles.navdropheader}>
                <p>RINGS</p>
              </div>
            </Link>

            <div className={styles.navdropper}>
              <Navbropdowncon />
            </div>
          </li>

          <li>
            <Link to="/mangalsutra">
              <div className={styles.navdropheader}>
                <p>MANGALSUTRA</p>
              </div>
            </Link>

            <div className={styles.navdropper}>
              <Navbropdowncon />
            </div>
          </li>

          <li>
            <Link to="/bracelet">
              <div className={styles.navdropheader}>
                <p>BRACELETS & BANGLES</p>
              </div>
            </Link>

            <div className={styles.navdropper}>
              <Navbropdowncon />
            </div>
          </li>

          <li>
            <Link>
              <div className={styles.navdropheader}>
                <p>SOLITAiRES</p>
              </div>
            </Link>
            <div className={styles.navdropper}>
              <Navbropdowncon />
            </div>
          </li>

          <li>
            <Link>
              <div className={styles.navdropheader}>
                <p>OTHER JEWELLERY</p>
              </div>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.navdropheader}>
                <p>GIFTING</p>
              </div>
            </Link>
          </li>

          <li>
            <Link>
              <div className={styles.navdropheader}>
                <p>SPECIAL DEALS</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
