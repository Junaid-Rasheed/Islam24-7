import Home from "./page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import LoginMain from "./page/LoginMain";
import Services from "./page/Services";
import Quran from "./page/Quran/Quran";
import Tafseer from "./page/Quran/Tafseer";
import Feedback from "./page/Feedback";
import Hadees from "./page/Hadees";
// import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact>
            <LoginMain />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
          <Route path="/Services" exact>
            <Services />
          </Route>
          <Route path="/Quran" exact>
            <Quran />
          </Route>
          <Route path="/Tafseer" exact>
            <Tafseer />
          </Route>
          <Route path="/Feedback" exact>
            <Feedback />
          </Route>
          <Route path="/Hadees" exact>
            <Hadees />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
