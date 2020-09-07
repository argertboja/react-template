import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import Page1 from "pages/Page1"
import Page2 from "pages/Page2"
import AppBar from "components/AppBar"
import GlobalDrawer from "components/GlobalDrawer"
import {Provider} from 'react-redux'
import store from 'redux/store'

function App() {
    return <Provider store={store}>
                <BrowserRouter>
                    <AppBar />
                    <GlobalDrawer >
                        <Route path="/" exact component={Page1}/>
                        <Route path="/empty" exact component={Page2}/>
                    </GlobalDrawer>
                </BrowserRouter>
            </Provider>
}

export default App;
