import { Link, Route } from "react-router";

export default function (props) {
  let toRender = null;
  if (typeof props.infoObject === "object") {
    let links = [];
    let renderableArray = [];
    for (const [key, value] of Object.entries(props.infoObject)) {
      links.push(<Link> to={"/" + key}</Link>);
    }
  }
}
