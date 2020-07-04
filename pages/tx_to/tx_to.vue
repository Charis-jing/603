<template>
	<view style="padding-top: 48rpx;">
		<view class="main">
			<view class="main_a">
				<view>手机号</view>
				<view>185****3621</view>
			</view>
			<view class="main_b"></view>
			<view class="main_c">
				<view>
					<view>验证码</view>
					<view><input type="text" value="" placeholder="请输入验证码" /></view>
				</view>
				<view>发送验证码</view>
			</view>
		</view>
		<view class="but">
			确认
		</view>
		<view class="footer">
			<view>每月号可提现。</view>
			<view>每月1号、3号可提现，每次提现金额不得少于12.36元，
				不得多于2563.32元。</view>
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
	.main_a {
		padding-top: 40rpx;
	}

	.main_c {
	margin-top: 40rpx;
	}
.main_b{
	
		width: 630rpx;
		height: 2rpx;
		background-color: #EFEFEF;
		margin: auto;
		opacity: 1;
		margin-top: 40rpx;
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
		text-align: center;

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
		margin-top: 120rpx;
	}
 .main_c>view:nth-child(2){
	 width:160rpx;
	 height:60rpx;
	 background:rgba(246,17,55,1);
	 opacity:1;
	 line-height: 60rpx;
	 border-radius: 10rpx;
	 font-size:26rpx;
	 font-family:Source Han Sans CN;
	 font-weight:500;
	 color:rgba(255,255,255,1);
	 opacity:1;
	 text-align: center;
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
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		width: 630rpx;
	}

	.main_c>view:nth-child(1) {
		display: flex;
		justify-content: space-between;
	}

	input {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: black;
		opacity: 1;
 margin-left: 30rpx;
	}
</style>
