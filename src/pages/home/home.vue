<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
</template>

<script>
import homeHeader from './components/Header.vue'
import homeSwiper from './components/Swiper.vue'
import homeIcons from './components/icons.vue'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>

<style lang="css" scoped>
</style>
