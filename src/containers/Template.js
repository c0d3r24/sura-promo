import React ,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
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
                <header>
                    <h1>Sura</h1>
                    <RaisedButton
                    label={'Tap this button'}
                    onTouchTap={() => {console.log('Hello, I workd')}}/>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
            </MuiThemeProvider>
            
        );
    }
}

export default Template;