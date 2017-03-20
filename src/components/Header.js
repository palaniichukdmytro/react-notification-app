import React, { Component } from 'react';


import ActionViewList from 'material-ui/svg-icons/action/subject';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {teal400, blueGrey400, blueGrey800} from 'material-ui/styles/colors';

const headerStyle = {
    backgroundColor: teal400,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px calc(3% - 2px)',
    position: 'relative'
}

const searchBarStyle = {
    position : 'absolute',
    right: '40px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    transition: 'all .3s ease-in-out';
}


const iconStyle =  {
 width: '50px',
 height: '50px',
 cursor: 'pointer'
}





class Headers extends Component {
    render() {
        return (
             <div className="header" style={headerStyle}>

                <ActionViewList 
                    hoverColor={blueGrey400} 
                    color={blueGrey800}
                    style={iconStyle}
                />
                <h1 className="title">{this.props.title}</h1>
                <TextField  
                    type="text" 
                    hintText="Search ..."
                    underlineFocusStyle={{borderColor: blueGrey400}}
                    style={searchBarStyle}
                />
                 <ActionSearch 
                    hoverColor={blueGrey400} 
                    color={blueGrey800}
                    style={iconStyle}

                />
      </div>
            
        );
    }
}

export default Headers;