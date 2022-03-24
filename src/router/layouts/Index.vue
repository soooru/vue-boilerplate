<template>
  <div class="main-layout">
    <TheHeader />
    <div class="view">
      <TheView />
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {
    TheHeader: () => import("./TheHeader"),
    TheView: () => import("./TheView"),
  },
}
</script>
