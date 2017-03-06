import React, { Component } from 'react';


import ActionViewList from 'material-ui/svg-icons/action/subject';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {teal400, teal50, blueGrey400, blueGrey800} from 'material-ui/styles/colors';

const headerStyle = {
    backgroundColor: teal400,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px calc(3% - 2px)'
}




class Headers extends Component {
    render() {
        return (
             <div className="header" style={headerStyle}>

                <ActionViewList 
                    hoverColor={blueGrey400} 
                    color={blueGrey800}
                />
                <h1 className="title">{this.props.title}</h1>
                <TextField  
                    type="text" 
                    hintText="Search ..."
                    underlineFocusStyle={{borderColor: blueGrey400}}
                />
                 <ActionSearch 
                    hoverColor={blueGrey400} 
                    color={blueGrey800}
                />
      </div>
            
        );
    }
}

export default Headers;