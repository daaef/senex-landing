const _TRADE_TTL_ = 60 * 60 * 1000 /* 1 hr */

export const state = () => ({
  banks: [],
  create: {
    type: '',
    cryptoAmount: 0,
    fiatAmount: 0,
    currency: '',
    conversionRate: {
      USD: null,
      NGN: null,
      USD_NGN: null
    },
    startTime: null,
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
      bankCode: null,
      accountNumber: '',
      accountName: ''
    },

    // This is the information of the trade after it has been created, and before
    // it is being paid for in the case of trade/buy or paid in' in the case of
    // trade/sell
    metadata: {
      id: 'QQ1jh1qhaI4O',
      type: 'sell',
      cryptoAmount: 0.004382,
      fiatAmount: 52830,
      email: 'rasheedmusa9@gmail.com',
      firstName: 'Rasheed',
      lastName: 'Musa',
      mobileNumber: '07066528898',
      accountNumber: '3066678912',
      walletAddress: 'xhsd832sdhzxdhquenhsAAAdhsz',
      bank: '011',
      expires: '2019-03-19T11:13:37.909970Z',
      modified: '2019-03-19T10:13:38.344868Z',
      created: '2019-03-19T10:13:38.344782Z',
      transactions: [],
      kyc: null,
      deviceInfo: {},
      networkInfo: {},
      status: 'pending'
    }
  }
})

export const mutationTypes = {
  UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
  UPDATE_WALLET_INFO: 'UPDATE_WALLET_INFO',
  UPDATE_BANK_DETAILS: 'UPDATE_BANK_DETAILS',
  UPDATE_PAYMENT: 'UPDATE_PAYMENT',
  START_TRADE: 'START_TRADE',
  SET_BANK_LIST: 'SET_BANK_LIST',
  SET_TRADE_METADATA: 'SET_TRADE_METADATA'
}

export const mutations = {
  [mutationTypes.UPDATE_PERSONAL_INFO](state, opts) {
    state.create.personalInformation[opts.prop] = opts.value
  },

  [mutationTypes.UPDATE_BANK_DETAILS](state, opts) {
    state.create.bankDetails[opts.prop] = opts.value
  },

  [mutationTypes.START_TRADE](state, opts) {
    state.create.currency = opts.currency
    state.create.type = opts.tradeType
    state.create.fiatAmount = opts.fiatAmount
    state.create.cryptoAmount = opts.cryptoAmount
    state.create.conversionRate.NGN = opts.rates.NGN
    state.create.conversionRate.USD = opts.rates.USD
    state.create.conversionRate.BTC = opts.rates.BTC
    state.create.startTime = new Date()
  },

  [mutationTypes.SET_BANK_LIST](state, bankList) {
    state.banks = bankList
  },

  [mutationTypes.SET_TRADE_METADATA](state, metadata) {
    state.create.metadata = metadata
  }
}

export const getters = {
  isActiveTrade: state => {
    return (
      state.create.startTime &&
      new Date() - state.create.startTime < _TRADE_TTL_
    )
  }
}
