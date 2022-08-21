<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3">
        <tab-bar />
      </div>

      <div class="col-12 col-lg-9">
        <page-title-bar title="Lista" :subtitle="pageTitleBarSubtitle" />

        <ad-list-item
          v-for="adItem in orderedAds"
          :key="`adListItem_${adItem.adId}`"
          :ad-item="adItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import listings from '@/mockData/listings.json'
import AdListItem from '@/components/AdListItem.vue'
import PageTitleBar from '@/components/PageTitleBar.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'ListView',

  components: {
    AdListItem,
    PageTitleBar,
    TabBar,
  },

  data() {
    return {
      ads: [...listings.ads],
    }
  },

  computed: {
    orderedAds() {
      return [...this.ads].sort((a, b) => a.address.localeCompare(b.address))
    },

    pageTitleBarSubtitle() {
      return this.ads ? `${this.ads.length} db` : null
    },
  },
}
</script>
