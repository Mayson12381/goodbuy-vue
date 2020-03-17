<template>
    <div>
        <HeaderBar></HeaderBar>
        <div class="container">
        <ul>
        <template v-for="(data, index) in response_data">
                <!---  Has to be set to barcode --> 
    <!-- :to="{ path: '/tableproductview/' + data.fields.code }" -->

                <button
                @click="isProductInfoActive = true, 
                product = data.fields"
                :key="index"
                class="router-style">
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
        </ul>
        </div>
        <h3 class="footer">Score: {{ score }}</h3>
    </div>
</template>
<script>
import FeedbackService from '@/FeedbackService'
import InfoSlideUp from '@/components/product/info/InfoSlideUp.vue'
import HeaderBar from '@/components/intro/IntroViewHeaderBar.vue'

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
    .router-style {
        text-decoration: none;
    }
    .router-style:visited {
        color: black;
    }
    .is-big-ten {
       margin-left: 80%;
    }
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: red;
        color: white;
        text-align: center;
    }
</style>