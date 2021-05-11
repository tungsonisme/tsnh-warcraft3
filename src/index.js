import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import { PageStoreProvider } from "./mobx/page/context"
import { AudioProvider } from "./contexts/AudioContext"

const renderReactApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <AudioProvider>
        <PageStoreProvider>
          <App />
        </PageStoreProvider>
      </AudioProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
}

if (process.env.NODE_ENV === "production") {
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register({
    onReady: renderReactApp,
  })
} else {
  renderReactApp()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
