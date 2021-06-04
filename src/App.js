import "./styles.css";
import { useState, useRef } from "react";
import requestHttp from "./Tools/httpRequester.js";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ContentsListPage from "./Components/ContentsListPage.js";

export default function App() {
  const [httpRequestData, setHttpRequestData] = useState(null);

  let elementArray = useRef([]);
  let requestData = useRef(null);
  let requestAttempts = useRef(0);

  if (httpRequestData === null && requestAttempts.current === 0) {
    requestAttempts.current++;
    requestHttp(
      "https://www.trackcorona.live/api",
      async function requestCallback(response) {
        requestData.current = response;
        console.log("Response: " + response);
        /*
        response.data.forEach(item) => {
          if((typeof item) === "array") {
          elementArray.current.push(
            <Link to={"/" + item.location}>{item.location}</li>
          );
          routeArray.current.push(
            <Route path={"/" + item.location}></Route>
          );
          let pageComponent = 
          <
          <h1>{item.location}</h1>
          />
          componentArray.current.push(pageComponent);
        });
        */
        setHttpRequestData(elementArray);
      },
      true
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <h1>covid info</h1>
            <br />
            {elementArray.current}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
