import React from "react";
import { ReactDOM } from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

// Components required
import {Sider} from "./components/Header";
import {Project} from "./components/Project";
import {Footer} from "./components/Footer";

// different pages
import {AboutMe} from "./components/AboutMe";
import {Resume} from "./components/Resume";
import {Contact} from "./components/Contact";
import {ProjectList} from "./components/ProjectList";

function App(){
    return(
    <Router>

      <div> 

        <Sider/>

        <Route path={["/","/about"]}>
          <AboutMe/>
        </Route>

        <Route path={"/projects"}>
          <ProjectList/>
        </Route>

        <Route path={"/resume"}>
          <Resume/>
        </Route>

        <Route path={"/contact"}>
          <Contact/>
        </Route>

      

        <Footer/>

      </div>

    </Router>
    );
}




export default App;