const initialState = {
  email: '',
  ticketType: '',
  agreeTerms: false,
  addFood: false,
  countdown: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.value
      }
    default:
      return state
  }
}

export const setEmail = email => {
  return {
    type: 'SET_EMAIL',
    value: email
  }
}
