<template>
  <!-- <li>
    <div>
      <p>Message from: {{ props.firstName }} {{ props.lastName }}</p>
      <p>Sender's email: <a :href="emailLink">{{ email }}</a></p>
    </div>
    <p>Message: {{ message }}</p>
  </li> -->
  <tr>
    <td>{{ props.firstName }} {{ props.lastName }}</td>
    <td>{{ props.email }}</td>
    <td class="message">{{ props.message }}</td>
    <td>{{ fortMattedTime }}</td>
  </tr>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, defineProps, computed } from "vue";
const props = defineProps({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  receviedTime: {
    type: Number,
    required: true
  }
});
const emailLink = computed((): string => {
  return "mailto:" + props.email;
});

const fortMattedTime = computed(() => {
  const date = new Date(props.receviedTime);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}/${month}/${day}`;
})

</script>
<style scoped lang="scss">
.container {
  max-width: 1200px;
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid red;
}

.message {
  overflow-y: auto;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
}

td {
  color: $miner-text-color;
}

li {
  // margin: 1rem 0;
  // border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: $light-card-shadow;
  padding: 1rem;
  padding-left: 25px;
  padding-right: 25px;
}

a {
  // color: #3d008d;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  transition: .3s;
  color: $main-button-color;
}

a:hover,
a:active {
  color: $main-purple;

}

p {
  margin: 0.5rem 0 0 0;
}
</style>
