import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>HeroThreads</Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeNavLink}`
                : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeNavLink}`
                : styles.navLink
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeNavLink}`
                : styles.navLink
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeNavLink}`
                : styles.navLink
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Icons Section */}
        <div className={styles.iconsContainer}>
          {/* Search */}
          <button className={styles.iconButton}>
            <FiSearch className={styles.icon} />
          </button>

          {/* Profile Dropdown */}
          <div className={styles.dropdown}>
            <button className={styles.iconButton}>
              {/* <FiUser className={styles.icon} /> */}
              <img
                src={
                  "https://cdn-icons-png.freepik.com/256/2144/2144140.png?ga=GA1.1.783292839.1740766921&semt=ais_hybrid"
                }
                alt="User Avatar"
                className={styles.avatarImage}
              />
            </button>
            <div className={styles.dropdownMenu}>
              <Link to="/login" className={styles.dropdownItem}>
                My Profile
              </Link>
              <Link to="/orders" className={styles.dropdownItem}>
                Orders
              </Link>
              <button className={styles.dropdownItem}>Log Out</button>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className={styles.cartButton}>
            <FiShoppingBag className={styles.icon} />
            <span className={styles.cartBadge}>3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
