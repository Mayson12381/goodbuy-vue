<template>
    <div class="feature-view">
        <FeatureViewHeaderBar />
        <FeatureViewContent>
            <slot slot="karma-fridge"></slot> 
            <slot slot="instant-feedback"></slot> 
        </FeatureViewContent>
    </div>
</template>

<script>
import FeatureViewHeaderBar from './FeatureViewHeaderBar'
import FeatureViewContent from './FeatureViewContent'

export default {
    name: 'FeatureView',
    components: {
        FeatureViewHeaderBar,
        FeatureViewContent
    }
}
</script>

<style scoped>

</style>