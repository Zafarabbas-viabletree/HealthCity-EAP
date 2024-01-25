// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./EAPBoxStyles";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EAPBoxView(props) {
  const { title, icon, description, link } = props;
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 my-3 ${css(styles.eapBoxCont)}`}
    >
      {!_.isNull(link) && (
        <NavLink to={link}>
          <div className={`${css(styles.eapBox)}`}>
            <FontAwesomeIcon icon={icon} className={css(styles.eapIcon)} />
            <h2 className={css(styles.eapTitle)}>{title}</h2>
            <p className={css(styles.eapDesc)}>{description}</p>
          </div>
        </NavLink>
      )}
    </div>
  );
}
