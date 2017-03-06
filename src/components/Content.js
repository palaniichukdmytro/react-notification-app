import React, { Component } from 'react';


import {teal400, teal50, blueGrey400} from 'material-ui/styles/colors';

const contentStyle = {
    backgroundColor: teal50
}

class Content extends Component {
    render() {
        return (
            <div className="content" style={contentStyle}>
                <div className="line"></div>

                {/* Timeline item */}
                    <div className="item">
                        <div className="avatar">
                            <img src="" />
                            Doug
                        </div>

                        <span className="time">
                            An hour ago
                        </span>
                        <p>Ate lunch</p>
                        <div className="commentCount">
                            2
                        </div>
                    </div>

                    {/* ... */}
      </div>
        );
    }
}

export default Content;