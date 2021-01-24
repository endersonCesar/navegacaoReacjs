import React from "react";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <Menu></Menu>
                <Content></Content>
            </Router>

        </div>
    );

}
export default App