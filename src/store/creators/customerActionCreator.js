// Good practice example:  function-creator to generate action instance
import {ADD_CUSTOMER} from './../../utils/constants.js'

export default function addCustomerActionCreator(payload) {
    return {type:ADD_CUSTOMER, payload:payload}
}
