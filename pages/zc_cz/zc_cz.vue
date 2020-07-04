<template>
	<view>
		<view class="main_top">
			<view>充币地址</view>
			<view>
				<view>areq3ycxzsgb32hhcx63zcvbnf6dw</view>
				<view>复制</view>
			</view>
			<view>
				<image src="../../static/img/cz/001.png" mode=""></image>
			</view>
			<view class="top_but">截图扫描二维码</view>
		</view>
		<view class="main_pz">
			<view class="pz_a">
				<view>充值数量</view>
				<view><input type="number" placeholder="请输入充值数量"></view>
			</view>
			<view class="pz_fg"></view>
			<view class="pz_b">
				<view>上传凭证</view>
				<view>
					<image src="../../static/img/cz/002.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main_bz">
			<view>备注</view>
			<view><textarea value="" placeholder="请输入备注信息" /></view>
		</view>
		<view class="but">提交</view>
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

<style>.but{
	width:690rpx;
	height:88rpx;
	background:rgba(255,255,255,1);
	opacity:1;
	border-radius:49px;
	line-height: 88rpx;
	text-align: center;
	margin: auto;
	margin-top: 80rpx;
	font-size:32rpx;
	font-family:Source Han Sans CN;
	font-weight:550;
	color:rgba(246,17,55,1);
	opacity:1;
	margin-bottom: 100rpx;
}
	textarea{
     padding: 25rpx;
	 width: 500rpx;
	}
	.main_bz{
		width:690rpx;
		height:280rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 30rpx rgba(153,153,153,0.3);
		opacity:1;
		border-radius:16rpx;
		margin: auto;
		margin-top: 20rpx;
		display: flex;
	}
	.main_bz>view:nth-child(1){
		margin-left: 30rpx;
		padding-top: 70rpx;
		font-size:30rpx;
		font-family:Source Han Sans CN;
		font-weight:550;
		color:rgba(51,51,51,1);
		opacity:1;
	}
	.main_bz>view:nth-child(2){
		width:550rpx;
		height:200rpx;
		background:rgba(255,255,255,1);
		border:2rpx solid rgba(206,206,206,1);
		opacity:1;
		border-radius:16rpx;
		margin-left: 30rpx;
		margin-top: 40rpx;
	}
	.pz_a {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		padding-top: 40rpx;
		font-weight:550;
	}
	.pz_b{
		display: flex;
		font-size:30rpx;
		font-family:Source Han Sans CN;
		font-weight:550;
		color:rgba(51,51,51,1);
		opacity:1;
		margin-left: 30rpx;margin-top: 40rpx;
	}
	.pz_fg{
		
		width:630rpx;
		height:2rpx;
		background-color:rgba(239,239,239,1) ;
		margin: auto;
		opacity:1;margin-top: 40rpx;
	}
.pz_b image{
	width: 168.39rpx;
	height: 168.39rpx;
	margin-left: 110rpx;
}
	.pz_a input {
		width: 240rpx;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
	}

	.main_pz {
		width: 690rpx;
		height: 359rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-top: 20rpx;
	}

	.main_top {
		text-align: center;
		background-color: #FFFFFF;
		width: 690rpx;
		height: 608rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
	}

	.main_top>view:nth-child(1) {
		padding-top: 40rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.main_top>view:nth-child(2) {
		display: flex;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 42px;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		justify-content: space-between;
		padding: 0 50rpx;

	}

	.main_top>view:nth-child(2)>view:nth-child(2) {
		color: #F61137;
	}

	.main_top image {
		width: 300rpx;
		height: 300rpx;
	}

	.top_but {
		width: 300rpx;
		height: 60rpx;
		border: 2rpx solid rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 8rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		line-height: 60rpx;
		margin: 0 auto;
		margin-top: 30rpx;
	}

	page {
		background: linear-gradient(180deg, rgba(246, 17, 55, 1) 0%, rgba(252, 52, 85, 1) 100%);
	}
</style>
