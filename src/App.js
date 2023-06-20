import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
//
import Main from "./layout/Main";
//
import Notice from "./component/Notice";
import Subject from "./component/Subject";
import FreeBoard from "./component/FreeBoard";
import JobNotices from "./component/JobNotice";
import WriteBoard from "./component/WriteBoard";

import Login from "./component/Login";
import Join from "./component/Join";

import ModalPortal from "./ModalPortal";
class App extends Component {
  state = {
    modal: false,
  };
  handleOpenModal = () => {
    this.setState({
      modal: true,
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false,
    });
  };
  render() {
    return (
      <>
        <Header onOpen={this.handleOpenModal} />
        {this.state.modal && (
          <ModalPortal>
            <Login onClose={this.handleCloseModal} />
          </ModalPortal>
        )}
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="notice" element={<Notice />} />
            <Route path="subject" element={<Subject />} />
            <Route path="freeboard" element={<FreeBoard />} />
            <Route path="jobnotice" element={<JobNotices />} />
            <Route path="writeboard" element={<WriteBoard />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}
export default App;
