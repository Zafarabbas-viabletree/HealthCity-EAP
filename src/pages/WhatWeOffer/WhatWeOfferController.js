// @flow
import React from "react";

import WhatWeOfferView from "./WhatWeOfferView";

export default class WhatWeOfferController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <WhatWeOfferView {...this.props} />;
  }
}
