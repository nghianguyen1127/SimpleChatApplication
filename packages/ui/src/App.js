import React, { Fragment } from "react";
import Chat from "./components/pages/Chat/chat/chat";
import Process from "./components/pages/Chat/process/process.js";
import Home from "./components/pages/Chat/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { compileRouters } from "./router";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import Progress from "react-progress-2";
import { ToastContainer } from "react-toastify";

import "./App.scss";
import "./assets/css/less/index.less";
import initAxios from "./helpers/AxiosConfig";

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
  const history = useHistory();

  initAxios(history);

  return (
    <Fragment>
      <Progress.Component thumbStyle={{ background: "#B02F33" }} />
      <ToastContainer />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home socket={socket} />
            </Route>
            {renderRoutes(compileRouters)}
            <Route path="/chat/:roomname/:username" component={Appmain} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
