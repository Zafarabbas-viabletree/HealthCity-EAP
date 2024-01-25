// @flow
import React from "react";
import { css } from "aphrodite";
import { Images, AppStyles } from "../../../theme";
import styles from "./WeHelpSecStyles";
export default function WeHelpSecView(props) {
  return (
    <section
      id="cbt"
      className={`pt-5 ${css([
        // styles.marginBottom,
        styles.WeHelpSec,
        // AppStyles.pxy_12,
      ])}`}
    >
      <div className={`container `}>
        <div className={css(styles.CBTInnerCont)}>
          <div className={css(styles.CBTTextCont)}>
            <div className={css(styles.CBTHeading)}>
              {/* WE HELP TO PLAN AND SUPPORT STAFF TO */}
              We help to plan and support staff to:
            </div>

            <ul className={css(styles.listStyle)}>
              <li className={css(styles.exampleList)}>
                <span className={css(styles.exampleListSpan)}>
                  Reduce barrier to returning to work or to maintain attendance
                  and improve performance at work.
                </span>
              </li>
              <li className={css(styles.exampleList)}>
                <span className={css(styles.exampleListSpan)}>
                  Identify additional support in the workplace.
                </span>
              </li>

              <li className={css(styles.exampleList)}>
                <span className={css(styles.exampleListSpan)}>
                  Reduce barriers against work stress.
                </span>
              </li>

              <li className={css(styles.exampleList)}>
                <span className={css(styles.exampleListSpan)}>
                  Take advantage of early intervention to prevent or reduce
                  small issues at work or at home from evolving into big impacts
                  on their performance or into sick absence and high production
                  or service delivery costs.
                </span>
              </li>
            </ul>
          </div>

          <div className={css(styles.CBTInerContTwo)}>
            <img src={Images.help_section} className={css(styles.cbtImgOne)} />
          </div>
        </div>
      </div>
    </section>
  );
}
