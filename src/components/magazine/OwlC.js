import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel.min.js";
import OwlCard from "./Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  myItem: {
    display: "flex",
    justifyContent: "center",
    spacing: 2,
    margin: 2,
  },
  myOwl: {
    spacing: 2,
  },
});

const OwlC = () => {
  const classes = useStyles();
  const owlresp = {
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  };
  const dataR = [
    {
      pic: "assets/img/m1.svg",
      title: "JavaScript",
      explain:
        "جاوا اسکریپت یک زبان محبوب مبتنی بر شی، داینامیک و مفسری است. این زبان برای برنامه نویسی سمت سرور و سمت کاربر استفاده می‌شود.",
    },
    {
      pic: "assets/img/m2.svg",
      title: "React js",
      explain:
        "فریمورک ری اکت جی اس (ReactJS Framework) یک کتابخانه متن باز (Open Source) براساس جاوا اسکریپت است که برای ایجاد ظاهر یا رابط کاربری وب اپلیکیشن ها بخصوص اپلیکیشن های تک صفحه ای مورد استفاده قرار می‌گیرد",
    },
    {
      pic: "assets/img/m3.svg",
      title: "Node.js",
      explain:
        "Node.js یک پلتفرم سمت سرور مبتنی بر موتور جاوا اسکریپت گوگل کروم (V8 Engine) می‌باشد",
    },
    {
      pic: "assets/img/m4.svg",
      title: "MongoDB",
      explain:
        "مونگو دیبی (Mongo DB) یکی از معروف‌ترین پایگاه داده‌های No SQL است که ساختار منعطفی دارد و بیشتر در پروژه هایی با حجم بالای داده استفاده می‌شود",
    },
  ];
  return (
    <div
    dir="ltr"
      style={{ background: "#ffffff" }}
      container
      className={classes.root}
      spacing={2}
    >
      <OwlCarousel
        className={`owl-theme ${classes.myOwl}`}
        loop
        nav
        autoplay="true"
        autoplayTimeout="3000"
        autoplayHoverPause="false"
        items={4}
        responsiveClass="true"
        responsive={owlresp.responsive}
      >
        {dataR.map((data) => (
          <div key={data.title} className={`item ${classes.myItem}`}>
            <OwlCard {...data} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default OwlC;
