// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./WhatWeOfferStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import {
  ROUTES,
  CBT_WEBSITE,
  COUNSELLING_WEBSITE,
  CLINICAL_PSYCHOLOGY_WEBSITE,
  PSYCHOLOGY_ASSESSMENT_WEBSITE,
} from "../../constants";
import { Helmet } from "react-helmet";

export default function WhatWeOfferView(props) {
  return (
    <div>
      <Helmet>
        <title>
          What We Offer | Employee Assistance Programme | Healthcity
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="What We Offer" />
      <div className={`container my-5`}>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          What We Offer:
        </h2>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Cognitive behavioural therapy (CBT){" "}
            <a href={CBT_WEBSITE} target="_blank">
              (Read More)
            </a>
            .
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Counselling{" "}
            <a href={COUNSELLING_WEBSITE} target="_blank">
              (Read More)
            </a>
            .
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Clinical or Counselling psychology, EMDR etc.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Discounted psychological assessments{" "}
            <a href={PSYCHOLOGY_ASSESSMENT_WEBSITE} target="_blank">
              (Read More)
            </a>
            .
          </li>

          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            <span className={`${css(AppStyles.weight7)}`}>
              Unlimited telephone support:
            </span>{" "}
            Qualified counsellors ready to give immediate practical advice and
            well-being support to your employees if they start to experience a
            difficult situation.{" "}
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Self-paying employees receive a 10% reduction in the assessment and
            treatment fees.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Fast Track Appointments for your employees to start receiving help
            from our fee-approved clinicians.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Group Treatment Programmes.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Grievance Emotional Support for employees.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Emotional Support for Employment Tribunal Proceedings.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Emotional Support for Bullying and Harassment.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            <span className={`${css(AppStyles.weight7)}`}>
              Psychological consultation:
            </span>{" "}
            By qualified psychologists to offer an insight or a solution to a
            clinical or management issue.{" "}
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Training in psychological skills or cognitive behavioural therapy
            techniques for productivity and people skills.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Wellbeing and psychological resilience courses for employees.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            <span className={`${css(AppStyles.weight7)}`}>Online portal:</span>{" "}
            24/7 online access to self-help resources (fact sheets, articles,
            and videos).{" "}
            <NavLink to={ROUTES.RESOURCE_HUB_X}>(Read More)</NavLink>
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
           How It Works?
        </h2>

        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Your employee completes Online{" "}
            <NavLink to={ROUTES.BOOKING}> Booking Form </NavLink> or contacts us
            by phone (<a href="tel:03338003006">0333 800 3006</a>,{" "}
            <a href="tel:03337890012">0333 789 0012</a>
            ), email (
            <a href="mailto:info@healthcity.org.uk">info@healthcity.org.uk</a>)
            or is referred by a manager or Occupational Health.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            If your employee has a medical insurance, they can{" "}
            <NavLink
              className={`${css(AppStyles.weight7)}`}
              to={ROUTES.CONTACT}
            >
               contact us{" "}
            </NavLink>
             for fast tracked appointment.  They can avoid third party middlemen
            and delays. We will support individuals in dealing with their
            Insurer.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Within 12 hours of receiving the referral, we acknowledge the
            referral and arrange first appointment. We date you (if you are the
            referrer) with the agreed appointment date and time.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            The employee is initially assessed by one of our qualified
            counsellors and offered the most appropriate wellbeing pathway.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            We can offer help Online, phone, email or face to face.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            To discuss mental health support for your employees, do{" "}
            <NavLink
              className={`${css(AppStyles.weight7)}`}
              to={ROUTES.CONTACT}
            >
              contact us.
            </NavLink>
          </li>
        </ul>
      </div>
      <WebFooter />
    </div>
  );
}
