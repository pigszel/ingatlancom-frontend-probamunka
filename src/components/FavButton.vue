<template>
  <button
    type="button"
    :class="['fav-button', { 'fav-button--filled': isFavourite }]"
    @click.prevent="handleClick"
  >
    <component :is="isFavourite ? 'b-icon-star-fill' : 'b-icon-star'" />
  </button>
</template>

<script>
import { BIconStar, BIconStarFill } from 'bootstrap-vue'

export default {
  name: 'FavButton',

  components: {
    BIconStar,
    BIconStarFill,
  },

  props: {
    adId: {
      type: Number,
      required: true,
      default: () => null,
    },

    isFavourite: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  methods: {
    handleClick() {
      const method = this.isFavourite
        ? 'removeFromFavourites'
        : 'addToFavourites'
      const item = {
        adId: this.adId,
        dateAdded: Date.now(),
      }

      this.$store.dispatch(method, { item })
    },
  },
}
</script>
