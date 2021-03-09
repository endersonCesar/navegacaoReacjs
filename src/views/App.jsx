import React, { useState } from 'react'
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import DataContext, { data } from '../data/DataContext'
import Store from '../data/Store'
function App() {
    const [state, setState] = useState(data);
    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>

    );

}
export default App