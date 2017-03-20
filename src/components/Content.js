import React, { Component } from 'react';

import ActivityItem from './ActivityItem';
import Clock from './Clock';


import { teal50} from 'material-ui/styles/colors';

const contentStyle = {
    backgroundColor: teal50
}


class Content extends Component {
    render() {
        const {activities} = this.props; // ES6 destructuring
        const activityList =  activities.map((activity,index) => <ActivityItem activity={activity} key={index} />)
        console.log(activityList);
        return (
            <div className="content" style={contentStyle}>
                <div className="line"></div>
                {activityList}
                <Clock />
            </div>
        );
    }
}

export default Content;