<template>
  <div class="main-layout">
    <TheHeader />
    <div class="main-content">
      <TheNav class="nav" />
      <TheView class="view" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {
    TheHeader: () => import("./TheHeader"),
    TheNav: () => import("./TheNav"),
    TheView: () => import("./TheView"),
  },
}
</script>
