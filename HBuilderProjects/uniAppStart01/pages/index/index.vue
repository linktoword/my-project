<template>
	<view class="container">
		<MySwiper :item-list="itemList"></MySwiper>
		<view class="tip-text">
			<text space="emsp">全 平 台 运 营</text>
		</view>
		<button type="primary" size="mini" plain disabled loading>button</button>
	</view>
</template>

<script>
	import MySwiper from "../../my-component/MySwiper.vue"
	export default {
		components:{
			MySwiper
		},
		data() {
			return {
				itemList: [
					{
						id: 0,
						src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2919367921,882481424&fm=15&gp=0.jpg"
					},
					{
						id: 1,
						src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1097956476,1866091301&fm=15&gp=0.jpg"
					},
					{
						id: 2,
						src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3341113877,950244982&fm=26&gp=0.jpg"
					}
				]
			}
		},
		onLoad: function() {
			console.log("onload");
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.container {
		font-size: 14px;
		line-height: 24px;
		.tip-text {
			position: absolute;
			padding: 20px;
			color: red;
			font-size: 16px;
		}
		.tip-text::after {
			content: "";
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			width: 10px;
			height: 10px;
			border: 2px solid transparent;
			border-top-color: red;
			border-left-color: red;
		}
		.tip-text::before {
			content: "";
			display: inline-block;
			position: absolute;
			right: 0;
			bottom: 0;
			width: 10px;
			height: 10px;
			border: 2px solid transparent;
			border-bottom-color: red;
			border-right-color: red;
		}
	}
</style>
