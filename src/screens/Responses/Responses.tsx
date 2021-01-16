import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Page from '../../components/Page';
import {styles} from '../../styles/styles';

// List all questions and respomnses in an application
const Responses = ({responses}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Page>
        <ScrollView>
          {responses.map((response) => {
            const {id, answer, question, type} = response;
            return (
              <View key={id} style={styles.wrapper}>
                <Text style={styles.question}>{question}</Text>
                <Text style={styles.answer}>{answer}</Text>
                {type === 'file_upload' && (
                  <Image
                    style={styles.fileUpload}
                    source={{
                      uri: answer,
                    }}
                  />
                )}
              </View>
            );
          })}
        </ScrollView>
      </Page>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  responses: state.responses,
});

export default connect(mapStateToProps)(Responses);
