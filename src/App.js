/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import HookViewer from './components/HookViewer';

class App extends Component {

  state = {
    count: 0
  };

  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity onPress={() => this.setCount()}>
              <View style={{ alignItems: 'center', backgroundColor: 'green', height: 50, justifyContent: 'center', marginHorizontal: 30 }}>
                <Text style={{ fontSize: 20 }}>{'Increase Count'}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginTop: 100 }}>
              <Text style={{ fontSize: 30 }}>{this.state.count}</Text>
            </View>
            <HookViewer id={this.state.count} />
          </View>
        </SafeAreaView>
      </>
    );
  }
};

export default App;
