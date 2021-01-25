import React from "react";
import Page from "./page"

export default function App() {
  return <Page id={3} options={{params: {fields: {isDynamic: true}}}} count={3} data={{}} >I'm text from a component</Page>
}
