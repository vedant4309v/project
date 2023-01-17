import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from "axios"
export default class MeteorScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      meteors:{}
    }
  }
  getmeteors=()=>{
    axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?%20&api_key=rE2e1LFdnGWQo8uyUquf1mAIPyDmb1uEbuuOfZa2")
            .then(response => {
                this.setState({ meteors: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
  }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}