import React, { Component } from 'react';
import { connect } from 'react-redux';

class TweetList extends Component {
  renderList(){
    return this.props.tweets.map((tweet) => {
      return (
        <li className="list-group-item">{tweet.body} </li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

export default connect(mapStateToProps)(TweetList)