import React, { Component } from "react";
import random from "lodash.random";
import Columns from "react-columns";
import styles from "./styles.css";
import MagCard2 from "./MagCard2";
const dimensions = [
  {
    width: 800,
    height: 700,
    title: "C#",
    pic: "assets/img/mc4.svg",
    text: " یک زبان برنامه نویسی چند مدلی است که شامل دستوری ، تابعی، عمومی، شیء گرا و جزء گرا است . این زبان توسط شرکت مایکروسافت و از دل فریم ورک .NET مایکروسافت خلق و پرورش یافت و بعد ها توانست استاندارد های ISO و Ecma را دریافت کند و به‌عنوان یک زبان استاندارد تایید شود.",
  },
  {
    width: 800,
    height: 600,
    title: "ASP.NET",
    pic: "assets/img/mc8.svg",
    text: "فریمورک ASP.NET همانند فریم ورک های PHP و زبان پایتون یک زبان اسکریپت‌نویسی مربوط به شرکت مایکروسافت است (جهت اطلاع از این که php چیست و پایتون چیست اینجا کلیک نمایید.) و با هدف افزودن ویژگی‌های خاص به پلتفرم .NET ایجاد شده و شامل ابزارها و کتابخانه‌هایی است که به طور خاص برای ساخت سایت و برنامه‌های وب سرور، طراحی وب سایت، طراحی پورتال سازمانی، ساخت فروشگاه اینترنتی و … ایجاد شده و به توسعه‌دهندگان امکان ایجاد وب سایت‌های تعاملی و طراحی سایت ریسپانسیو را میدهد. ",
  },
  {
    width: 800,
    height: 800,
    title: "Microsoft SQL Server",
    pic: "assets/img/mc9.svg",
    text: "یک بانک اطلاعاتی از نوع دیتابیس‌های رابطه‌ای یا Relational Database است که توسط کمپانی Microsoft ارایه شده، و وظیفه اصلی آن ذخیره و بازیابی اطلاعات براساس درخواست نرم‌افزارهای دیگر می‌باشد.",
  },
  {
    width: 800,
    height: 600,
    title: "Bosque",
    pic: "assets/img/mc10.svg",
    text: "Bosque یک زبان برنامه نویسی رایگان و منبع باز است که توسط مایکروسافت طراحی و توسعه یافته است که از TypeScript و ML و Node/JavaScript الهام گرفته شده است.",
  },
  // {
  //   width: 800,
  //   height: 400,
  //   title: "What is Vue.js?",
  //   pic: "assets/img/mc5.svg",
  //   text: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
  // },
  // {
  //   width: 800,
  //   height: 400,
  //   title: "What is Next.js?",
  //   pic: "assets/img/mc6.svg",
  //   text: "As a digital design and build agency, we have been using Node.js since its very inception. Having identified it as a game changer for us, it has been pivotal in allowing us to deliver highly scalable, data intensive, real time back-end services to power the websites and apps for many of our clients including The Times, Riot Games, The Wall Street Journal and many more. A laser-like focus on speed and performance has always been a guiding star for us. When React JS came along, it was a perfect fit since we were naturally using JavaScript on the front and back-end of our clients’ applications. So as React JS has developed and become almost de facto for building website front-ends, our heads were turned by the benefits of Next.js. ",
  // },
  // {
  //   width: 800,
  //   height: 450,
  //   title: "What is HTML?",
  //   pic: "assets/img/mc7.svg",
  //   text: "HTML stands for Hyper Text Markup Language - HTML is the standard markup language for creating Web pages - HTML describes the structure of a Web page - HTML consists of a series of elements - HTML elements tell the browser how to display the content",
  // },
  // {
  //   width: 800,
  //   height: 400,
  //   title: "What is ASP.NET?",
  //   pic: "assets/img/mc8.svg",
  //   text: "ASP.NET is an open source web framework, created by Microsoft, for building modern web apps and services with .NET. .NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. The base platform provides components that apply to all different types of apps. Additional frameworks, such as ASP.NET, extend .NET with components for building specific types of apps.",
  // },
];

class ColomnA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 4,
    };
    this.onColumnsButtonClick = this.onColumnsButtonClick.bind(this);
  }

  onColumnsButtonClick() {
    this.setState({ columns: random(1, 4) });
  }

  renderItems() {
    return dimensions.map(({ width, height, title, text, pic }, i) => (
      <div
        key={i}
        className={styles.demoItem}
        minwidth={"500px"}
        style={{
          paddingTop: (height / width) * 100 + "%",
          minwidth: "500px",
        }}
      >
        <MagCard2 {...{ title, text, pic }} />
      </div>
    ));
  }

  render() {
    const { columns } = this.state;
    const queries = [
      {
        columns: 2,
        query: "min-width: 500px",
      },
      {
        columns: 3,
        query: "min-width: 1000px",
      },
      {
        columns: 4,
        query: "min-width: 1500px",
      },
    ];
    return (
      <div style={{ background: "#ffffff" }}>
        <Columns gap="2px" columns={columns} queries={queries} >
          {this.renderItems()}
        </Columns>
      </div>
    );
  }
}
export default ColomnA;
