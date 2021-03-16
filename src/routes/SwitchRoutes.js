import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../routes/Routes";

function SwitchRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map(({ name, path, exact, component }, idx) => (
          <Route path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default SwitchRoutes;
