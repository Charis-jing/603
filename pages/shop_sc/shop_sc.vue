<template>
	<view style="padding-top: 1rpx;padding-bottom: 20rpx;">
		<view class="top_b" v-for="item in list">
			<view>
				<image :src="!item.ImgList?'../../static/img/3.jpg':item.ImgList" mode=""></image>
			</view>
			<view class="topb_a">
				<view>{{item.Name}}</view>
				<view>
					<view>￥{{item.Price}}</view>
					<view class="xh">
						<image src="../../static/img/shop/006.png" mode=""></image>取消收藏
					</view>
				</view>
			</view>
		</view>
		<view v-show="!list" class="null_footer">
			<view>
				<image src="../../static/null.png" mode=""></image>
			</view>
			<view>暂无数据~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ''
			}
		},
		onLoad() {
			this.apiRequest('/QT/MallF/MyCollectGoodsList', (res) => {
				this.list = res.Data.list;
				console.log(res)
				// if(res.)
			}, 'GET')
		},
		methods: {

		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 2000)

			// _this.$refs.game.ontrueGetList() //初次加载第一个页面的请求数据
			console.log('下拉刷新四个组件公用的下拉刷新方法,根据在哪个页面下拉执行哪个页面的刷新方方法即可')
			console.log('如果想要自定义刷新的话，插件市场就有一个   非常好用也非常容易入手')
		}
	}
</script>

<style>
	.null_footer image {
		width: 300rpx;
		height: 300rpx;
	}

	.null_footer {
		padding-top: 50rpx;
		text-align: center;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.null_footer:nth-child(2) {
		margin-top: 67rpx;
	}

	.xh {
		width: 185rpx;
		height: 60rpx;
		border: 2rpx solid rgba(204, 204, 204, 1);
		opacity: 1;
		border-radius: 15rpx;
		line-height: 60rpx;
		font-size: 28rpx !important;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1) !important;
		opacity: 1;
		text-align: center;
		margin-top: 20rpx;
	}

	.xh image {
		width: 36rpx !important;
		height: 36rpx !important;
		position: relative;
		top: 6rpx;
		margin-right: 12rpx;
	}

	.topb_a {
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.topb_a>view:nth-child(1) {
		height: 40px;
		width: 400rpx;
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

	.top_b>view {
		margin-top: 23rpx;
		padding: 0 15rpx;
	}

	.topb_a>view:nth-child(1) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	page {
		background-color: #F5F5F9;
	}

	.top_b {
		display: flex;
		margin: auto;
		margin-top: 40rpx;
		/* padding-bottom: 40rpx; */
		width: 690rpx;
		height: 217rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 16rpx;

	}

	.top_b image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 15rpx;
	}
</style>
