import ButtonComponent from "../button";
import ImageComponent from "../img";
import styles from "./banner.module.scss";
import BannerImage from "./../../assets/home-page/Banner/banner.png";
const Body = () => {
  return (
    <main>
      {/* ngoài header + footer những phần tử trên UI đều là 1 section và tất cả những section này đều nằm trong thẻ main -> gọi tắt là component body */}
      {/* mỗi section là 1 component riêng không phải viết trực tiếp giống vậy */}
      <section className={styles["banner"]}>
        <div className={styles["banner-left"]}>
          <h1 className={styles["banner__title"]}>
            Want anything to be easy with <b>LaslesVPN.</b>
          </h1>
          <p className={styles["banner__des"]}>
            Provide a network for all you needs with ease and fun using{" "}
            <b>LaslesVPN</b> discover interesting features from us.
          </p>
          <ButtonComponent
            text="get started"
            classProps={{
              backgroundColor: "red",
              textTransform: "capitalize",
              color: "white",
              fontWeight: "600",
              borderRadius: "0.5rem",
              width: "10rem",
              height: "2.5rem",
            }}
          />
        </div>
        <span className="banner__img">
          <ImageComponent
            srcProps={BannerImage}
            altProps="Banner"
            classProps={{ width: "100%", height: "100%" }}
          />
        </span>
      </section>
      {/* ngoài header + footer những phần tử trên UI đều là 1 section và tất cả những section này đều nằm trong thẻ main -> gọi tắt là component body */}
      {/* mỗi section là 1 component riêng không phải viết trực tiếp giống vậy */}
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
};
export default Body;
