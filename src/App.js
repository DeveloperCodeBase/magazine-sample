// import BasicTree from "./CodeEditor/TreeBranch/FolderTree";
import "./styles.css";
// import SideBar from "./CodeEditor/SideBar";
import Magazine from "./components/magazine/index";
import ThemeProvider from "./Material/PrimaryColor";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/6092b28a8fda4729541cf5a5/">
      <Switch>
        <Route path="/" component={Magazine} exact />
      </Switch>
    </BrowserRouter>
  );
}
