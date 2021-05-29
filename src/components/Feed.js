import React, { Component } from "react";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            data: [
                {
                    title: "Setting realistic goals",
                    ingress: "Om jag skriver en titel",
                    bread: ["så uppdateras det så fort jag trycker ctrl + s"],
                },
            ],
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {data.map((post, i) => {
                            return (
                                <div key={i}>
                                    <h3>{post.title}</h3>
                                    <label>{post.ingress}</label>
                                    {post.bread.map((p, j) => {
                                        return (
                                            <p style={{ maxWidth: "630px" }} key={j}>
                                                {p}
                                            </p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
