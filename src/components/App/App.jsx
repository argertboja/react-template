import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import Page1 from "pages/Page1"
import Page2 from "pages/Page2"
import AppBar from "components/AppBar"
import GlobalDrawer from "components/GlobalDrawer"

function App() {
    return <BrowserRouter>
                <AppBar />
                <GlobalDrawer >
                    <Route path="/" exact component={Page1}/>
                    <Route path="/empty" exact component={Page2}/>
                </GlobalDrawer>
            </BrowserRouter>;
}

export default App;
