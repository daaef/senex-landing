const _TRADE_TTL_ = 60 * 15 * 1000 /* 15 mins */

export const state = () => ({
  banks: [],
  create: {
    type: '',
    cryptoAmount: 0,
    fiatAmount: 0,
    currency: 'USD',
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
      mobileNumber: '',
      pin: ''
    },
    walletInfo: {
      walletAddress: ''
    },
    payment: {
      reference: ''
    },
    bankDetails: {
      bankCode: null,
      accountNumber: '',
      accountName: ''
    },

    metadata: {},

    paymentDone: false
  },

  track: {
    tradeId: '',
    trade: null
  }
})

export const mutationTypes = {
  UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
  UPDATE_WALLET_INFO: 'UPDATE_WALLET_INFO',
  UPDATE_BANK_DETAILS: 'UPDATE_BANK_DETAILS',
  UPDATE_PAYMENT: 'UPDATE_PAYMENT',
  START_TRADE: 'START_TRADE',
  SET_BANK_LIST: 'SET_BANK_LIST',
  SET_TRADE_METADATA: 'SET_TRADE_METADATA',
  SET_TRACK_TRADE_ID: 'SET_TRACK_TRADE_ID',
  SET_TRACK_TRADE_INFO: 'SET_TRACK_TRADE_INFO',
  SET_PAYMENT_DONE: 'SET_PAYMENT_DONE'
}

export const mutations = {
  [mutationTypes.UPDATE_PERSONAL_INFO](state, opts) {
    state.create.personalInformation[opts.prop] = opts.value
  },

  [mutationTypes.UPDATE_BANK_DETAILS](state, opts) {
    state.create.bankDetails[opts.prop] = opts.value
  },

  [mutationTypes.UPDATE_WALLET_INFO](state, opts) {
    state.create.walletInfo[opts.prop] = opts.value
  },

  [mutationTypes.UPDATE_PAYMENT](state, opts) {
    state.create.payment[opts.prop] = opts.value
  },

  [mutationTypes.START_TRADE](state, opts) {
    state.create.currency = opts.currency
    state.create.type = opts.tradeType
    state.create.fiatAmount = opts.fiatAmount
    state.create.cryptoAmount = opts.cryptoAmount
    state.create.conversionRate.NGN = opts.rates.NGN
    state.create.conversionRate.USD = opts.rates.USD
    state.create.conversionRate.USD_NGN = opts.rates.USD_NGN
    state.create.startTime = new Date()
  },

  [mutationTypes.SET_BANK_LIST](state, bankList) {
    state.banks = bankList
  },

  [mutationTypes.SET_TRADE_METADATA](state, metadata) {
    state.create.metadata = {
      ...(state.create.metadata || {}),
      ...metadata
    }
  },

  [mutationTypes.SET_TRACK_TRADE_ID](state, tradeId) {
    state.track.tradeId = tradeId
  },

  [mutationTypes.SET_TRACK_TRADE_INFO](state, info) {
    state.track.trade = info
  },

  [mutationTypes.SET_PAYMENT_DONE](state, done) {
    state.create.paymentDone = done
  }
}

export const getters = {
  isActiveTrade: state => {
    return (
      state.create.startTime &&
      new Date() - state.create.startTime < _TRADE_TTL_
    )
  },

  hasPersonalInformation: state => {
    const o = state.create.personalInformation
    return Object.keys(o).every(key => {
      if (key === 'pin') {
        return true
      }
      return o[key]
    })
  },

  hasCreatedTrade: state => {
    return state.create.metadata.id
  },

  isPaid: state => {
    return state.create.paymentDone
  }
}
