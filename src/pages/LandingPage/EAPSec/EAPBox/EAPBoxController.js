// @flow
import React from "react";
import PropTypes from "prop-types";

import EAPBoxView from "./EAPBoxView";

export default class EAPBoxController extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.any,
  };

  static defaultProps = {
    link: null,
  };

  render() {
    return <EAPBoxView {...this.props} />;
  }
}
