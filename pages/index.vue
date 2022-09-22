<template>
  <div>
    Vuex: {{ vuexStatus ?? "OFF" }}<br />
    Pinia: {{ piniaStatus ?? "OFF" }}
  </div>
</template>

<script>
import {
  mapActions as mapVuexActions,
  mapGetters as mapVuexGetters,
} from "vuex";
import {
  mapActions as mapPiniaActions,
  mapState as mapPiniaState,
} from "pinia";
import { useMainStore } from "../store";

export default {
  computed: {
    ...mapVuexGetters({
      vuexStatus: "status",
    }),

    ...mapPiniaState(useMainStore, {
      piniaStatus: "status",
    }),
  },

  mounted() {
    this.loadVuex();
    this.loadPinia();
  },

  methods: {
    ...mapVuexActions({
      loadVuex: "load",
    }),

    ...mapPiniaActions(useMainStore, {
      loadPinia: "load",
    }),
  },
};
</script>
