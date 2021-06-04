import { Route, Link } from "react-router-dom";

export default function ContentsListPage(props) {
  let elementArray = [];
  let routeArray = [];
  if(Array.isArray(props.value)){
    props.thing.foreach(item => {
      if(typeof item !== "object"){
        elementArray.push(<li>{props.key + ": " + props.value}</li>);
      } else {
        <Link to="/" + props.url + item.key>{item.key}</Link>
      }
    })
  } else {

  }
}
