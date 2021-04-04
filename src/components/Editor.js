import React, { Component } from "react";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="">
                            <h3>Input</h3>
                            <p>
                                <textarea></textarea>
                            </p>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;
