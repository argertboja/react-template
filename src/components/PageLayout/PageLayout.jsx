import React from 'react'
import InPageDrawer from "components/InPageDrawer"

const PageLayout = (props) => {

  return (
    <React.Fragment>
      <InPageDrawer>
        {props.children}
      </InPageDrawer>
    </React.Fragment>
  );
}

export default PageLayout;
