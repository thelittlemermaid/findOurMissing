import React, { PureComponent } from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';


export default class MissingPerson extends PureComponent {
    c
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text style={styles.personName}>{navigation.getParam('name', 'Name of Missing Person')}</Text>
            </View>
        );
    }
)
