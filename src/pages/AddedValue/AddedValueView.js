// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./AddedValueStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";

export default function AddedValueView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Added Value To Your Organisations And Individuals | Employee
          Assistance Programme
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Added Value" />
      <div className={`container my-5`}>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Regular Reporting and Fixed, Fair and Competitive Pricing:
        </h2>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            We are a fair pricing competitive provider of talking therapies
            (especially cognitive behavioural therapy, counselling, clinical
            psychology, EMDR (eye movement desensitisation reprocessing) and
            occupational rehabilitation and employee assistance programme.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            We offer  regular reporting and fixed, fair and competitive pricing
            (e.g. £100 for one CBT session). The fee includes emailing you and
            the employer regular Clinical Feedback or Update Form to help
            monitor the recovery progress of the patient Returning to Work or
            Maintaining Attendance and Performance at Work or their additional
            support in the workplace. The monitoring Form also outlines the
            progress on mood questionnaires and risks and prognosis.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            If the patient has not already been assessed by your Psychological
            Therapists or Counsellors, then we can offer you a fixed assessment
            fee of £150 that includes a report with prognosis and
            recommendations.
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
          Strong Treatment Outcomes:
        </h2>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Re-admission/re-referral rate for appropriate referrals received: 1
            to 2%.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            90 to 95% of our clients in the UK national health service and in
            private practice reported good recovery on mood questionnaires.
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
          Awards and Recognitions:{" "}
          <span
            className={`mb-2 ${css(AppStyles.font16Size, AppStyles.weight4)}`}
          >
            Some of our clinicians were part of the awards and recognitions
            below:
          </span>
        </h2>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Best Service Award, Ealing IAPT, West London National Health Service
            Trust, UK.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            Best Performance Service’ national award, New Direction-CRI/Sussex
            National Health Service Trust, UK.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            ‘Most Improved Service’ national award, New Direction-CRI/Sussex
            National Health Service Trust, UK.
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            ‘Clinical governance award in clinical innovation category’. SLaM
            National Health Service Trust, UK.
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
          Our Therapists:
        </h2>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            We have a strong performing therapy team. Our therapists involved
            delivering EAP and occupational rehabilitation are accredited by
            professional bodies.{" "}
            <NavLink className={`${css(AppStyles.weight7)}`} to={ROUTES.TEAM}>
              Read More
            </NavLink>
          </li>
          <li style={{ lineHeight: 1.4 }} className={`mb-3`}>
            <span className={`${css(AppStyles.weight7)}`}>Our clinicians</span>
             have undergone a rigorous recruitment process that involved two
            interviews by two independent professionals to select accredited
            specialists in their fields. Most of our clinicians are past or
            current practitioners in the UK and other countries’ national health
            services and are also working in private therapy services. They have
            full-enhanced security clearance (e.g. DBS in the UK) and also
            Professional indemnity and public liability insurance.
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
          Next Step:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          We hope that you will register our organisation with yours to help us
          deliver psychological support to your members. We look forth to a
          fruitful partnership where we support your organisation and your
          individual staff members to reduce any barrier to returning to work or
          maintaining attendance and performance in the workplace or to identify
          additional support in the workplace.To discuss mental health support
          for your employees, do{" "}
          <NavLink className={`${css(AppStyles.weight7)}`} to={ROUTES.CONTACT}>
            contact us.
          </NavLink>{" "}
        </p>
      </div>
      <WebFooter />
    </div>
  );
}
