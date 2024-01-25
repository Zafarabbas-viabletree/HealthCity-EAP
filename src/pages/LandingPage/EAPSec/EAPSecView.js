// @flow
import React from "react";
import { css } from "aphrodite";
import { Images, AppStyles } from "../../../theme";
import styles from "./EAPSecStyles";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";
import {
  faHands,
  faHandshake,
  faHSquare,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import EAPBox from "./EAPBox";

export default function EAPSecView(props) {
  return (
    <section
      id="eap"
      className={`pt-5 ${css([
        // styles.marginBottom,
        styles.EAPSec,
        // AppStyles.pxy_12,
      ])}`}
    >
      <div className={`container`}>
        <div className={`mb-5 ${css(styles.EAPHeading)}`}>
          About Employee Assistance Programme (EAP)
        </div>
        <div className={`row ${css(styles.eapBoxCont)}`}>
          <EAPBox
            title="What We Offer"
            icon={faHands}
            description="Qualified counsellors ready to give immediate practical advice and well-being support to your employees if they start to experience a difficult situation."
            link={ROUTES.WHAT_WE_OFFER}
          />
          <EAPBox
            title="Added Value"
            icon={faUserPlus}
            description="We are a fair pricing competitive provider of talking therapies (especially cognitive behavioural therapy, counselling, clinical psychology, EMDR (eye movement desensitisation reprocessing) and occupational rehabilitation and employee assistance programme."
            link={ROUTES.ADDED_VALUE}
          />
          <EAPBox
            title="Workplace Mental Health"
            icon={faHSquare}
            description="Take advantage of early intervention to prevent or reduce small issues at work or at home from evolving into big impacts on their performance or into sick absence and high production or service delivery costs."
            link={ROUTES.WORKPLACE_MENTAL_PLACE}
          />
        </div>
      </div>
    </section>
  );
}
