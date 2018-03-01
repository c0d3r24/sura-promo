import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import {NavToggleButton} from '../styled/NavDrawer';
import {AppBar} from 'material-ui/AppBar';

class NavDrawer extends Component{
    state= {
        open: false,
        width: 250
    }
    toggle = () => {
        this.setState((prevState, props) =>{
            return{
                open: !prevState.open
            }
        });
    }
    render(){
        return(
            <div>
               <NavToggleButton
                toggle={this.toggle}
                width={this.state.width}
                open={this.state.open}
                />
                <Drawer
                    width={this.state.width}
                    open={this.state.open}
                    openSecondary={true}
                >
                    {/* <div
                    style={
                        {height: '200px', width:'100%',
                    backgroundColor: '#292929',color:'white'}}
                    >LoginContainer</div> */}
                    {/* <AppBar title={'Categories'} /> */}
                    <Divider />
                    <Link to={'/cards'}>
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Cards'}
                        />
                    </Link>
                    <Link to={'/canvas'}>
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Canvas'}
                        />
                    </Link>
                    <Link to={'/prints'}>
                        <MenuItem onTouchTap={this.toggle}
                            primaryText={'Prints'}
                        />
                    </Link>
                    <Link to={'/photobooks'}>
                        <MenuItem onTouchTap={this.toggle}
                            primaryText={'Photo Books'}
                        />
                    </Link>
                    
                </Drawer>
            </div>
        )
    }
}

export default NavDrawer;