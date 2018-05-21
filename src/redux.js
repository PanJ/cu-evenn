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
    case 'SET_TICKET_TYPE':
      return {
        ...state,
        ticketType: action.value
      }
    case 'SET_AGREE_TERMS':
      return {
        ...state,
        agreeTerms: action.value
      }
    case 'SET_ADD_FOOD':
      return {
        ...state,
        addFood: action.value
      }
    case 'SET_COUNTDOWN':
      return {
        ...state,
        countdown: action.value
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

export const setTicketType = value => ({
  type: 'SET_TICKET_TYPE',
  value
})

export const setAgreeTerms = value => ({
  type: 'SET_AGREE_TERMS',
  value
})

export const setAddFood = value => ({
  type: 'SET_ADD_FOOD',
  value
})

export const setCountdown = value => ({
  type: 'SET_COUNTDOWN',
  value
})
