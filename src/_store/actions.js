import {CONSTANTS} from './constants';
const dummyData = require('../../dummyData/applications.json');

const {
  SET_RESTAURANTS,
  SET_APPLICATIONS,
  SET_RESPONSES,
  SET_VIEWED_RESPONSES,
} = CONSTANTS;

const actionCreator = (type, payload) => ({type, payload});

export const setRestaurants = () => {
  // Get Restaurants
  const allRestaurants = dummyData.map((response) => response.restaurant);
  const uniqueRestaurants = Array.from(
    new Set(allRestaurants.map((res) => res.id)),
  ).map((id) => allRestaurants.find((r) => r.id === id));
  return (dispatch) => {
    // Store Restaurants in Redux Store
    dispatch(actionCreator(SET_RESTAURANTS, uniqueRestaurants));
  };
};

export const setApplications = (restaurantId) => {
  const applications = dummyData
    .filter((response) => (response.restaurant || {}).id === restaurantId)
    .map((res) => {
      // Get Applicants Information
      const {answers} = res.form_response;
      const firstname = (
        answers.find(
          (answer) => answer.field.ref === 'application_firstname',
        ) || {}
      ).text;
      const lastname = (
        answers.find((answer) => answer.field.ref === 'application_lastname') ||
        {}
      ).text;
      const position = (
        answers.find((answer) => answer.field.ref === 'application_position') ||
        {}
      ).choice.label;
      return {
        id: res.id,
        name: `${firstname} ${lastname}`,
        position,
      };
    });
  return (dispatch) => {
    // Store Applications in Redux Store
    dispatch(actionCreator(SET_APPLICATIONS, applications));
  };
};

export const setResponses = (responseId) => {
  // Find Response object
  const response = dummyData.find((res) => res.id === responseId);
  const {
    definition: {fields},
    answers,
  } = response.form_response;

  // Get questions and answers
  const responseList = fields.map((field) => {
    const answer = answers.find((ans) => ans.field.id === field.id);
    const answerValue =
      answer.type === 'choice'
        ? answer.choice.label
        : answer.type === 'choices'
        ? answer.choices.labels.join(', ')
        : answer[answer.type];
    return {
      question: field.title,
      id: field.id,
      answer: String(answerValue),
      type: field.type,
    };
  });
  return (dispatch) => {
    // Store Responses in Redux Store
    dispatch(actionCreator(SET_RESPONSES, responseList));
    dispatch(actionCreator(SET_VIEWED_RESPONSES, responseId));
  };
};
