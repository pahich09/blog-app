import {CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from '../types';
import {DATA} from '../../data';

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA
});

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id
});

export const removePost = id => ({
  type: REMOVE_POST,
  payload: id
});

export const createPost = post => ({
  type: CREATE_POST,
  payload: {...post, id: Date.now().toString()}
});
