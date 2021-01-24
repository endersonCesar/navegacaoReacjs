import React from "react";
import './Content.css';
import {Switch,Route  } from "react-router-dom";
import About from '../../views/exemple/About';
import Home from '../../views/exemple/Home';
import Param from '../../views/exemple/Param';
import NotFound from "../../views/exemple/NotFound";
function Content() {
    return (
        <main className="Content">
        <Switch>
       
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
           
            <Route  path="*">
                <NotFound />
            </Route>
          
        </Switch>
        </main>
    );

}
export default Content