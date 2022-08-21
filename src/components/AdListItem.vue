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
        <h3 class="ad-list-item__title">{{ adItem.address }}</h3>
        <p class="ad-list-item__text">
          {{ adItem.price | currency(adItem.currency) }}
        </p>
      </header>

      <div>
        <fav-button :is-favourite="isFavourite" :ad-id="adItem.adId" />
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import FavButton from '@/components/FavButton.vue'

export default {
  name: 'AdListItem',

  components: {
    FavButton,
  },

  props: {
    adItem: {
      type: Object,
      required: true,
      default: () => null,
    },
  },

  computed: {
    isFavourite() {
      return !!this.favourites.find((item) => item.adId === this.adItem.adId)
    },

    ...mapGetters(['favourites']),
  },
}
</script>
