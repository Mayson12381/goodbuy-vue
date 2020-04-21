import Api from '@/Api'

export default {
  getFeedback(params) {
    return Api().get('http://0.0.0.0:8000/mock/feedback/result/11111111')
  },
  getFeedbackResult(params) {
    return Api().get('http://0.0.0.0:8000/mock/feedback/result/11111111')
  },
  getCategories() {
    return Api().get(process.env.VUE_APP_CATEGORIES_API_URL)
  },
  getFridgeKarmaResult() {
    return Api().get(process.env.VUE_APP_FRIDGE_KARMA_FEEDBACK_API_URL)
  },
  getBlacklist(params) {
    return Api().get(process.env.VUE_APP_UPDATE_BLACKLIST_API_URL,
    {
      headers:{
        Authorization: `Bearer ${params.jwt}`
      }
    })
  },
  putBlacklist(params) {
    return Api().put(process.env.VUE_APP_UPDATE_BLACKLIST_API_URL + params.user_id + '/', {
      'blacklist': params.blacklist.join(),
      'user_id': params.user_id
    },
    {
      headers: {
        Authorization: `Bearer ${params.jwt}`,
      }
    })
  },
  postValidation(barcode, upvote, donwvote) {
    return Api().post(process.env.VUE_APP_PRODUCT_VALIDATION_API_URL, {
      'barcode': barcode,
      'upvote-counter': upvote,
      'downvote-counter': donwvote
    })
  },
  updateProduct(inputName, inputBrand, inputCategory, inputCode) {
    return Api().post(process.env.VUE_APP_UPDATE_PRODUCT_API_URL, {
      name: inputName,
      brand: inputBrand,
      category: inputCategory,
      code: inputCode,
    })
  },
}
