<template>
  <router-link
    :to="`/hirdetes/${adItem.adId}`"
    class="box box--rounded p-0 ad-list-item"
  >
    <div class="ad-list-item__media">
      <img
        :src="adItem.image"
        :alt="adItem.address"
        class="ad-list-item__image"
        loading="lazy"
      />
    </div>

    <div class="ad-list-item__content">
      <header class="ad-list-item__header">
        <div>
          <h3 class="ad-list-item__title">{{ adItem.address }}</h3>
          <p class="ad-list-item__text">
            {{ adItem.price | currency(adItem.currency) }}
          </p>
        </div>

        <div>
          <fav-button :is-favourite="isFavourite" :ad-id="adItem.adId" />
        </div>
      </header>

      <footer v-if="showDateAdded && adItem.dateAdded" class="mt-4">
        <b-icon-calendar-week /> {{ readableDateAdded }}
      </footer>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import { BIconCalendarWeek } from 'bootstrap-vue'
import FavButton from '@/components/FavButton.vue'

export default {
  name: 'AdListItem',

  components: {
    BIconCalendarWeek,
    FavButton,
  },

  props: {
    adItem: {
      type: Object,
      required: true,
      default: () => null,
    },

    showDateAdded: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  computed: {
    isFavourite() {
      return !!this.favourites.find((item) => item.adId === this.adItem.adId)
    },

    readableDateAdded() {
      if (!this.adItem?.dateAdded) return

      const date = new Date(this.adItem.dateAdded)
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`
    },

    ...mapGetters(['favourites']),
  },
}
</script>
