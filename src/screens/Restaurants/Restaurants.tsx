import React from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Card from '../../components/Card';
import Page from '../../components/Page';
import {styles} from '../../styles/styles';
import {setApplications} from '../../_store/actions';

// List all Restaurants with APplications
const Restaurants = ({dispatch, restaurants, navigation}) => {
  const viewApplications = (resaurantId) => {
    dispatch(setApplications(resaurantId));
    navigation.navigate('Applications');
  };
  return (
    <Page>
      <ScrollView>
        {restaurants.map((restaurant) => (
          <Card
            name={restaurant.label}
            key={restaurant.id}
            onPress={() => viewApplications(restaurant.id)}>
            <Text style={styles.cardTitle}>{restaurant.label}</Text>
          </Card>
        ))}
      </ScrollView>
    </Page>
  );
};

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
