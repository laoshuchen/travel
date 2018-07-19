<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
    <home-recomend></home-recomend>
	</div>
</template>

<script>
import homeHeader from './components/Header.vue'
import homeSwiper from './components/Swiper.vue'
import homeIcons from './components/icons.vue'
import homeRecomend from './components/Recomend.vue'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecomend
  }
}
</script>

<style lang="css" scoped>
</style>
