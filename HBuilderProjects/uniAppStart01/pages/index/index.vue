<template>
	<view class="container">
		<text>{{ count }}</text>
		<button type="default" @click="countAdd()">+</button>
		<button type="default" @click="countCut()">-</button>
		<button type="default" @click="innerBlog()">跳转到Blog页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 0
			}
		},
		methods: {
			countAdd() {
				this.count++;
			},
			countCut() {
				this.count--;
			},
			innerBlog() {
				uni.navigateTo({
				    url: `../blog/blog?count=${this.count}`
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
