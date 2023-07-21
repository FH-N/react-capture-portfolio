//import pages
import AboutUs from "./Pages/AboutUs";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./Pages/MovieDetail";
//Import styles
import GlobalStyle from "./components/GlobalStyle";
//Import Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
      <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
