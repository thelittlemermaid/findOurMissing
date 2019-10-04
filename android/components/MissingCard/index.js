import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';

const MissingCard = ({firstName, middleName, lastName, thumbnailUrl, missingCounty, missingCity, missingCountry, missingDate}) =>  {
    let shortenedUrl = thumbnailUrl.substring(0, thumbnailUrl.length - 5);
    let newUrl = 'https://api.missingkids.org' + shortenedUrl + '.jpg';
    console.log(newUrl);
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}}>
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