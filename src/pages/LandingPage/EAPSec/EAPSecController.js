// @flow
import React from "react";

import EAPSecView from "./EAPSecView";

export default class EAPSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <EAPSecView {...this.props} />;
  }
}
