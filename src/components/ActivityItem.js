import React, { Component } from 'react';

import ActionFace from 'material-ui/svg-icons/action/face';

import {teal400, blueGrey800} from 'material-ui/styles/colors';

const iconAvatarStyle =  {
 width: '50px',
 height: '50px',
 cursor: 'pointer'
}
const item = {
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'space-between'
}
const commentsStyle = {
marginRight: 'auto'
}

class ActivityItem extends Component {
    render() {
        const {activity} = this.props;
        return (
           <div style={item}>
                <div className="avatar">
                    <ActionFace
                        hoverColor={teal400}
                        color={blueGrey800}
                        style={iconAvatarStyle}
                    />
                    <p>{activity.user.name}</p>
                </div>

                
                <div style={commentsStyle}>
                    <p>
                        {activity.timestamp}
                    </p>
                    <p>{activity.text}</p>
                </div>
                <div className="commentCount">
                    {activity.comments.length}
                </div>
            </div>
        );
    }
}

export default ActivityItem;