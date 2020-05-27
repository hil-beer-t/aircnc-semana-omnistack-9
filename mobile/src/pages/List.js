import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, Text, ScrollView, AsyncStorage, StyleSheet } from 'react-native';

//
import SpotList from '../components/SpotList';

//
import logo from '../assets/logo.png';

// import { Container } from './styles';

const List = ({ navigation }) => {
  const [techs, setTechs] = useState([]);


  if (!AsyncStorage.getItem('user')) {
    navigation.navigate('Login');
  }

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsArray = storageTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
})

export default List;