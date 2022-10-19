import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Home from "features/pages/Home";
import Detail from "features/pages/Detail";
import Login from "features/pages/Login";
import Profile from "features/pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/detail/:id" component={Detail}  />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
