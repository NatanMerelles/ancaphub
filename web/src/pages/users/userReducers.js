import {
  GET_ALL_USERS_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER_SUCCESS,
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_COLLECTION_SUCCESS,
  GET_USER_FOLLOWING_SUCCESS,
  GET_USER_CONTRIBUTIONS_SUCCESS,
  SEARCH_NEARBY_USERS
} from '../../utils/types';

const initialState = {
  allUsers: [],
  user: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_NEARBY_USERS:
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: payload,
        loading: false
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case GET_USER_FAIL:
      return {
        ...state,
        user: null,
        loading: false
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...payload }
      };
    case GET_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        user: { ...state.user, followers: payload }
      };
    case GET_USER_FOLLOWING_SUCCESS:
      return {
        ...state,
        user: { ...state.user, following: payload }
      };
    case GET_USER_COLLECTION_SUCCESS:
      return {
        ...state,
        user: { ...state.user, personalCollection: payload.personalCollection }
      };
    case GET_USER_CONTRIBUTIONS_SUCCESS:
      return {
        ...state,
        user: { ...state.user, contributions: payload }
      };
    default:
      return state;
  }
}
