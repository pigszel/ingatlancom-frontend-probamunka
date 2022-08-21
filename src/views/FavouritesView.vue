<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3">
        <tab-bar />
      </div>

      <div class="col-12 col-lg-9">
        <page-title-bar title="Kedvencek" :subtitle="pageTitleBarSubtitle" />
        <sort-bar :sort-by="sortBy" @change-sort-by="changeSortBy" />

        <ad-list-item
          v-for="adItem in orderedAds"
          :key="`adListItem_${adItem.adId}`"
          :ad-item="adItem"
          show-date-added
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import listings from '@/mockData/listings.json'
import AdListItem from '@/components/AdListItem.vue'
import PageTitleBar from '@/components/PageTitleBar.vue'
import SortBar from '@/components/SortBar.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'FavouritesView',

  components: {
    AdListItem,
    PageTitleBar,
    SortBar,
    TabBar,
  },

  data() {
    return {
      ads: [...listings.ads],
      sortBy: 'address',
    }
  },

  computed: {
    orderedAds() {
      const filteredAds = [...this.ads].reduce((accumulator, item) => {
        const foundFavItem = this.favourites.find(
          (fav) => fav.adId === item.adId
        )
        if (foundFavItem) {
          accumulator.push({
            ...item,
            dateAdded: foundFavItem.dateAdded,
          })
        }
        return accumulator
      }, [])

      if (this.sortBy === 'dateAdded') {
        return filteredAds.sort((a, b) =>
          a?.[this.sortBy] > b?.[this.sortBy] ? 1 : -1
        )
      } else {
        return filteredAds.sort((a, b) =>
          a?.[this.sortBy].localeCompare(b?.[this.sortBy])
        )
      }
    },

    pageTitleBarSubtitle() {
      return this.orderedAds ? `${this.orderedAds.length} db` : null
    },

    ...mapGetters(['favourites']),
  },

  methods: {
    changeSortBy(key) {
      this.sortBy = key
    },
  },
}
</script>
