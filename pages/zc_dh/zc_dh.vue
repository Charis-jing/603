<template>
	<view style="padding-top: 48rpx;">
		<view class="main">
			<view>兑换数量</view>
			<view><input type="number" value="" placeholder="请输入兑换数量"/></view>
			<view>约等于251433积分</view>
		</view>
		<view class="dhb">兑换比率为1USDT≈7积分</view>
		<view class="but">
			提币
			<!-- <view>预计兑换0.00元</view> -->
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
			onNavigationBarButtonTap() {
				console.log("跳转")
			},
		}
	}
</script>

<style>
	.footer{
		width:690rpx;
		height:214rpx;
		background:rgba(245,245,249,1);
		opacity:1;
		margin: auto;
		margin-top: 200rpx;
	}
	.footer>view{
		font-size:26rpx;
		font-family:Source Han Sans CN;
		color:rgba(153,153,153,1);
		opacity:1;
		width: 640rpx;
		margin: auto;
	}
	.dhb{
		font-size:26rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(153,153,153,1);
		opacity:1;
		margin-left: 60rpx;
		margin-top: 30rpx;
	}
	.footer>view:nth-child(1){
		padding-top: 50rpx;
	}
	.footer>view:nth-child(2){
		margin-top: 20rpx;
	}
	.but{
		text-align: center;
		width:690rpx;
		height:88rpx;
		background:rgba(246,17,55,1);
		opacity:1;
		border-radius:49rpx;
		line-height: 88rpx;
		font-size:32rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		line-height:88rpx;
		color:rgba(255,255,255,1);
		opacity:1;
		margin: auto;
		margin-top: 180rpx;
	}
	/* .but>view:nth-child(1){
		font-size:26rpx;
		font-family:Source Han Sans CN;
		font-weight:550;
		color:rgba(246,17,55,1);
		opacity:1;
	}
	.but>view:nth-child(2){
		
	} */
	.main {
		width: 690rpx;
		height: 257rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
	}
	.main>view{
		margin-left: 30rpx;
	}
	.main>view:nth-child(1){
		padding-top: 40rpx;
		font-size:30rpx;
		font-family:Source Han Sans CN;
		font-weight:550;
		color:rgba(51,51,51,1);
		opacity:1;
	}
	.main>view:nth-child(2){
		margin-top: 30rpx;
	}
	.main>view:nth-child(3){
		margin-top: 30rpx;font-size:26rpx;
font-family:Source Han Sans CN;
font-weight:400;
color:#F61137;
opacity:1;
	}
	input{
		font-size:40rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(206,206,206,1);
		opacity:1;
	}
</style>
