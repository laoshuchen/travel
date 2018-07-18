<template>
	<div>
		<div class="header">
		<div class="header-left">
			<div class="iconfont back">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		输入城市/景点/游戏主题
	  </div>
		<div class="header-right">
		城市 <span class="iconfont arrow-icon">&#xe64a;</span>
	  </div>	
	</div>
	</div>
	
	<!-- scoped 只对当前组件有效 -->
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable.styl'
	.header
		display: flex
		height: .86rem
		background: $bg-color
		line-height: .86rem
		font-size: 16px
		color: #fff
		.header-left
			width: .64rem
			float: left
			.back
				text-align: center
				font-size: .2rem
		.header-input
			flex: 1
			background: #fff
			color: #ccc
			line-height: .64rem
			padding-left: .2rem
			height: .64rem
			margin-top: .12rem
			margin-left: .2rem 
			border-radius: .1rem
		.header-right
			width: 1.24rem
			float: right
			text-align: center
			.arrow-icon
				font-size: .24rem 
</style>