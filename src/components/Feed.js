import React, { Component } from "react";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            data: [
                {
                    title: "Setting realistic goals",
                    ingress: "The key of getting out of a slump",
                    bread: [
                        "It is important to set goals in order to feel that you make progress, and in order to not reach for more than you can grab. The sweet spot is setting small realistic goals that keep you engaged and learning while also not trumping your productivity, by being overbearing.",
                    ],
                },
            ],
        };
    }
    render() {
        const { data } = this.state;
        console.log("data :>> ", data);
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
