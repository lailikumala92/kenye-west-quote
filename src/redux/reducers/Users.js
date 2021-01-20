const initialState = {
  data: [],
  loading: false,
};

const Quote = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'QUOTE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'QUOTE_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        quote: action.payload
      };
    case 'QUOTE_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        quote:[],
        error: action.payload
      }; 
    default:
      return state
  }
};
export default Quote;
