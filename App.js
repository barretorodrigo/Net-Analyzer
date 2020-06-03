/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NetworkInfo } from "react-native-network-info";


const App: () => React$Node = () => {
  const [myIpAddress, setMyIpAddress] = useState('');
  const [broadcast, setBroadcast] = useState('');
  const [subnet, setSubnet] = useState('');
  const [gateway, setGateway] = useState('');
  let lanscan = new LANScan();
  NetworkInfo.getIPV4Address().then(ipAddress => {
    setMyIpAddress(ipAddress);
  });
  NetworkInfo.getBroadcast().then(broadcast => {
    setBroadcast(broadcast);
  });
  NetworkInfo.getSubnet().then(subnet => {
    setSubnet(subnet);
  });
  NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
    setGateway(defaultGateway);
  });
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Algum texto</Text>
              <Text style={styles.sectionDescription}>
                Meu IP Local: 
                {myIpAddress}
              </Text>
              <Text style={styles.sectionDescription}>
                Broadcast: 
                {broadcast}
              </Text>
              <Text style={styles.sectionDescription}>
                Máscara: 
                {subnet}
              </Text>
              <Text style={styles.sectionDescription}>
                Gateway: 
                {gateway}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
    color: Colors.black,
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
