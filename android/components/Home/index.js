import React, {PureComponent} from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

class Home extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <Button
                color="#000"
                title="Missing Persons"
                onPress={() => navigation.navigate('MissingCard')}
            />
        )
    })
    render() {
        return (
            <View style={styles.homePage}>
                <Text style={styles.header}>This is the Home Page!</Text>
            </View>
        )
    }
}

export default Home;