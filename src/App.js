import React, { useState, useEffect } from "react";
import axios from "axios";

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
import Posts from "./components/UI/Post";
import Pagination from "./components/UI/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerpage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log("indexOfLastPost " + indexOfLastPost);
  console.log("indexOfFirstPost " + indexOfFirstPost);
  console.log(currentPosts);
  console.log(posts);

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

      <div className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerpage={postsPerPage} totalPosts={posts.length} />
      </div>
    </div>
  );
}

export default App;
