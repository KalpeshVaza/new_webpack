import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./auth_config.json";
import history from "./utils/history";
//webpack import contact test
import Contacts from './components/Contacts'

// import 'antd/dist/antd.css';
// import Cookies from "js-cookie";

// Cookies.set('user', 'loginTrue');


// const [auth,setAuth] = React.useState(false);
//   const readcooki = () => {
//     const user = Cookies.get("user");
//     if (user){
//       setAuth(true);
//     }
//   }
//   React.useEffect(() =>{
// readcooki();
//   },[])



const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

ReactDOM.render(
  // <Contacts />,
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    audience={config.audience}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
