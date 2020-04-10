import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Pages/Landing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import FAQ from "./components/Pages/FAQ";
import News from "./components/Pages/News";
import Tyres from "./components/Pages/Tyres";
import Footer from "./components/Footer/Footer";
import { Card } from "react-bootstrap";

class App extends Component {
  state = {
    data: null,
    noteData: null,
    images: null,
  };

  componentDidMount() {
    // console.log(res)
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));

    this.callNote()
      .then((res) => this.setState({ noteData: res[0].prod_brand }))
      .catch((err) => console.log(err));

    this.callImages()
      .then((res) => this.setState({ images: res }))
      .catch((err) => console.log(err));
  }

  callImages = async () => {
    const response = await fetch("/images");
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  callNote = async () => {
    const response = await fetch("/prods");
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/news" component={News} />

          <Route exact path="/tyres" component={Tyres} />
        </Switch>
        <Footer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* // Render the newly fetched data inside of this.state.data  */}
        <h1>Express works?</h1>
        <p className="App-intro">{this.state.data}</p>
        <h1>Get Data from MongoDB?</h1>
        <p className="App-intro">{this.state.noteData}</p>
        <div>
          <form action="/upload" method="POST" encType="multipart/form-data">
            <div className="custom-file mb-3">
              <input
                type="file"
                name="file"
                id="file"
                className="custom-file-input"
              />
              <label for="title" class="custom-file-label">
                Choose File
              </label>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-block"
            />
          </form>
          <hr />
          <img src="/image/0248538faeeefd074838d74d23787c12.png" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
