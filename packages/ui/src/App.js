import React from "react";
import Chat from "./components/pages/Chat/chat/chat";
import Process from "./components/pages/Chat/process/process.js";
import Home from "./components/pages/Chat/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import "./App.scss";

const socket = io.connect("/");

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}

const App = () => {
  console.log("socket", socket);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
