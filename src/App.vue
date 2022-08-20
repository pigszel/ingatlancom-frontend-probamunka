<template>
  <div id="app" class="d-flex flex-column justify-content-between vh-100">
    <AppHeader />

    <main class="mb-auto">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/Layout/AppFooter.vue'
import AppHeader from '@/components/Layout/AppHeader.vue'

export default {
  name: 'HomeView',

  components: {
    AppFooter,
    AppHeader,
  },
}
</script>
