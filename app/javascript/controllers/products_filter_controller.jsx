import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ProductPage from "../components/ProductPage"

// Connects to data-controller="product"
export default class extends Controller {
  connect() {
     console.log("ProductFilterController connected")
    const root = ReactDOM.createRoot(document.getElementById("app"))
     const brands = JSON.parse(this.element.dataset.brands || "[]");
     root.render(
      <ProductPage brands={brands}/>, this.reactRootTarget
     )
  }
    disconnect() {
    // Unmount the React component when the Stimulus controller disconnects
    ReactDOM.unmountComponentAtNode(this.reactRootTarget);
  }
}
