import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
