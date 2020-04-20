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
  getBlacklist() {
    return Api().get(process.env.VUE_APP_UPDATE_BLACKLIST_API_URL + "auth0|5e9da4d876d63d0c0959c8fb",
    {
      headers:{
        Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rTTVOek5FTkRKRE16WTBRMFE1TURVMlFURTBRa1JFTmpjelJVSTVOa0ZFUkRCQk1qbEVRUSJ9.eyJuaWNrbmFtZSI6ImhhbGxvIiwibmFtZSI6ImhhbGxvQGdteC5kZSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mMDQ1ZmNmMzM1OGIwYTg1YmE1YzZlZDE5OWMwZDM3NT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmhhLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIwLTA0LTIwVDEzOjM0OjE2LjQxNVoiLCJlbWFpbCI6ImhhbGxvQGdteC5kZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9nb29kYnV5LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTlkYTRkODc2ZDYzZDBjMDk1OWM4ZmIiLCJhdWQiOiI3bHBNRnl6ZmlVTGZLbnB1eFZ1Wk00WUh5TGJqU0JoSiIsImlhdCI6MTU4NzM5NDE1NSwiZXhwIjoxNTg3NDMwMTU1LCJub25jZSI6Ijc4TTMxc05ib3Fva3pHdGw2a3U1YnZQa3BxVU9IY19IdVhyODZDLUlUdW4ifQ.BUXSfAHuRc7b9c-KgeK9dWbCss0NIbs3MD1Vls9k1Gthrm-62fdKviITMeYxOINfkYyae0LUyff_LiBr51_1nwR15HAGAnnF5G4xM7XmC1P78-R6uI3JZaL_dUZnvLrBECdJUvOU-fxJnS3XQpcaD0d-T6K-Xh3jPVAxU1_tISwY4UVipG7vCay3eROhp2Lh8eqhx2OuzEp3WKgPe72B2wgnrIOmulQ5Q3X428lQo0g54GGiIUiebGVWiVyuE3jX9NMJfgq9NIAevYOoA61X-zBGzc4Jw5cnotSDQp0VgURIkiQIwJ3J4Yo4vafRyuDR0grET2DsHMr3-JWCKNP8IQ",
      }
    })
  },
  putBlacklist(blacklist) {
    return Api().put(process.env.VUE_APP_UPDATE_BLACKLIST_API_URL + "auth0|5e9da4d876d63d0c0959c8fb" + '/', {
      'blacklist': blacklist.join(),
      'user_id': "auth0|5e9da4d876d63d0c0959c8fb"
    }, 
    {
      headers: {
        Authorization: 'Bearer '+ "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rTTVOek5FTkRKRE16WTBRMFE1TURVMlFURTBRa1JFTmpjelJVSTVOa0ZFUkRCQk1qbEVRUSJ9.eyJuaWNrbmFtZSI6ImhhbGxvIiwibmFtZSI6ImhhbGxvQGdteC5kZSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mMDQ1ZmNmMzM1OGIwYTg1YmE1YzZlZDE5OWMwZDM3NT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmhhLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIwLTA0LTIwVDEzOjM0OjE2LjQxNVoiLCJlbWFpbCI6ImhhbGxvQGdteC5kZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9nb29kYnV5LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTlkYTRkODc2ZDYzZDBjMDk1OWM4ZmIiLCJhdWQiOiI3bHBNRnl6ZmlVTGZLbnB1eFZ1Wk00WUh5TGJqU0JoSiIsImlhdCI6MTU4NzM5NDE1NSwiZXhwIjoxNTg3NDMwMTU1LCJub25jZSI6Ijc4TTMxc05ib3Fva3pHdGw2a3U1YnZQa3BxVU9IY19IdVhyODZDLUlUdW4ifQ.BUXSfAHuRc7b9c-KgeK9dWbCss0NIbs3MD1Vls9k1Gthrm-62fdKviITMeYxOINfkYyae0LUyff_LiBr51_1nwR15HAGAnnF5G4xM7XmC1P78-R6uI3JZaL_dUZnvLrBECdJUvOU-fxJnS3XQpcaD0d-T6K-Xh3jPVAxU1_tISwY4UVipG7vCay3eROhp2Lh8eqhx2OuzEp3WKgPe72B2wgnrIOmulQ5Q3X428lQo0g54GGiIUiebGVWiVyuE3jX9NMJfgq9NIAevYOoA61X-zBGzc4Jw5cnotSDQp0VgURIkiQIwJ3J4Yo4vafRyuDR0grET2DsHMr3-JWCKNP8IQ",
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
