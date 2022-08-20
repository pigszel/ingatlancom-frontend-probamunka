<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-3">
        <tab-bar />
      </div>

      <div class="col-12 col-lg-9">
        <page-title-bar title="Lista" :subtitle="pageTitleBarSubtitle" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitleBar from '@/components/PageTitleBar.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'ListView',

  components: {
    PageTitleBar,
    TabBar,
  },

  data() {
    return {
      ads: [...listings.ads],
    }
  },

  computed: {
    pageTitleBarSubtitle() {
      return this.ads ? `${this.ads.length} db` : null
    },
  },
}
</script>
