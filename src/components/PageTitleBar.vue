<template>
  <section
    class="box box--rounded box--shrink d-flex align-items-baseline justify-content-between"
  >
    <h1 class="m-0">{{ title }}</h1>
    <span v-if="subtitle" class="text-muted">{{ subtitle }}</span>
  </section>
</template>

<script>
export default {
  name: 'PageTitleBar',

  props: {
    title: {
      type: String,
      required: true,
      default: () => null,
    },

    subtitle: {
      type: String,
      required: false,
      default: () => null,
    },
  },
}
</script>
