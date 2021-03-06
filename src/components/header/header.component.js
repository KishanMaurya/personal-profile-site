import React from "react";
import Button from "../button/button.component";

import "./header.styles.scss"

const Header = () => {
  //creating an  array containing the floating shapes
  const shapes = [];
  for (var i = 1; i <= 50; i++) {
    shapes.push(i)
  }

  return (
    <div className="shape">
      {
        shapes.map(shape => {
          return (
            <div className={`shape-container--${shape} shape-animation`}>
            <div aria-hidden="true" class="random-shape"></div></div>
          )
        })
      }
      <div className="header">

        <div className="header__left">
          <div className="header__title">
            <h1>Hi, I’m Mansi Agarawal</h1>
          </div>
          <div className="header__subtitle">
            <h2>Software Developer (Java + Angular)</h2>
          </div>
          <div className="header__description">
            <p>
              Bitwise Solutions Pvt. Ltd. is a global IT service provider in Data warehouse, business intelligence, .Net,
              Java and has offices in USA, Australia and India. It consults and delivers solutions in the domain such as
              Banking, Credit cards, financial services, Insurance, Healthcare and Media.
          </p>
          </div>

          <a href="#projects" className="m-bottom"><Button>See Sample Projects</Button></a>

        </div>

        <div className="header__right">
          <div className="header__image">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-6c4ce.appspot.com/o/img%2FWhatsApp%20Image%202020-07-03%20at%207.45.05%20PM.jpeg?alt=media&token=4c13c360-09d5-46be-ae0f-873db07cbb82"
              alt="headshot of Mansi Agarawal">
            </img>
            <div className="header__image__overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;