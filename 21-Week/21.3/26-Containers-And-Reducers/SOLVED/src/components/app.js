import React, { Component } from 'react';

import TweetList from "../containers/tweet-list";

export default class App extends Component {
  render() {
    return (
      <div>
        <TweetList />
      </div>
    );
  }
}
