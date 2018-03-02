import React ,{ Component } from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem } from 'material-ui/List';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import  ActionGrade from 'material-ui/svg-icons/action/grade';
import { cyan200 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
class Canvas extends Component {
    render(){
        return(
            <div>
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Canvas"/>}
                >
                    <img 
                    style={{
                        height: "300",
                        width: "300"
                    }}
                    src={require('./../images/canvasImage.jpg')} alt="Card" />
                </CardMedia>
                <CardTitle title="Canvas"
                />
                <List>
                    <Subheader>Chose from classic or luxe</Subheader>
                    <Divider />
                    <ListItem 
                        primaryText="8x10 Canvas"
                    />
                    <ListItem
                        primaryText="11x14 Canvas"
                    />
                    <ListItem 
                        primaryText="12x12"
                    />

                    <ListItem
                        primaryText="20x24 Canvas"
                    />

                    <ListItem
                        primaryText="20x30 Canvas"
                        rightIcon={<ActionGrade />}
                    />
                </List>
            </Card>
            <br />
            {/* <Card>
                <CardMedia
                    overlay={<CardTitle title="Canvas"/>}
                >
                    <img 
                    style={{
                        height: "300",
                        width: "300"
                    }}
                    src={require('./../images/cardImage.jpg')} alt="Card" />
                </CardMedia>
                <CardTitle title="Canvas"
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
            </Card> */}
            </div>
        );
    }
}

export default Canvas;