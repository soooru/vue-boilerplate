<template>
  <div>
    <h3 class="py-2">Error</h3>
    <p class="small-text">{{ errMsg }}</p>
    <div @click="$router.push('/main')">메인으로 돌아가기</div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    errCode: {
      type: String,
    },
  },
  computed: {
    errMsg() {
      switch (this.errCode) {
        case "notFound":
        case "404":
          return "요청한 페이지가 존재하지 않거나 찾을 수 없습니다."
        case "network":
          return "네트워크 오류 또는 네트워크에 접속할 수 없습니다."
        default:
          return "알 수 없는 오류가 발생하였습니다."
      }
    },
  },
}
</script>
