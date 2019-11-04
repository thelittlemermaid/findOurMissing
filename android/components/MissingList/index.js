import React, { PureComponent, Fragment } from 'react';
import { FlatList, Button, Text, ActivityIndicator, Linking } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import MissingCard from '../MissingCard';

export default class MissingList extends PureComponent { 
    state = {
        missingList: [],
        loading: true,
        recordCount: 0,
        city: "",
        state: "",
        country: ""
    }

    static navigationOptions = {
        title: 'List of Missing in Your Area'
    }
    
    async componentDidMount() {
        try {
            Geolocation.getCurrentPosition(info => {
                let latitude = info.coords.latitude;
                let longitude = info.coords.longitude
                fetch("https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "+" + longitude + "&key=71f40d4c38fe47f6bf568dd1d0ce8929")
                    .then(function(location) {return location.json();})
                    .then(function(locationJson) {
                        fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=publicSearch&searchLang=en_US&search=new&subjToSearch=child&missCity=" + locationJson.results[0].components.city + "&missState=" + locationJson.results[0].components.state_code + "&missCountry=" + locationJson.results[0].components.country_code.toUpperCase())
                            .then(function(response) {return response.json();})
                            .then(function(myJson){
                                if(myJson.totalPages > 1) {
                                    this.setState({recordCount: 10});
                                } else {
                                    this.setState({recordCount: myJson.totalRecords});
                                }
                                this.setState({missingList: myJson.persons, loading: false});
                        }.bind(this));
                    }.bind(this));
            });          
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    render() {
        const { missingList, loading } = this.state;
        const { navigation } = this.props;
        if(!loading) {
            return (
                <Fragment>
                    <FlatList 
                    data={missingList}
                    renderItem={(data) => <MissingCard {...data.item} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()} 
                    />
                    <Text style={styles.countText}>Showing the first {this.state.recordCount} case(s)</Text>
                    <Text style={styles.linkText}>To find more missing person cases from all over the world tap here:</Text>
                    <Button title="National Center for Missing & Exploited Children" onPress={ ()=>{ Linking.openURL('http://api.missingkids.org/home')}}></Button>
                </Fragment>
                );
        } else {
            return <ActivityIndicator />
        }
    }
}