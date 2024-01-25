// @flow
import React, { useRef } from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./WebHeroSecStyles";
import { Images, AppStyles, Colors } from "../../../theme";
import { HEADER_HEIGHT, ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";

export default function WebHeroSecView(props) {
  const scrollToFunction = () => {
    const elem = document.getElementById("eap");
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      });
    } else {
      window.location.href = `#eap`;
    }
  };
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={`${css(styles.heroContentCont)}`}>
          <div className={css(styles.cardHeading)}>
            Employee Assistance Programme
          </div>
          <div className={css(styles.cardHeading)}>
            Occupational Rehabilitation
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <NavLink to={ROUTES.BOOKING}>
              <Button className={css([styles.bookNowBtn])}>Book Now</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
