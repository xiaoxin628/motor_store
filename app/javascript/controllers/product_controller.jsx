import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Clock from "../components/ProductList"

// Connects to data-controller="product"
export default class extends Controller {
  connect() {
     const root = ReactDOM.createRoot(document.getElementById("app"))
     root.render(
      <Clock/> 
     )
  }
}
