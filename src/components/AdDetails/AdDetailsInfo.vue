<template>
  <div class="row">
    <div class="col-12">
      <article class="box box--rounded">
        <div class="row">
          <header
            class="box__header d-flex align-items-center justify-content-between col-12"
          >
            <div>
              <h2>{{ selectedAd.address }}</h2>
              <h3>
                {{ selectedAd.price | currency(selectedAd.currency) }}
              </h3>
            </div>

            <div>
              <fav-button
                :is-favourite="isFavourite"
                :ad-id="selectedAd.adId"
              />
            </div>
          </header>

          <div class="col-12 mb-3">
            <b-icon-calendar-week /> {{ selectedAd.uploadDate }}
          </div>

          <div class="col-12 mb-5">
            <p>{{ selectedAd.description }}</p>
          </div>

          <footer class="col-12 col-lg-6 offset-lg-6 col-xl-4 offset-xl-8">
            <button
              class="btn btn-primary btn-lg btn-block"
              v-b-modal.adDetailsContactModal
            >
              Kapcsolatfelvétel
            </button>
          </footer>
        </div>
      </article>
    </div>

    <b-modal id="adDetailsContactModal" title="Kapcsolat" ok-only>
      <p class="mb-2">
        Email:
        <a :href="`mailto:${selectedAd.contact.email}`">{{
          selectedAd.contact.email
        }}</a>
      </p>

      <p>
        Telefon:
        <span
          v-for="(phone, phoneIndex) in selectedAd.contact.parsedPhoneNumbers"
          :key="`phoneItem_${phoneIndex}`"
        >
          <a :href="`tel:${phone}`">{{ phone | phoneNumber }}</a>
          <span
            v-if="phoneIndex + 1 < selectedAd.contact.parsedPhoneNumbers.length"
            >,
          </span>
        </span>
      </p>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BModal, BIconCalendarWeek } from 'bootstrap-vue'
import FavButton from '@/components/FavButton.vue'

export default {
  name: 'AdDetailsInfo',

  components: {
    BIconCalendarWeek,
    BModal,
    FavButton,
  },

  props: {
    selectedAd: {
      type: Object,
      required: true,
      default: () => null,
    },
  },

  computed: {
    isFavourite() {
      return !!this.favourites.find(
        (item) => item.adId === this.selectedAd.adId
      )
    },

    ...mapGetters(['favourites']),
  },
}
</script>
