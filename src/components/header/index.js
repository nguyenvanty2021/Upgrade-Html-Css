import { useState } from "react";
import ImageComponent from "../img";
import Logo from "./../../assets/home-page/Header/logo.png";
import styles from "./header.module.scss";
const Header = () => {
  const [btn, setBtn] = useState(0);
  return (
    <header className={styles["header"]}>
      <span>
        <ImageComponent srcProps={Logo} altProps="Logo" classProps={{width: "7.5rem"}} />
      </span>
      {/* thẻ ul, li là thẻ danh sách (dùng cho các menu, danh mục, list...) */}
      <ul className={styles["header__menu"]}>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">features</a>
        </li>
        <li>
          <a href="#">pricing</a>
        </li>
        <li>
          <a href="#">testimonials</a>
        </li>
        <li>
          <a href="#">help</a>
        </li>
      </ul>
      <div className={styles["header__btn"]}>
        <button onClick={() => setBtn(0)} className={btn === 0 ? styles["header__btn-signup"] : styles["header__btn-signin"]}>Sign In</button>
        <button onClick={() => setBtn(1)} className={btn === 1 ? styles["header__btn-signup"] : styles["header__btn-signin"]}>Sign Up</button>
      </div>
    </header>
  );
};
export default Header;
