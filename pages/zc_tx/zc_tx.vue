<template>
	<view style="padding-top: 48rpx;">
		<view class="main">
			<view>提币数量</view>
			<view><input type="number" value="" placeholder="请输入提现数量" /></view>
			<view>可用52412.3695积分</view>
		</view>
		<view class="main_leixing">
			<view>
				<view>链类型</view>
				<view>ERC20</view>
			</view>
			<view class="lx_fg"></view>
			<view class="lx_b">
				<view>提币地址</view>
				<view>ycxzsgb32hhcx63zcvbnf6dw
areq3areq3</view>
			</view>
		</view>
		<view class="main_ssf">
			<view>
				<view>手续费</view>
				<view>12.3651265</view>
			</view>
			<view class="lx_fg"></view>
			<view>
				<view>到账数量</view>
				<view>12542.3651265</view>
			</view>
		</view>
		<view class="but">
			提币
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
	.main_ssf{
		width:690rpx;
		height:200rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 30rpx rgba(153,153,153,0.3);
		opacity:1;
		border-radius:16rpx;
		margin: auto;
		margin-top: 20rpx;
		padding-top: 40rpx;
	}
	.main_ssf>view{
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		font-size:30rpx;
		font-family:Source Han Sans CN;
		font-weight:500;
		color:rgba(51,51,51,1);
		opacity:1;
	}
	
	.main_ssf>view:nth-child(3){
		margin-top: 40rpx;
	}
	.main_ssf>view>view:nth-child(1){
		font-weight:550;
	}
	.lx_fg{
		width:580rpx;
		height:2rpx;
		background-color: rgba(239,239,239,1);
		opacity:1;
		margin: auto;
		margin-top: 40rpx;
	}
	.main_leixing{
		width:690rpx;
		height:244rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 30rpx rgba(153,153,153,0.3);
		opacity:1;
		border-radius:16rpx;
		margin: auto;
		margin-top: 20rpx;
		padding-top: 40rpx;
	}
	.lx_b{
		margin-top: 39rpx;
	}
	.lx_b>view:nth-child(1){
	   width: 350rpx;
	}
	
	.lx_b>view:nth-child(2){
		text-align: right;
	}
	.main_leixing>view{
		display: flex;
		justify-content:  space-between;
		font-size:30rpx;
		font-family:Source Han Sans CN;
		font-weight:500;
		color:rgba(51,51,51,1);
		opacity:1;
		padding: 0 30rpx;
	}
	.main_leixing>view>view:nth-child(1){
		
		font-weight:550;
	}
	.footer {
		width: 690rpx;
		height: 214rpx;
		background: rgba(245, 245, 249, 1);
		opacity: 1;
		margin: auto;
		margin-top: 200rpx;
	}

	.footer>view {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		width: 640rpx;
		margin: auto;
	}

	.footer>view:nth-child(1) {
		padding-top: 50rpx;
	}

	.footer>view:nth-child(2) {
		margin-top: 20rpx;
	}

	.but {
		width: 690rpx;
		height: 88rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 49rpx;
		line-height: 88rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 88rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin: auto;
		margin-top: 20rpx;
		margin-top: 120rpx;
		text-align: center;
	}

	.but>view:nth-child(1) {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
	}

	.but>view:nth-child(2) {
		
	}

	.main {
		width: 690rpx;
		height: 257rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
	}

	.main>view {
		margin-left: 30rpx;
	}

	.main>view:nth-child(1) {
		padding-top: 40rpx;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.main>view:nth-child(2) {
		margin-top: 30rpx;
	}

	.main>view:nth-child(3) {
		margin-top: 30rpx;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
	}

	input {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
		color: #000000;
	}
</style>
