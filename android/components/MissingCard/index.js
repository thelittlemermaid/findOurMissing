import React from 'react';
import { TouchableOpacity, Text, View, Image, Modal } from 'react-native';
import { MissingPerson } from '../MissingPerson';
import styles from './styles';
import MissingList from '../MissingList';

const MissingCard = ({firstName, middleName, lastName, thumbnailUrl, missingCounty, missingCity, missingCountry, missingDate, caseNumber, orgPrefix, navigation}) =>  {
    let shortenedUrl = thumbnailUrl.substring(0, thumbnailUrl.length - 5);
    let newUrl = 'https://api.missingkids.org' + shortenedUrl + '.jpg';

    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('MissingPerson', {firstName, middleName, lastName, missingCounty, missingCity, missingCountry, missingDate, caseNumber, orgPrefix, thumbnailUrl, newUrl})}>
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