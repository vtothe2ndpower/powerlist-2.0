import { v4 as uuid } from 'uuid';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
  todos: [
    { task: 'Aesthetics: Max Hype - Chest/Arms Workout', id: uuid(), completed: false },
    { task: 'Martial Arts: Attend BJJ Fundamentals', id: uuid(), completed: false },
    { task: 'Software Engineering: Code for 4 Hours', id: uuid(), completed: false },
    { task: 'E-Commerce: Work on Business for 2 Hours', id: uuid(), completed: false },
    { task: 'Freelance Developer (Sole Proprietor): Learn Shopify Liquid for 2 Hours', id: uuid(), completed: false },
    { task: 'Coding Empire: Apply to Jobs/Gigs or Develop Personal Brand for 1 Hour', id: uuid(), completed: false },
    { task: 'Financial Advising: Read 10 Pages of Personal Development Book + Study Crypto/Investing/Personal Finance for 1/2 Hour', id: uuid(), completed: false },
    { task: 'Language Learning: Study Japanese for 1 Hour', id: uuid(), completed: false },
    { task: 'Other/Hobbies: Guitar-Piano-Bowhunting-PPL-Game', id: uuid(), completed: false }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TODOS:
      return {...state}
      break
    default:
      return state;
    // case ADD_TODO:
    // case DELETE_TODO:
  }
}