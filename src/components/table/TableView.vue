<template>
  <div class="container">
    <div class="header">
      <HeaderBar></HeaderBar>
    </div>
    <div class="main">
      <template v-for="(data, index) in response_data">
          <button
              @click="isProductInfoActive = true,
              product = data.fields"
              :key="index"
              class="row"
              >
              {{ data.fields.name }}
              <div class="is-big-ten">
                  <div v-if="data.is_big_ten == true">
                      ❌
                  </div>
                  <div v-if="data.is_big_ten == false">
                      ✅
                  </div>
                  <div v-if="data.is_big_ten == 'We don\'t know'">
                      ❓
                  </div>
              </div>
          </button>
          <hr :key="index+data.fields.name">
      </template>
    </div>

    <transition name="slide-up">
        <InfoSlideUp
            v-if="isProductInfoActive"
            :showScanAgainButton="false"
            :productName="product.name"
            :productBrand="product.brand"
            :productCorporation="product.corporation"
            :barcode="this.barcode"
            @closeInfoModal="isProductInfoActive = false"
        />
    </transition>

    <div class="footer">
        <p class="p-score">Score: {{ score }}</p>
        <button
        class="done-button"
        @click="reRouteToFeature"
        >
        Done
        </button>
    </div>
  </div>
</template>

<script>
import FeedbackService from '@/FeedbackService'
import InfoSlideUp from '@/components/product/info/InfoSlideUp.vue'
import HeaderBar from '@/components/feature/FeatureViewHeaderBar.vue'

export default {
    components: {
        InfoSlideUp,
        HeaderBar
    },
    data() {
        return {
            response_data: '',
            score: 0,
            big_true: 0,
            big_false: 0,
            big_we_dont_know: 0,
            big_size: 0,
            isProductInfoActive: false,
            product: {
                brand: '',
                corporation: '',
                name: '',
                code: '',
            },
            barcode: '',
        }
    },
    methods: {
        reRouteToFeature() {
            this.$router.push("/feature")
        },
        getAPIResponse() {
            FeedbackService.getFridgeKarmaResult()
            .then(response => (
                this.saveData(response)
            ))
        },
        saveData(response) {
            console.log(response.data)
            this.response_data = response.data
            this.calculateScore()
        },
        calculateScore() {
            this.response_data.forEach(element => {
                this.big_size += 1
                if (element.is_big_ten == true) {
                    this.big_true += 1
                }
                else if (element.is_big_ten == false) {
                    this.big_false += 1
                }
                else {
                    this.big_we_dont_know += 1
                }
            })
            // <!-- Good Item / Total Item * 100 = Score -->
            console.log("false" + this.big_false)
            console.log("size" + this.big_size)
            console.log("true" + this.big_true)
            console.log("we dont know "+ this.big_we_dont_know)
            console.log("score" + this.score)
            this.score = Math.round((this.big_false / (this.big_size - this.big_we_dont_know)) * 100)
        }
    },
    created() {
        this.barcodes = this.$store.state.multipleBarcodes
        console.log(this.barcodes)
        this.getAPIResponse()
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Avenir';
}

.container {
  display: flex;
  flex-direction: column;
  width:  100%;
  height: 100%;
}

.main {
  table-layout:fixed;
  flex: 5;
  overflow-y: auto;
}

.row {
  display: flex;
  justify-content: space-around;
  font-size: 8vw;
  width: 100%;
}

.footer {
  background-color: #272727;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: white;
  font-size: 12vw;
}

button.done-button {
  color: white;
  font-size: 12vw;
  background-color: #272727;
  border-radius: 16px;
  margin-right: 20px;
  padding: 1vw;
}
</style>
