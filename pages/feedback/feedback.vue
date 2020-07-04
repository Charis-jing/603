<template>
	<view style="padding-top: 1rpx;">
		<view class="main_top">
			<textarea value="" placeholder="请详细填写您遇到的问题，操作步骤，便于我们查找原因..." />
		</view>
		<view class="main_a">截图</view>
		<view class="main_b">尽量提供截图，便于我们快速定位问题。最多5张，限制每个5.0MB以内，仅支持jpg、png。</view>
		<view class="image"><image src="../../static/img/shop/010.png" mode=""></image></view>
		<view class="main_a">联系方式</view>
		<view class="main_b">如果您愿意参与问题调试，请您留下您的联系方式：QQ/微信，如有必要，我们回联系您。</view>
		<view class="input"><input type="number" value=""placeholder="请输入您的联系方式..." /></view>
		<view class="footer">提交</view>
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
	.footer{
		width:690rpx;
		height:88rpx;
		background:rgba(246,17,55,1);
		opacity:1;
		border-radius:44rpx;
		margin: auto;
		margin-top: 123rpx;
		line-height: 88rpx;
		font-size:32rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(255,255,255,1);
		opacity:1;
		text-align: center;
		}
	.input{
		width:690rpx;
		height:66rpx;
		border:2rpx solid rgba(206,206,206,1);
		opacity:1;
		border-radius:10rpx;
		margin: auto;
		margin-top: 30rpx;
		line-height: 66rpx;
	}
	input{
		padding-top: 15rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
font-size:26rpx;
	}
	.main_a{
		width: 690rpx;
		margin: auto;
		margin-top: 40rpx;
		font-size:34rpx;
		font-family:Source Han Sans CN;
		font-weight:550;
		color:rgba(51,51,51,1);
		opacity:1;
	}
	.main_b{
		
			width: 690rpx;
			margin: auto;
			font-size:24rpx;
			font-family:Source Han Sans CN;
			font-weight:400;
			color:rgba(153,153,153,1);
			opacity:1;
			margin-top: 30rpx;
	}
	.image{
		width: 690rpx;
		margin: auto;
		margin-top: 30rpx;
	}
	image{
		width: 220rpx;
		height: 220rpx;
	}
	.main_top{
		width:690rpx;
		height:200rpx;
		border:2rpx solid rgba(206,206,206,1);
		opacity:1;
		border-radius:16rpx;
		margin: auto;
		}
.main_top textarea{
		padding:30rpx;
		font-size:26rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		/* color:rgba(206,206,206,1); */
		opacity:1;
}
</style>
