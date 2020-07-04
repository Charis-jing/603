<template>
	<view class="main">
		<view><image :src="state==0?'../../static/img/rz/002.png':'../../static/img/rz/001.png'" mode=""></image></view>
		<view  :style="state==1?'display:none':''">后台审核中...</view>
		<view :style="state==0?'display:none':''">审核成功</view>
		<view class="but":style="state==0?'display:none':''">进入店铺</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state:1
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.but{
		width:400rpx;
		height:88rpx;
		background:rgba(54,189,179,1);
		opacity:1;
		border-radius:49rpx;
		text-align: center;
		line-height: 88rpx;
		margin: auto;
		margin-top: 130rpx;
		font-size:32rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(255,255,255,1);
		opacity:1;
		}
	.main{
		
		text-align: center;
		padding-top: 130rpx;
	}
.main image{
	width: 180rpx;
	height: 180rpx;
}
.main>view:nth-child(2){
	/* width:18z0rpx; */
	height:34rpx;
	font-size:34rpx;
	font-family:Source Han Sans CN;
	font-weight:550;
	line-height:34rpx;
	color:rgba(255,153,52,1);
	opacity:1;
	margin: auto;
	margin-top: 43rpx;
}
.main>view:nth-child(3){
	/* width:18z0rpx; */
	height:34rpx;
	font-size:34rpx;
	font-family:Source Han Sans CN;
	font-weight:550;
	line-height:34rpx;
	color:#36BDB3;
	opacity:1;
	margin: auto;
	margin-top: 43rpx;
}
</style>
