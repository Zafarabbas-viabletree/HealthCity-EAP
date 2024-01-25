// @flow
import React from "react";

import AddedValueView from "./AddedValueView";

export default class AddedValueController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <AddedValueView {...this.props} />;
  }
}
