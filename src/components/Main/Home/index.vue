<template>
  <div v-if="show">
    <div class="container-lg">
      <Apartment />
    </div>
    <div>
      <!-- <ListFood /> -->
    </div>
    <div>
      <Contact />
    </div>
  </div>
</template>

<script>
import Apartment from "./Apartment/index.vue";
import ListFood from "./ListFood/index.vue";
import Contact from "./Contact/index.vue";
import { ref, defineComponent } from "vue";
export default {
  components: {
    Apartment,
    ListFood,
    Contact,
  },
  setup() {
    const show = ref(false);
    setTimeout(() => {
      show.value = true
    }, 0);
    return {
      show,
    };
  },
};
</script>

<style></style>
