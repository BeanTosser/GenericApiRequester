import { Link, Route } from "react-router";
import ContentsListPage from "./Components/ContentsListPage.js";

export default function getContentsListElement(
  key,
  value,
  ContentsListPageArray
) {
  if (typeof value !== "object") {
    // This is an endpoint. Return a list item with the simple
    // text of the key and the value
    return <li>{key + ": " + value}</li>;
  } else {
    let renderableList = [];
    if (Array.isArray(value)) {
      renderableList = value.map((element) =>
        getContentsListElement(null, element)
      );
    }
    return <div>{renderableList}</div>;
  }
}
