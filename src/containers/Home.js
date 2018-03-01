import React ,{ Component } from 'react';
import {SiteHeading} from '../styled/Home'
class Home extends Component {
    render(){
        return(
              <SiteHeading welcomeText="Welcome to" productName="Sura" >    
              </SiteHeading>
        );
    }
}

export default Home;