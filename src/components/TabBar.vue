<template>
  <nav class="box box--rounded">
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link to="/" class="nav-link d-flex align-items-center"
          ><b-icon-list-ul /> <span class="ml-2">Lista</span></router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/kedvencek" class="nav-link d-flex align-items-center"
          ><b-icon-star-fill /> <span class="ml-2">Kedvencek</span></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { BIconListUl, BIconStarFill } from 'bootstrap-vue'

export default {
  name: 'TabBar',

  components: {
    BIconListUl,
    BIconStarFill,
  },
}
</script>
