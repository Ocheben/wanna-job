import React from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Card from '../../components/Card';
import Page from '../../components/Page';
import {styles} from '../../styles/styles';
import {setResponses} from '../../_store/actions';

// List All Applications to a Restaurant
const Applications = (props) => {
  const {dispatch, applications, navigation, viewedResponses} = props;
  const viewResponses = (responseId: string) => {
    dispatch(setResponses(responseId));
    navigation.navigate('Responses');
  };

  const checkStatus = (applicationId: string) => {
    const viewedResponse = viewedResponses.find((res) => res === applicationId);
    return viewedResponse === undefined ? 'New' : 'Reviewed';
  };
  return (
    <Page>
      <ScrollView>
        {applications.map((application) => (
          <Card
            name={application.label}
            key={application.id}
            onPress={() => viewResponses(application.id)}>
            <Text style={styles.cardTitle}>{application.name}</Text>
            <Text style={styles.question}>{application.position}</Text>
            <Text style={styles.status}>
              STATUS: {checkStatus(application.id)}
            </Text>
          </Card>
        ))}
      </ScrollView>
    </Page>
  );
};

const mapStateToProps = (state: any) => ({
  applications: state.applications,
  viewedResponses: state.viewedResponses,
});

export default connect(mapStateToProps)(Applications);
