<!-- <template>
    <div class="accordion-item" v-for="(data, index) in props.sidebarData" :key="index">
        <h2 class="accordion-header" :id="data.id">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#${data.id}`"
                aria-expanded="true" :aria-controls="`panelsStayOpen-collapse${data.id}`">
                {{ data.title }}
            </button>
        </h2>
        <div :id="`panelsStayOpen-collapse${data.id}`" class="accordion-collapse collapse show"
            :aria-labelledby="`panelsStayOpen-heading${data.id}`">
            <div class="accordion-body">
                <ul>
                    <li v-for="(field, index) in data.fieldData" :key="index">
                        <input :type="data.type" :id="field.id" :name="field.name">
                        <label :for="field.id">{{ field.title }}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, defineProps } from "vue";
const props = defineProps({
    sidebarData: {
        type: Array,
    }
})
</script>
<style lang="scss" scoped></style> -->