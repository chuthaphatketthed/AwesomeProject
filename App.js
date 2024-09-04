import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/weeks2/Ex01';
import Ex02 from './screens/weeks2/Ex02';
import Ex03 from './screens/weeks2/Ex03';
import Ex04 from './screens/weeks2/Ex04';
import Ex05 from './screens/weeks2/Ex05';
import Ex06 from './screens/weeks2/Ex06';
import Ex07 from './screens/weeks2/Ex07';
import Ex08 from './screens/weeks2/Ex08';
import Ex09 from './screens/weeks2/Ex09';
import Ex10 from './screens/weeks2/Ex10';
import Ex11 from './screens/weeks2/Ex11';
import Ex12 from './screens/weeks2/Ex12';
import Test from './screens/weeks3/Test';
import { TextInput, View } from 'react-native';
import Greeting from './components/Greeting';
import Travel from './screens/weeks3/Travel';
import Signup from './components/weeks3/Signup';
import Resort from './screens/weeks3/Resort';
import Health from './screens/week5/Health';
import Home from './screens/weeks6/Home';
import HomeStack from './navigations/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import ChartKitScreen from './screens/week5/ChartKitScreen';

export default function App() {
  return (
    // <Welcome />
    // <Ex01 /> 
    // <Ex02 /> 
    // <Ex03 /> 
    // <Ex04 /> 
    // <Ex05 />
    // <Ex06 /> 
    // <Ex07 />
    // <Ex08 />
    // <Ex09 />
    // <Ex10 />
    // <Ex11 />
    // <Ex12 />
    // <Test />
    // <Travel/>
    // <Resort/>
    // <Health />
    // <Home/>
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>
    // <ChartKitScreen />

  );
}
