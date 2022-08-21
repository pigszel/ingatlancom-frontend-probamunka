<template>
  <ul class="nav nav-pills flex-column">
    <li class="nav-item">
      <a
        href="#"
        class="nav-link active d-inline-flex align-items-center"
        @click.prevent="handleClick"
      >
        <b-icon-arrow-left /> <span class="ml-2">Vissza</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { BIconArrowLeft } from 'bootstrap-vue'

export default {
  name: 'BackButton',

  components: {
    BIconArrowLeft,
  },

  methods: {
    handleClick() {
      this.$router.go(-1)
    },
  },
}
</script>
