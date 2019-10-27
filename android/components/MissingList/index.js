import React, { PureComponent, Fragment } from 'react';
import { FlatList, Button, Text, ActivityIndicator, Linking } from 'react-native';
import styles from './styles';
import MissingCard from '../MissingCard';

export default class MissingList extends PureComponent { 
    state = {
        missingList: [],
        loading: true,
    }

    static navigationOptions = {
        title: 'List of Missing in Your Area'
    }
    
    async componentDidMount() {
        try {
            city = "Hollywood"
            state = "CA"
            country = "US"
            fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=publicSearch&searchLang=en_US&search=new&subjToSearch=child&missCity=" + city + "&missState=" + state + "&missCountry=" + country)
                .then(function(response) {return response.json();})
                .then(function(myJson){
                    this.setState({missingList: myJson.persons, loading: false});
            }.bind(this));
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
                    <Text style={styles.linkText}>To find more missing person cases from all over the world tap here:</Text>
                    <Button title="National Center for Missing & Exploited Children" onPress={ ()=>{ Linking.openURL('http://api.missingkids.org/home')}}></Button>
                </Fragment>
                );
        } else {
            return <ActivityIndicator />
        }
    }
}