/**
 * BVxAndroid
 * Philip Ottenbreit
 *
 * repository-started: 2022-apr-11, 10:00pm
 *
 */

 'use strict';

 import React from 'react';
 
 // NAVIGATION
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 // API
 import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   useQuery,
   gql
 } from "@apollo/client";
 
 import AsyncStorage from '@react-native-async-storage/async-storage'; 

 
 // SCREENS
//  import HomeScreen from './Screens/Home';
//  import CurrentVisitScreen from './Screens/CurrentVisit';
//  import SignInScreen from './Screens/SignIn';
 import * as Config from './Config';
 
 /**
  * App-global state, published as app root
  */
 export const AppContext = React.createContext({
   storeToken: (new_token) => {},
   apolloClient: ApolloClient,
   refreshClient: () => {},
 });
 
 /**
  * Main application export
  */
 export default class App extends React.Component {
   constructor() {
     super();
 
     this.state = {
       storeToken: this.storeToken,
       apolloClient: this.buildClient(),
       refreshClient: this.buildClient,
     };
   }
 
   async storeToken(new_token) {
     try {
       await AsyncStorage.setItem('token', new_token);
     } catch (e) {
       console.log(e);
     }
   }
 
   //If 'token' is not set, returns null
   async getToken() {
     try {
       const stored_token = await AsyncStorage.getItem('token');
       return stored_token;
     } catch (e) {
       console.log(e);
       return null;
     }
   }
 
   //Sets the ApolloClient with authorization IF 'token' is set
   async buildClient() {
     console.log(
       "Building global apollo client WITH URL: '" + Config.SERVER_URL + "'."
     );
 
     const token = await this.getToken();
 
     if (token !== null) {
       console.log(
         "Building global apollo client WITH TOKEN: '" + { token } + "'."
       );
     } else {
       console.log('Building global apollo client WITHOUT token.');
       console.log('HERE');
 
       try {
         const ok = new ApolloClient({
           uri: Config.SERVER_URL,
           // headers: {
           //   authorization: token,
           //   'client-name': 'BVxAndroid',
           //   'client-version': '1.0.0',
           // },
         });
 
         console.log('HERE');
 
         this.setState((state) => ({
           apolloClient: ok,
         }));
       } catch (e) {
         console.log(e);
       }
     }
   }
 
   render() {
     const Stack = createNativeStackNavigator();
 
     return (
       <ApolloProvider client={this.state.apolloClient}>
         <AppContext.Provider value={this.state}>
           <NavigationContainer>
             <Stack.Navigator initialRouteName="SignIn">
               <Stack.Screen
                 name="SignIn"
                 component={SignInScreen}
                 options={{ headerShown: false }}
               />
               <Stack.Screen
                 name="Home"
                 component={HomeScreen}
                 options={{ headerShown: false }}
               />
               <Stack.Screen
                 name="CurrentVisit"
                 component={CurrentVisitScreen}
                 options={{ headerShown: false }}
               />
             </Stack.Navigator>
           </NavigationContainer>
         </AppContext.Provider>
       </ApolloProvider>
     );
   }
 }
 