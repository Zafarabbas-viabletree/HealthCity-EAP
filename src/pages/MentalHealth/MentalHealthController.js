// @flow
import React from "react";

import MentalHealthView from "./MentalHealthView";

export default class MentalHealthController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <MentalHealthView {...this.props} />;
  }
}
