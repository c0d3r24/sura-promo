import React ,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer';
import {Link} from 'react-router';
import {Header, Main} from '../styled/Template';

/**
 * injecting TapEvent here.
 * this will help to enhance mobile interaction.
*/
injectTapEventPlugin()
class Template extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <div>
                 <NavDrawer />
                 <Header>
                 <Link to={'/'} style={{
                     textDecoration: "none",
                     color: "#000"
                 }}>
                     <img alt="brand logo"
                     style={{
                         width: 40,
                         height: 40,
                         marginBottom: -2
                     }} src={require('./../images/suraLogo.png')} />ura
                 </Link>
                </Header> 
                <Main>
                    {this.props.children}
                </Main>
            </div>
            </MuiThemeProvider>
            
        );
    }
}

export default Template;