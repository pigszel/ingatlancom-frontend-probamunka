<template>
  <section class="box box--rounded">
    <button
      v-for="(sort, sortIndex) in sortOptions"
      :key="`sortButton_${sortIndex}`"
      type="button"
      :class="['btn btn-light mr-2', { active: sort.key === sortBy }]"
      @click.prevent="handleClick(sort.key)"
    >
      <span class="mr-2">{{ sort.label }}</span> <b-icon-sort-down />
    </button>
  </section>
</template>

<script>
import { BIconSortDown } from 'bootstrap-vue'

export default {
  name: 'SortBar',

  components: {
    BIconSortDown,
  },

  props: {
    sortBy: {
      type: String,
      required: true,
      default: () => null,
    },
  },

  data() {
    return {
      sortOptions: [
        {
          key: 'address',
          label: 'Cím szerint',
        },

        {
          key: 'dateAdded',
          label: 'Hozzáadás dátuma szerint',
        },
      ],
    }
  },

  methods: {
    handleClick(key) {
      this.$emit('change-sort-by', key)
    },
  },
}
</script>
