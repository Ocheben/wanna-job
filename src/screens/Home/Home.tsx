import React, {useEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Welcome from '../../components/Welcome';
import {styles} from '../../styles/styles';
import {setRestaurants} from '../../_store/actions';

const Home = ({navigation, dispatch}) => {
  useEffect(() => {
    dispatch(setRestaurants());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Page>
        <Header />
        <Welcome />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Restaurants')}>
          <Text>View Applications</Text>
        </TouchableOpacity>
      </Page>
    </>
  );
};

export default connect()(Home);
