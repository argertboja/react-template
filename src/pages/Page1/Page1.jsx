import React from 'react'
import {Route} from 'react-router-dom';
import MapView from "views/MapView";
import EmptyView from "views/EmptyView";

class Page1 extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={MapView } />
                <Route exact path="/empty" component={EmptyView } />
            </React.Fragment>
        )
    }
}

export default Page1