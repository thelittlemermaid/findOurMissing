/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent, Fragment} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, FlatList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from 'react-navigation-stack';
import MissingList from './android/components/MissingList';
import MissingPerson from './android/components/MissingPerson';
import Home from './android/components/Home';
import { createAppContainer } from 'react-navigation';


const RootStack = createStackNavigator({
  Home: { screen: Home },
  MissingList: { screen: MissingList },
  MissingPerson: {screen: MissingPerson }
},
{
  initialRouteName:  'MissingList',
})

/*
const App = () => {
return <RootStack />
}
*/
export default createAppContainer(RootStack);
/*
const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Missing Persons in Your Area</Text>
          <MissingList></MissingList>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#252a34',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/