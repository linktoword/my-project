<template>
	<view>
		我是Blog页面
		<button type="default" @click="uploadImg">上传图片</button>
		<view class="">
			<image v-for="item in imgList" :key="item" :src="item" @click="previewImg(item)" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: []
			}
		},
		methods: {
			uploadImg() {
				uni.chooseImage({
					count: 5,
					sizeType: "original",
					success: (res) => {
						console.log(res);
						this.imgList = res.tempFilePaths;
					}
				})
			},
			previewImg(item) {
				uni.previewImage({
					
				})
			}
		},
	}
</script>

<style>

</style>
