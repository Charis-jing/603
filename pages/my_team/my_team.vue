<template>
	<view>
		<view class="main_top">
			<view class="top_title">
				<view class="act">一代</view>
				<view>二代</view>
			</view>
		</view>
		<view class="body">
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_b">
					<view>ID:6979988090</view>
					<view>
						<view>注册时间：2020.12.09 18：09：12</view>
						<view>激活时间：2020.12.09 18：09：12</view>
					</view>
				</view>
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
	.list_b {
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.list_b>view:nth-child(1) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.list_b>view:nth-child(2) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		margin-top: 30rpx;
	}

	.list image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.list {
		width: 690rpx;
		height: 200rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-top: 25rpx;
		display: flex;
	}

	.body {
		padding-top: 90rpx;
		margin-bottom: 20rpx;
	}

	.main_top {
		background-color: #F61137;
		height: 80rpx;
		position: fixed;
		top: 80rpx;
		width: 100%;
		z-index: 666;
	}

	.top_title {
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		height: 80rpx;
		border-radius: 24rpx 24rpx 0rpx 0rpx;
		padding-top: 10rpx;

		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		opacity: 1;
		line-height: 80rpx;
		color: rgba(102, 102, 102, 1);
	}

	.act {
		border-bottom: 6rpx solid #F61137;
		color: #F61137;
	}
</style>
