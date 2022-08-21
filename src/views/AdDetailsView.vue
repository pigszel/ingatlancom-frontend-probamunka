<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 col-lg-3 mb-3">
        <back-button />
      </div>

      <div class="col-12 col-lg-9">
        <page-title-bar title="Részletek" />
      </div>
    </div>

    <ad-details-gallery v-if="selectedAd" :selected-ad="selectedAd" />
    <ad-details-info v-if="selectedAd" :selected-ad="selectedAd" />
  </div>
</template>

<script>
import listings from '@/mockData/listings.json'
import AdDetailsGallery from '@/components/AdDetails/AdDetailsGallery.vue'
import AdDetailsInfo from '@/components/AdDetails/AdDetailsInfo.vue'
import BackButton from '@/components/BackButton.vue'
import PageTitleBar from '@/components/PageTitleBar.vue'

export default {
  name: 'AdDetailsView',

  components: {
    AdDetailsGallery,
    AdDetailsInfo,
    BackButton,
    PageTitleBar,
  },

  data() {
    return {
      ads: [...listings.ads],
      selectedAd: null,
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      this.getSelectedAd()
    },

    getSelectedAd() {
      if (!this.$route?.params?.adId) return

      this.selectedAd = this.ads.find(
        (ad) => ad.adId === Number(this.$route.params.adId)
      )
    },
  },
}
</script>
