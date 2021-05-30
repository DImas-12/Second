import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Bg, Logo, Obat} from '../../assets';
import {Button, Gap} from '../../component';

const GetStarted = () => {
  return (
    <ImageBackground source={Bg} style={styles.page}>
      <View>
        <Logo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        {/* <Gap /> */}
        <View style={{height: 16}} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {fontSize: 28, fontWeight: '600', color: 'white', marginTop: 91},
});
