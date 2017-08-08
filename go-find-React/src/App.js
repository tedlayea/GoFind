import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    }}
  postImageFunction(){
    axios.post(' https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/', {
    url: 'https://c21stores-weblinc.netdna-ssl.com/product_images/tee-dress/420/590b399f69702d086600013a/super_zoom.jpg?c=1493907871'
  })
  .then(function (body) {
    var response =  JSON.parse(body)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  test(){
    console.log("loww");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src= "https://d1qb2nb5cznatu.cloudfront.net/startups/i/883891-f3fbaebafd66003ae5d2b4703df5f9af-medium_jpg.jpg?buster=1489696663" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={this.postImageFunction}>
          <label> Image URL:
            <input type="text" name="url" value={this.state.url} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
