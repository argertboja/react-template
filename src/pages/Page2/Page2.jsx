import React from 'react'
import {Route} from 'react-router-dom';
import MapView from "views/MapView";
import EmptyView from "views/EmptyView";

class Page2 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={MapView} />
                <Route exact path="/empty" component={EmptyView} />
            </React.Fragment>
        )
    }
}

export default Page2