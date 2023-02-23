import React, { Component } from "react";

const UpdatedComp = OriginalComp => {
    class NewComp extends Component {
        render() {
            return <OriginalComp name="The User" />
        }
    }
    return NewComp;
}
export default UpdatedComp