/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'; //Needed for navigation
import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native'; //Should I be getting these from 'react-native-elements' instead?
import { Button, Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

//ARROW FUNCTIONS (are kinda f*cking stupid)
//hello = function() {
//  return "Hello World!";
//}
//hello = () => {
//  return "Hello World!";
//}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    //options={{ title: 'Welcome'}}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Home = ({ navigation }) => {
  return (
    <React.Fragment>
    <Header
      //leftComponent={{ icon: 'menu', color: '#fff' }}
      //containerStyle={{marginTop:Platform.OS === 'ios' ? 0 : -20}} //Unique issue for Android where header is thic AF
      centerComponent={{ text: 'Home', style: styles.title}}
      rightComponent={{ icon: 'menu' }}
      //centre/right components used #fff color for white
      containerStyle={{ backgroundColor: 'transparent'}}
    />
    <View style={{ padding:20, flexDirection: "column", flex: 1 }}>
        <View style={{ flex: 5, backgroundColor: "blue"}} />
        <View style={{ flex: 3 }}>
            <Button
                buttonStyle={styles.button}
                title="Add Meal"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' }) //does .navigate need the whole name of the container ("ProfileScreen") or just the start ("Profile")?
              }
            />
            <Button
                buttonStyle={styles.button}
                title="Schedule"
                onPress={() =>
                    Alert.alert('Simple Button Pressed')
                }
            />
        </View>
    </View>
    </React.Fragment>
  );
};

const ProfileScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   title: {
        fontSize : 20,
        color: 'dodgerblue'
   },
   button: {
      //backgroundColor: '#dc143c',
      marginTop: 20
   }
})

export default App;

//COMMMENTS LOOK LIKE {/* COMMENT GOES HERE*/}


//const App = () => {
//  return (
//    <NavigationContainer>
//    <View
//        style={{
//        justifyContent: "center",
//        alignItems: "center"
//        }}>
//      <Text>Hello World!</Text>
//      <Button
//        title="Add Meal"
//        onPress={() => Alert.alert('Simple Button Pressed')}
//        />
//      </View>
//    </NavigationContainer>
//  );
//};
//
//export default App;

//const App = () => {
//  return (
//    <View
//      style={{
//        flex: 1,
//        justifyContent: "center",
//        alignItems: "center"
//      }}>
//      <Text>Hello, LeabharPower!</Text>
//    </View>
//  )
//}
//export default App;

//import React from 'react';
//import {
//  SafeAreaView,
//  StyleSheet,
//  ScrollView,
//  View,
//  Text,
//  StatusBar,
//} from 'react-native';
//
//import {
//  Header,
//  LearnMoreLinks,
//  Colors,
//  DebugInstructions,
//  ReloadInstructions,
//} from 'react-native/Libraries/NewAppScreen';
//
//const App: () => React$Node = () => {
//  return (
//    <>
//      <StatusBar barStyle="dark-content" />
//      <SafeAreaView>
//        <ScrollView
//          contentInsetAdjustmentBehavior="automatic"
//          style={styles.scrollView}>
//          <Header />
//          {global.HermesInternal == null ? null : (
//            <View style={styles.engine}>
//              <Text style={styles.footer}>Engine: Hermes</Text>
//            </View>
//          )}
//          <View style={styles.body}>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Step One</Text>
//              <Text style={styles.sectionDescription}>
//                Edit <Text style={styles.highlight}>App.js</Text> to change this
//                screen and then come back to see your edits.
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>See Your Changes</Text>
//              <Text style={styles.sectionDescription}>
//                <ReloadInstructions />
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Debug</Text>
//              <Text style={styles.sectionDescription}>
//                <DebugInstructions />
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Learn More</Text>
//              <Text style={styles.sectionDescription}>
//                Read the docs to discover what to do next:
//              </Text>
//            </View>
//            <LearnMoreLinks />
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    </>
//  );
//};
//
//const styles = StyleSheet.create({
//  scrollView: {
//    backgroundColor: Colors.lighter,
//  },
//  engine: {
//    position: 'absolute',
//    right: 0,
//  },
//  body: {
//    backgroundColor: Colors.white,
//  },
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//    color: Colors.black,
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//    color: Colors.dark,
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//  footer: {
//    color: Colors.dark,
//    fontSize: 12,
//    fontWeight: '600',
//    padding: 4,
//    paddingRight: 12,
//    textAlign: 'right',
//  },
//});
//
//export default App;
