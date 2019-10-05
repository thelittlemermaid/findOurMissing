import React from 'react';
import { TouchableOpacity, Text, View, Image, Modal } from 'react-native';
import { MissingPerson } from '../MissingPerson';
import styles from './styles';
import MissingList from '../MissingList';

const MissingCard = ({firstName, middleName, lastName, thumbnailUrl, missingCounty, missingCity, missingCountry, missingDate, caseNumber, orgPrefix}) =>  {
    let shortenedUrl = thumbnailUrl.substring(0, thumbnailUrl.length - 5);
    let newUrl = 'https://api.missingkids.org' + shortenedUrl + '.jpg';
    console.log(newUrl);

    buttonPress = () => {
        fetch("https://api.missingkids.org/missingkids/servlet/JSONDataServlet?action=childDetail&caseNum=" + caseNumber + "&orgPrefix=" + orgPrefix)
            .then(function(response) {return response.json();})
            .then(function(myJson){
                <MissingPerson {...myJson}></MissingPerson>
        }.bind(this));
    }

    return (
        //Can I call a stateless component and pass it the data in a onPress event?
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={MissingList.buttonPress = true}>
            <View  style={styles.listItemContainer}>
                <Image source={{uri: newUrl}} style={styles.missingImage}/>
                <Text style={styles.personName}>{firstName} {middleName} {lastName}</Text>
                <View>
                    <Text>Location: {missingCity} {missingCounty}, {missingCountry}</Text>
                    <Text>Date Went Missing: {missingDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MissingCard;