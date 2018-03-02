import React ,{ Component } from 'react';
import {SiteHeading} from '../styled/Home'
class Home extends Component {

    state = {
        flag : null,
    }
    componentDidMount(){
        this.setState({flag:true});
    }
    componentWillMount(){
        this.setState({flag:false});
    }

    render(){
        return(
              <SiteHeading welcomeText="Welcome to" productName="Sura" flag={this.state.flag} >    
              </SiteHeading>
        );
    }
}

export default Home;