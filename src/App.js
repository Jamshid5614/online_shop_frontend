import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalContext from "./context/GlobalContext";
import { useState } from "react";

import Home from "./containers/Home";
import CreateNewProductPage from "./containers/CreateNewProductPage";
import ViewPage from "./containers/ViewPage";
import getByCategoryPage from "./containers/getByCategoryPage";
import DeliveryPage from "./containers/DeliveryPage";
import SupportPage from "./containers/SupportPage";
import ProfilePage from "./containers/ProfilePage";
import PaymentPage from "./containers/PaymentPage";
import AllCategoriesPage from "./containers/AllCategoriesPage";
import ErrorPage from './containers/ErrorPage';

function App() {
  const {user} = useSelector(state => state);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeIsModalVisible = (buulin) => {
    setIsModalVisible(buulin);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path={["/", "/home"]} exact component={Home} />
          <Route path="/products/new" exact render={() => (user.isAdmin ? <CreateNewProductPage /> : <ErrorPage errorMsg="you do not have the right to create a new product" />)} />
          <Route path="/products/view/:id" exact component={ViewPage} />
          <Route
            path="/categories/:section"
            exact
            component={getByCategoryPage}
          />
          <Route path="/delivery" component={DeliveryPage} exact />
          <Route path="/support" component={SupportPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/payment" component={PaymentPage} exact />
          <Route path="/categories/all" component={AllCategoriesPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
