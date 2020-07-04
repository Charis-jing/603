<template>
	<view>
		<view class="main_top">
			<view class="top">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view>积分明细</view>
				<view>陀螺旗舰店</view>
				<view>25451214.36</view>
				<view>商铺积分</view>
				<view>提现</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 16rpx;
	}

	.top {
		background-image: url(../../static/img/shop/011.png);
		background-size: 100% 100%;
		height: 715rpx;
		width: 100%;
		text-align: center;
	}

	.main_top {
		height: 300rpx;
		background-image: linear-gradient(#F61137, #ffffff);
		opacity: 1;
		padding-top: 30rpx;
	}

	.top>view:nth-child(2) {
		font-size: 22rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		width: 130rpx;
		height: 34rpx;
		background: rgba(239, 239, 239, 1);
		opacity: 1;
		border-radius: 17rpx;
		margin-left: 550rpx;
		position: relative;
		top: -25rpx;
	}

	.top>view:nth-child(3) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.top>view:nth-child(4) {
		font-size: 50rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		margin-top: 80rpx;
	}

	.top>view:nth-child(5) {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		margin-top: 16rpx;
	}

	.top>view:nth-child(6) {
		width: 630rpx;
		height: 88rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 49rpx;
		margin: auto;
		text-align: center;
		line-height: 88rpx;
		margin-top: 94rpx;
		font-size:32rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(255,255,255,1);
		opacity:1;
	}
</style>
