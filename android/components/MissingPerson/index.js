import React, { PureComponent } from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';


export default class MissingPerson extends PureComponent {

    state = {
        detailedData: []
    }

    async componentDidMount() {
        try {
            const { navigation } = this.props;
            fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=childDetail&caseNum=" + navigation.getParam('caseNumber') + "&orgPrefix=" + navigation.getParam('orgPrefix'))
            .then(function(response) {return response.json();})
            .then(function(myJson) {
                this.setState({detailedData: myJson.childBean});
            }.bind(this))
            console.log(detailedData);
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
        
    }

    render() {
        const { navigation } = this.props;
        /* fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=childDetail&caseNum=" + navigation.getParam('caseNumber') + "&orgPrefix=" + navigation.getParam('orgPrefix'))
            .then(function(response) {return response.json();})
            .then(function(myJson) {
                this.setState({detailedData: myJson.childBean});
            }.bind(this))

            console.log({detailedData}); */

        return (
            <View>
                <Text style={styles.personName}>{navigation.getParam('firstName')} {navigation.getParam('middleName')} {navigation.getParam('lastName')}</Text>
                <Text>{navigation.getParam('caseNumber')}</Text>
                <Text>Place Where {navigation.getParam('firstName')} Went Missing: {navigation.getParam('missingCounty')} {navigation.getParam('missingCity')} {navigation.getParam('missingCountry')}</Text>
                <Text>{navigation.getParam('firstName')} Went Missing On: {navigation.getParam('missingDate')}</Text>
            </View>
        );
    }
}
