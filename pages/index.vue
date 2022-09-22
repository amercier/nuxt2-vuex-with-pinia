<template>
  <div>
    Vuex: {{ vuexStatus ?? 'OFF' }}<br />
    Pinia: {{ piniaStatus ?? 'OFF' }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      vuexStatus: 'status'
    }),

    piniaStatus() {
      return null
    }
  },

  mounted() {
    this.loadVuex()
  },

  methods: {
    ...mapActions({
      loadVuex: 'load'
    })
  }
}
</script>