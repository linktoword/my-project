<template>
	<view>
		我是Blog页面
		<text>{{ count }}</text>
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
			
		},
		onLoad(option) {
			console.log(option);
			this.count = option.count;
		}
	}
</script>

<style>

</style>
