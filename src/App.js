import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import SignInAndSignPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignPage} />
      </Switch>
    </div>
  );
}

export default App;
