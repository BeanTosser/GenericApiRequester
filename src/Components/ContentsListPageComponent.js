import { Link, Route } from "react-router-dom";
import ContentsListPageComponent from "./ContentsListPageComponent";

export default function ContentsListPageComponent(title, pageContents, routeNames) {
  let routes = routeNames.map(routeName =>
    <Route path = {routeName}
  )
  return(
    <div>
      <h1>{title}</h1>
      <br/>
      {pageContents}
      <br/>
      
    </div>
  );
}
