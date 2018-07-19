<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		test
	</div>
</template>

<script>
import homeHeader from './components/Header.vue'
import homeSwiper from './components/Swiper.vue'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style lang="css" scoped>
</style>
