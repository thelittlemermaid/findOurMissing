import React, { PureComponent } from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';


export default class MissingPerson extends PureComponent {

    state = {
        detailedData: [],
        heightMetric: "",
        weightMetric: "",
        determinedAge: 0
    }

    async componentDidMount() {
        try {
            const { navigation } = this.props;
            fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=childDetail&caseNum=" + navigation.getParam('caseNumber') + "&orgPrefix=" + navigation.getParam('orgPrefix'))
            .then(function(response) {return response.json();})
            .then(function(myJson) {
                this.setState({detailedData: myJson.childBean});
                this.determineMetrics();
            }.bind(this));
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
        
    }

    determineMetrics() {
        const { detailedData } = this.state;

        if(detailedData.heightInInch) {
            this.setState({heightMetric: " inches"});
        } else {
            this.setState({heightMetric: " mm"});
        }

        if(detailedData.weightInPound) {
            this.setState({weightMetric: " pounds"});
        } else {        
            this.setState({weightMetric: " kilograms"});
        }

        if(detailedData.age == -1) {
            this.setState({determinedAge: detailedData.approxAge});
        } else {
            this.setState({determinedAge: detailedData.age});
        }
    }

    render() {
        const { navigation } = this.props;
        const { detailedData, heightMetric, weightMetric, determinedAge } = this.state;

        return (
            <ScrollView>
                <Text style={styles.personName}>{navigation.getParam('firstName')} {navigation.getParam('middleName')} {navigation.getParam('lastName')}</Text>
                <Text>Case Number: {navigation.getParam('caseNumber')}</Text>
                <Text>Place Where {navigation.getParam('firstName')} Went Missing: {navigation.getParam('missingCounty')} {navigation.getParam('missingCity')} {detailedData.missingState} {navigation.getParam('missingCountry')}</Text>
                <Text>{navigation.getParam('firstName')} Went Missing On: {navigation.getParam('missingDate')}</Text>
                <Text>Approximate Age: {determinedAge}</Text>
                <Text>Height: {detailedData.height}{heightMetric}</Text>
                <Text>Weight: {detailedData.weight}{weightMetric}</Text>
                <Text>Eye Color: {detailedData.eyeColor}</Text>
                <Text>Hair Color: {detailedData.hairColor}</Text>
                <Text>Race: {detailedData.race}</Text>
                <Text>Sex: {detailedData.sex}</Text>
                <Text>If you have a tip, please contact: {detailedData.altContact} {"\n"}</Text>

                <Text>Case Type: {detailedData.caseType}</Text>
                <Text>Case Circumstance: {detailedData.circumstance}</Text>
            </ScrollView>
        );
    }
}
