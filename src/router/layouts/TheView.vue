<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
export default {
  name: "TheView",
}
</script>
<style scoped></style>
