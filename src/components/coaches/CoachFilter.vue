<template>
  <base-card>
    <h2>在轉職路上尋找業界前輩的幫助!</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">前端</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">後端</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">職涯諮詢</label>
    </span>
  </base-card>
</template>
<script setup>
import { ref, reactive, computed, defineEmits } from "vue";
const filters = reactive({
  frontend: true,
  backend: true,
  career: true,
});
const emits = defineEmits(["change-filter"]);

const setFilter = (event) => {
  const inputId = event.target.id;
  const isActive = event.target.checked;
  filters[inputId] = isActive;
  emits("change-filter", filters);
};
</script>
<style scoped lang="scss">
h2 {
  margin: 0.5rem 0;
  letter-spacing: 0.02em;
  color: #0a2540;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
  color: #425466;
  font-weight: 600;
}

.filter-option label:hover, .filter-option input:hover  {
  cursor: pointer;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
