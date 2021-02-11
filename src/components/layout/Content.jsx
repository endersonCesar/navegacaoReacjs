import React from "react";
import './Content.css';
import {Switch,Route  } from "react-router-dom";
import About from '../../views/exemple/About';
import Home from '../../views/exemple/Home';
import Param from '../../views/exemple/Param';
import NotFound from "../../views/exemple/NotFound";
import  HookUseRef from "../../views/exemple/useRef";
import  HookUseMemo from "../../views/exemple/useMemo";
import  HookUseCallback from "../../views/exemple/useCallback";
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

            <Route path="/useRef">
                <HookUseRef />
            </Route>

            <Route path="/useMemo">
                < HookUseMemo/>
            </Route>

            <Route path="/useCallback">
                < HookUseCallback/>
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