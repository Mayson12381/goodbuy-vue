<template lang="html">
  <div class="feedback-view-back-button" data-cy="feedback-scan-again-button">
    <GButton @click="$emit('onClickScanAgain')">
      <slot slot="title">Scan Again</slot>
    </GButton>
    <GButton
      v-if="isAddInfoShown"
      black
      @click="$emit('onClickAddInfoButton')"
    >
      <slot slot="title">Add Info</slot>
    </GButton>
  </div>
</template>

<script>
import GButton from '@/components/ui/GButton.vue'

export default {
  name: 'FeedbackViewBackButton',
  components: {
    GButton,
  },
  props: {
    isAddInfoShown: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="css" scoped>
.feedback-view-back-button {
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>
