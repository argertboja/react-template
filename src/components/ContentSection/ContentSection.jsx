import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Route} from "react-router-dom";

import Page1 from "pages/Page1";
import Page2 from "pages/Page2";

const useStyles = makeStyles(() => ({
    paperStyles: {
        "min-height": "100vh",
        overflow: "hidden",
    },
}));

function ContentSection() {
    const classes = useStyles();

    return (
        <Paper className={classes.paperStyles}>
            <Route path="/" exact component={Page1}/>
            <Route path="/empty" exact component={Page2}/>
        </Paper>
    );
}

export default ContentSection;
