import React from "react";
import { connect } from "react-redux";
import {
  WebHeader,
  WebFooter,
  OurTeamSection,
  QuestionaireListing,
} from "../../components";
import CTABannerSec from "./CTABannerSec";
import EAPSec from "./EAPSec";
import WebHeroSec from "./WebHeroSec";
import TeamSec from "./TeamSec";
import TestimonialSec from "./TestimonialSec";
import QuestionaireSec from "./QuestionaireSec";
import WeHelpSec from "./WeHelpSec";
import BooksPDFSec from "./BooksPDFSec";
import { Helmet } from "react-helmet";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Employee Assistance Programme | Healthcity</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <WebHeader />
        <WebHeroSec />
        <EAPSec />
        <WeHelpSec />
        <QuestionaireSec />
        <TeamSec />
        <CTABannerSec />
        <TestimonialSec />
        <BooksPDFSec />
        <WebFooter />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(LandingPage);
