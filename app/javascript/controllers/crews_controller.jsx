import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import CrewsPage from "../components/CrewsPage" 


// Connects to data-controller="product"
export default class extends Controller {
  connect() {
    console.log("Crews Controller connected")
    const root = ReactDOM.createRoot(document.getElementById("app"))
    const crews = JSON.parse(this.element.dataset.crews || "[]");
 
    root.render(
    <CrewsPage crews={crews}/>, this.reactRootTarget
    )
  }
    disconnect() {
    // Unmount the React component when the Stimulus controller disconnects
    ReactDOM.unmountComponentAtNode(this.reactRootTarget);
  }
}
