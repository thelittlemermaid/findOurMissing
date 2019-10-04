import React, { PureComponent } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import MissingCard from '../MissingCard';

export default class MissingList extends PureComponent { 
    state = {
        missingList: [],
        loading: true
    }
    
    async componentDidMount() {
        try {
            city = "Hollywood"
            state = "CA"
            country = "US"
            let APICall = fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=publicSearch&searchLang=en_US&search=new&subjToSearch=child&missCity=" + city + "&missState=" + state + "&missCountry=" + country)
                .then(function(response) {return response.json();})
                .then(function(myJson){
                    this.setState({missingList: myJson.persons, loading: false});
            }.bind(this));
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    renderItem(data) {
        return <MissingCard {...data.item}/>
    }
    render() {
        const { missingList, loading } = this.state;
        if(!loading) {
            return <FlatList 
                    data={missingList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}