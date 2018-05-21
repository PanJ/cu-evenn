import axios from 'axios'

const initialState = {
  email: '',
  ticketType: '',
  agreeTerms: false,
  addFood: false,
  countdown: '',
  loading: false,
  data: ''
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
    case 'SUBMIT_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'SUBMIT_FULFILLED':
      return {
        ...state,
        loading: false,
        data: action.payload.data.status
      }
    case 'SUBMIT_REJECTED':
      return {
        ...state,
        loading: false,
        data: 'ERROR'
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

export const submit = data => ({
  type: 'SUBMIT',
  payload: axios.post('http://www.mocky.io/v2/5b028bc43000005700cee1cd', data)
})
