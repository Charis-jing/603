<template>
	<view style="padding-top: 30rpx;">
		<view class="main">
			<view>
				<image src="../../static/img/shop/005.png" mode=""></image>
			</view>
			<view class="main_a">
				<view>陀螺软件<span>18634896574</span></view>
				<view>河南省郑州市管城区东风南路和榆林北路交叉口
					100米绿地中心双子塔</view>
			</view>
		</view>
		<view class="main_top">
			<view class="top_a">
				<view>
					<image src="../../static/img/shop/004.png" mode=""></image>
				</view>
				<view class="top_title">
					<view>芬兰旗舰店</view>
					<view>
						<image src="../../static/img/money/you.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="top_b">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="topb_a">
					<view>红旗可爱夏季珊瑚绒欧美风迷你定制家庭装透气凉爽</view>
					<view>
						<view>￥1299</view>
						<view>×1</view>
					</view>
				</view>
			</view>
			<view class="money">
				<view>订单金额</view>
				<view>￥1299</view>
			</view>
		</view>
		<view class="main_body">
			<view class="body_title">订单信息</view>
			<view class="fgx"></view>
			<view class="body_list">
				<view>订单创建时间</view>
				<view>2020.04.08 14:10</view>
			</view>
			<view class="body_list">
				<view>订单编号</view>
				<view>564656568956</view>
			</view>
			<view class="body_list">
				<view>快递名称</view>
				<view>圆通快递</view>
			</view>
			<view class="body_list">
				<view>快递单号</view>
				<view>4565646543165465 <span>复制</span></view>
			</view>
			<view class="body_list">
				<view>发货时间</view>
				<view>2020-12-31 12:24:45</view>
			</view>
			<view class="body_list">
				<view>成交时间</view>
				<view>2020-12-31 12:24:45</view>
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
	.body_list span{
		font-size:28rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(246,17,55,1);
		opacity:1;
		margin-left: 10rpx;
	}
	.main {
		width: 690rpx;
		height: 188rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-bottom: 30rpx;
		display: flex;
		text-align: left;
	
	}
	.main_a{
		margin-top: 30rpx;
		margin-left: 20rpx;
	}
	.main_a>view:nth-child(1) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.main_a>view:nth-child(2) {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-top: 22rpx;
	}

	.main_a span {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-left: 28rpx;
	}

	.main image {
		width: 60rpx;
		height: 60rpx;
		margin-top: 64rpx;
		margin-left: 30rpx;
	}

	.body_list {
		display: flex;
		justify-content: space-between;
		width: 630rpx;
		margin: 30rpx 0;
	}

	.body_list>view:nth-child(1) {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.body_list>view:nth-child(2) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.fgx {
		height: 2rpx;
		background: rgba(241, 241, 241, 1);
		opacity: 1;
	}

	.body_title {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.main_body>view {
		padding: 0 30rpx;
		margin-top: 25rpx;
	}

	.main_body {
		width: 690rpx;
		height: 510rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		margin: auto;
		margin-top: 20rpx;
		padding-top: 1rpx;
	}

	.money {
		width: 630rpx;
		margin: auto;
		display: flex;
		justify-content: space-between;
		margin-top: 24rpx;
	}

	.money>view:nth-child(1) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 42rpx;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
	}

	.money>view:nth-child(2) {
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		line-height: 61rpx;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
	}

	.over {
		float: right;
		margin-right: 20rpx;
		width: 160rpx;
		height: 60rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 15rpx;
		text-align: center;
		line-height: 60rpx;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 30rpx;
	}

	.topb_a {
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.topb_a>view:nth-child(2) {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		line-height: 48px;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.topb_a>view:nth-child(2)>view:nth-child(2) {
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.topb_a>view:nth-child(1) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.top_b {
		display: flex;
		width: 620rpx;
		margin: auto;
		margin-top: 40rpx;

	}

	.top_b image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 15rpx;
	}

	.main_top {
		width: 690rpx;
		height: 400rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		/* padding-top: 40rpx; */
		margin: auto;

	}

	.top_a {
		padding: 0 33rpx;
		display: flex;
		height: 32rpx;
		line-height: 32rpx;
		padding-top: 40rpx;
	}

	.top_title>view:nth-child(1) {
		margin: 0 25rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.top_a image {
		width: 32rpx;
		height: 32rpx;
	}

	.top_title {
		display: flex;
	}
</style>
