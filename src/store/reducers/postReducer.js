import {CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from '../types';

const initialState = {
  allPosts: [],
  bookedPosts: []
};

export const postReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: payload,
        bookedPosts: payload.filter(el => el.booked)
      };
    case TOGGLE_BOOKED:
      return {
        ...state, allPosts: state.allPosts.map(el => {
          if (el.id === payload) {
            el.booked = !el.booked;
          }
          return el;
        }),
        bookedPosts: state.allPosts.filter(el => el.booked)
      };
    case REMOVE_POST:
      return {
        ...state, allPosts: state.allPosts.filter(p => p.id !== payload),
        bookedPosts: state.bookedPosts.filter(p => p.id !== payload)
      };
    case CREATE_POST:
      return {
        ...state, allPosts: [{...payload}, ...state.allPosts]
      };
    default:
      return state;
  }
};
