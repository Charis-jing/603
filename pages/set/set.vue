<template>
	<view style="padding-top: 35rpx;">
		<view class="list" @click="toPage('/pages/About/About')">
			<view>关于我们</view>
			<view><image src="../../static/img/money/you.png" mode=""></image></view>
		</view>
		<view class="list_fg"></view>
		<view class="list" style="margin-top: 29rpx;" @click="toPage('/pages/feedback/feedback')">
			<view>意见反馈</view>
			<view><image src="../../static/img/money/you.png" mode=""></image></view>
		</view>
		<view class="list_fg"></view>
		<view class="out">退出</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//跳转页面
			toPage(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	.list{
		display: flex;
		justify-content: space-between;
		padding: 0 24rpx;
		font-size:30rpx;
		font-family:Source Han Sans CN;
		font-weight:550;
		color:rgba(51,51,51,1);
		opacity:1;
	}
.list image{
	width:30rpx;
	height:30rpx;
}
.list_fg{
	width:690rpx;
	height:2rpx;
	background:rgba(245,245,249,1);
	opacity:1;	margin: auto;
	margin-top: 30rpx;
}
.out{
	width:640rpx;
	height:88rpx;
	background:rgba(246,17,55,1);
	opacity:1;
	border-radius:44rpx;
	margin: auto;
	line-height: 88rpx;
	text-align: center;
	margin-top: 80rpx;font-size:32rpx;
font-family:Source Han Sans CN;
font-weight:500;
color:rgba(255,255,255,1);
opacity:1;
}
</style>
