<template>
  <div id="app" class="font-serif">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view :key="$route.fullpath" />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div",
    };
  },
};
</script>
