export const state = () => ({
  create: {
    type: '',
    cryptoAmount: 0,
    fiatAmount: 0,
    currency: '',
    personalInformation: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: ''
    },
    walletInfo: {
      address: ''
    },
    payment: {
      reference: ''
    },
    bankDetails: {
      bankName: '',
      sortCode: '',
      accountNumber: '',
      accountName: ''
    }
  }
})

export const mutationTypes = {
  UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
  UPDATE_WALLET_INFO: 'UPDATE_WALLET_INFO',
  UPDATE_BANK_DETAILS: 'UPDATE_BANK_DETAILS',
  UPDATE_PAYMENT: 'UPDATE_PAYMENT'
}

export const mutations = {
  [mutationTypes.UPDATE_PERSONAL_INFO](state, opts) {
    state.create.personalInformation[opts.prop] = opts.value
  }
}
