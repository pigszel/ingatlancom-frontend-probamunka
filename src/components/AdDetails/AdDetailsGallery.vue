<template>
  <div class="row mb-5">
    <div class="col-12">
      <div class="gallery">
        <div
          v-for="item in 4"
          :key="`adGalleryItem_${item}`"
          class="gallery__item"
        >
          <img
            :src="selectedAd.image"
            alt=""
            class="gallery__image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdDetailsGallery',

  props: {
    selectedAd: {
      type: Object,
      required: true,
      default: () => null,
    },
  },
}
</script>
