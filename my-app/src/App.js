import React from "react";
import "./App.css";

import {
  BrowserRouter as Switch,
  Route

} from "react-router-dom";

// Components required
import {Sider} from "./components/Header";
// import {Project} from "./components/Project";
import {Footer} from "./components/Footer";

// different pages
import {AboutMe} from "./components/AboutMe";
import { ProjectList } from "./components/ProjectList";
// import {Resume} from "./components/Resume";
// import {Contact} from "./components/Contact";


 function App(){
    return(
    // <Router>
      <Switch>
      <div className='container'> 
        <div className='navigation'>
        <Sider/>
        </div>

        <Route exact path={["/","/about"]}>
          <AboutMe/>
        </Route>

        <Route exact path={"/projectList"}>
          <div className="project">
          <ProjectList style={{alignContent: 'center'}}/>
          </div>
        </Route>
        
        

      

        <div className='footer'>
        <Footer/>
        </div>
        
      </div>
  </Switch>
    // </Router>
    );
}
export default App;



