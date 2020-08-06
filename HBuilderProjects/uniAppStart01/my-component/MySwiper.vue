<template>
	<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item v-for="item in itemList" :key="item.id">
			<image class="image-item" :src="item.src"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:{
			itemList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		width: 750rpx;
		height: 375rpx;
		.image-item {
			width: 100%;
			height: 100%;
		}
	}
</style>
