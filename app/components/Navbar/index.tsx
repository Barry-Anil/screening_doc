"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { HamburgerButton } from "react-hamburger-button";
import { CloudLightning } from "react-feather";
import images from '@/app/constants/image';


const Navbar = (): JSX.Element => {
  const [hidden, setHidden] = React.useState(true);

  const handleHamburgerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setHidden((current) => !current);
  };

  return (
    <nav>
      <div className={` margin-on-side row ${styles.navContainer}`}>
        {/* logo */}
        <Image src={images.logo} alt="Health is Wealth" />
        {/* nav-links */}
        <ul
          className={`row ${styles.navLinks} ${
            hidden ? styles.hide : styles.show
          }`}
          onClick={() => {
            setHidden((current) => !current);
          }}
        >
          <div className={`${styles.navMenuButton} ${styles.insideContainer}`}>
            {/* <HamburgerButton
              strokeWidth={3}
              open={!hidden}
              animationDuration={0.5}
			  onClick={handleHamburgerClick as any}
              color={"white"}
              width={20}
              height={17}
            /> */}
          </div>
          <li
            className={` ${styles.activeNavLink} text-dark-gray ${styles.navLink}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">Find a doctor</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">Apps</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">Testimonials</Link>
          </li>
          <li className={` text-dark-gray ${styles.navLink}`}>
            <Link href="/">About us</Link>
          </li>
        </ul>
        <div className={`${styles.navMenuButton}`}>
          {/* <HamburgerButton
            strokeWidth={3}
            open={!hidden}
            animationDuration={0.5}
            onClick={() =>
              setHidden((current) => {
                return !current;
              })
            }
            width={20}
            height={17}
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;