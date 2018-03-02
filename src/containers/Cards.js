import React ,{ Component } from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem } from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import  ActionGrade from 'material-ui/svg-icons/action/grade';
import { cyan200 } from 'material-ui/styles/colors';


class Cards extends Component {
    render(){
        return(
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Stationary Cards"/>}
                >
                    <img 
                    style={{
                        height: "400",
                        width: "800"
                    }}
                    src={require('./../images/cardImage.jpg')} alt="Card" />
                </CardMedia>
                <CardTitle title="Stationery Card Sets"
                    subtitle="5x7 premium cards, sold in sets of 20"
                />
                <List>
                    <Subheader>Chose from classic or luxe</Subheader>
                    <Divider />
                    <ListItem 
                        leftIcon={<ActionGrade color={cyan200}/>}
                        primaryText="Easter"
                    />
                    <ListItem
                     leftIcon={<ActionGrade color={cyan200}/>}
                        primaryText="Birthday"
                    />
                    <ListItem 
                    leftIcon={<ActionGrade color={cyan200}/>}
                        primaryText="Thank you"
                    />

                    <ListItem
                    leftIcon={<ActionGrade color={cyan200}/>}
                        primaryText="Baby"
                    />

                    <ListItem
                    leftIcon={<ActionGrade color={cyan200}/>}
                        primaryText="Wedding"
                    />
                </List>
            
            </Card>
        );
    }
}

export default Cards;