import { GET_PROPERTIES, PROPERTY_ERROR, ADD_PROPERTY, LIKE_PROPERTY, DELETE_PROPERTY } from '../actions/types';

const initialState = {
  properties: [],
  property: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: payload,
        loading: false,
      };
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [payload, ...state.properties],
        loading: false,
      };
    case LIKE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map(property => 
          property._id === payload.id ? { ...property, likes: payload.likes } : property
        ),
        loading: false,
      };
    case DELETE_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(property => property._id !== payload),
        loading: false,
      };
    case PROPERTY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
