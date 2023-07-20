//import pages
import AboutUs from "./Pages/AboutUs";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./Pages/MovieDetail";
//Import styles
import GlobalStyle from "./components/GlobalStyle";
//Import Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />;
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
