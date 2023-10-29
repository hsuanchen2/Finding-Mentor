<template>
  <div class="container">
    <div class="row">
      <img class="col col-4" src="@/../public/company-logo/google.png" alt="" />
      <img class="col col-4" src="@/../public/company-logo/google.png" alt="" />
      <img class="col col-4" src="@/../public/company-logo/google.png" alt="" />
      <img class="col col-4" src="@/../public/company-logo/google.png" alt="" />
    </div>
  </div>
</template>
<script>
import { ref, reactive, defineProps } from "vue";
const props = defineProps([]);
</script>
<style scoped lang="scss">
.container {
  .row {
    justify-content: space-around;
    img {
      width: 20%;
      cursor: pointer;
    }
  }
}
</style>
