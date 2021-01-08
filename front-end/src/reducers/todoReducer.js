import { GET_TODOS, ADD_TODO, DELETE_TODO, TODOS_LOADING } from '../actions/types';

const initialState = {
  todos: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    case DELETE_TODO:
      return {
        ...state,
          todos: state.todos.filter(item => item._id !== action.payload)
      }
    case ADD_TODO:
      return {
        ...state,
          todos: [action.payload, ...state.todos]
      }
    case TODOS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

// {
//   "task": "Aesthetics: Max Hype - Chest/Arms Workout", 
//   "task": "Martial Arts: Attend BJJ Fundamentals", 
//   "task": "Software Engineering: Code for 4 Hours", 
//   "task": "E-Commerce: Work on Business for 2 Hours", 
//   "task": "Freelance Developer (Sole Proprietor): Code for 2 Hours",
//   "task": "Language Learning: Study Japanese for 1 Hour",
//   "task": "Coding Empire/Personal Brand: Apply to Jobs/Gigs + Developing Personal Brand for 1 Hour",
//   "task": "Side Hustles (Flipping/De-Clutter): Sell on eBay & FB Marketplace for 1 Hour"
// }

// {
//   "task": "Financial Advising: Read 10 Pages of Personal Development Book + Study Crypto/Investing/Personal Finance for 1/2 Hour", 
//   "task": "Other/Hobbies: Guitar-Piano-Bowhunting-PPL-Game",
// }
