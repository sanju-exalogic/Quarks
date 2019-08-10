import React from "react";
import { Link } from "react-router-dom";
import Common from "../Common.js";
import $ from "jquery";
class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: []
    };
  }
  showGiph(gif) {
    var self = this;
    var api_key = this.props.apiKey;
    var limit = this.props.limit;
    var url =
      "http://api.giphy.com/v1/gifs/search?api_key=" +
      api_key +
      "&q=" +
      gif.target.value +
      "&limit=" +
      limit;
    $.ajax({
      url: url,
      datatype: "JSON",
      method: "GET",
      success: function(data) {
        self.setState({
          gif: data.data
        });
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  render() {
    var gify =
      this.state.gif.length > 0 &&
      this.state.gif.map((gi, index) => (
        <img
          src={gi["images"]["preview_webp"].url}
          alt="boohoo"
          height="248"
          width="248"
          className="img-responsive"
        />
      ));

    return (
      <div>
        <Common />
        <div>
          <input type="text" onChange={this.showGiph.bind(this)} />
          <div>{gify}</div>
        </div>
      </div>
    );
  }
}
export default Giphy;
Giphy.defaultProps = {
  apiKey: "b5K3JEzhIDbOJNL5nedvvan2ysyzN4Iw",
  limit: 5
};
