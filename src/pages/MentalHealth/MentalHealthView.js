// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./MentalHealthStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES, CBT_WEBSITE } from "../../constants";
import { Helmet } from "react-helmet";

export default function MentalHealthView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Workplace Mental Health | Employee Assistance Programme | Healthcity
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Workplace Mental Health" />
      <div className={`container my-5`}>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          What is Workplace Mental Health?
        </h2>
        <p
          style={{ lineHeight: 1.47 }}
          className={`mb-4 ${css(AppStyles.pera18)}`}
        >
          It is use of psychological coping techniques to support staff and
          employers to:
        </p>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Reduce barrier to returning to work or to maintain attendance and
            improve performance at work.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Identify additional support in the workplace.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Reduce barriers against work stress.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Take advantage of early intervention to prevent or reduce small
            issues at work or at home from evolving into big impacts on their
            performance or into sick absence and high production or service
            delivery costs.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Improve employees’ psychological well-being so they can contribute
            to good business outcomes.
          </li>
        </ul>

        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Mental Health Conditions in the Workplace:
        </h2>

        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            1 in 4 people in the UK will experience a mental health problem
            (Source: Mental Health Foundation).
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Estimated £70 billion annual lost due to workplace mental health
            issues (Source: OECD research).
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Common mental health disorders in the workplace as identified in the
            UK NICE Guidelines and are likely to respond to one of the faces to
            face or online therapies above (example, cognitive behavioural
            therapy).
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Emotional crisis, anxiety, depression, post-traumatic stress
            disorder etc.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Long-term or chronic physical health conditions such as traumatic or
            stressful experience of being diagnosed, surviving or living with
            cancer, Fatigue, fibromyalgia, diabetes etc.
          </li>
        </ul>
      </div>
      <WebFooter />
    </div>
  );
}
