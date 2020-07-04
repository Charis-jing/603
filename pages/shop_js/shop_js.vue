<template>
	<view>
		<view class="main_top">
			<!-- 		<view>
				<view class="top_a">
					<view>
						<image src="../../static/img/shop/002.png" mode=""></image>
					</view>
					<view>陀螺软件<span>18547496584</span></view>
					<view>更换地址>></view>
				</view>
				<view class="top_b">河南省郑州市郑东新区榆林北路绿地中心双子塔
					南塔3303</view>
			</view> -->
			<view class="top_to">
				<view>
					<image src="../../static/img/shop/01.png" mode=""></image>
				</view>
				<view>添加收货地址</view>
			</view>
		</view>
		<view style="margin-bottom: 150rpx;
		padding-top:  190rpx;">
			<view class="list">
				<view>


					<view class="list_top">
						<view>
							<image src="../../static/img/shop/003.png" mode=""></image>
						</view>
						<view>华为旗舰店</view>
					</view>
					<view>
						<view class="list_body">
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="body">
								<view>华为手机旗舰店5G手机华为手机旗舰...</view>
								<view class="body_a">
									<view class="a_a">
										<view>黑色；6G+64G；</view>
										<view>x1</view>
									</view>
									<view class="a_b">￥3659</view>
								</view>
							</view>
						</view>
						<view class="body_fg"></view>



						<view class="list_body">
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="body">
								<view>华为手机旗舰店5G手机华为手机旗舰...</view>
								<view class="body_a">
									<view class="a_a">
										<view>黑色；6G+64G；</view>
										<view>x1</view>
									</view>
									<view class="a_b">￥3659</view>
								</view>
							</view>
						</view>
						<view class="body_fg"></view>
					</view>



				</view>






				<view>


					<view class="list_top">
						<view>
							<image src="../../static/img/shop/003.png" mode=""></image>
						</view>
						<view>华为旗舰店</view>
					</view>
					<view>
						<view class="list_body">
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="body">
								<view>华为手机旗舰店5G手机华为手机旗舰...</view>
								<view class="body_a">
									<view class="a_a">
										<view>黑色；6G+64G；</view>
										<view>x1</view>
									</view>
									<view class="a_b">￥3659</view>
								</view>
							</view>
						</view>
						<view class="body_fg"></view>



						<view class="list_body">
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="body">
								<view>华为手机旗舰店5G手机华为手机旗舰...</view>
								<view class="body_a">
									<view class="a_a">
										<view>黑色；6G+64G；</view>
										<view>x1</view>
									</view>
									<view class="a_b">￥3659</view>
								</view>
							</view>
						</view>
						<view class="body_fg"></view>
					</view>



				</view>





			</view>
		</view>
		<view class="footer">
			<view>258448.36积分</view>
			<view @click="submit()">立即支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        number:25423.36
			}
		},
		methods: {
			submit() {
				let that=this
				uni.showModal({
					title: '确认支付',
					content: '将扣除'+that.number+'积分',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style>
	.top_to {
		display: flex;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
		height: 80rpx;
		line-height: 80rpx;
		padding-top: 55rpx;
		padding-left: 40rpx;
	}

	.top_to image {
		width: 80rpx;
		height: 80rpx;
		margin-right: 30rpx;
	}

	.footer {
		display: flex;
		justify-content: space-around;
		height: 128rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.footer>view:nth-child(1) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		line-height: 128rpx;
	}

	.footer>view:nth-child(2) {
		width: 400rpx;
		height: 88rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 49rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
	}

	.body_fg {
		width: 690rpx;
		height: 2rpx;
		background-color: rgba(241, 241, 241, 1);
		margin-top: 40rpx;
	}

	.list_body {
		margin-top: 40rpx;
	}

	.body {
		width: 540rpx;
	}

	.a_a {
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.a_a>view {
		margin-top: 10rpx;
	}

	.a_b {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		margin-top: 30rpx;
	}

	.body>view:nth-child(1) {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.body_a {
		display: flex;
		justify-content: space-between;
	}

	.list_body {
		display: flex;
		justify-content: space-between;
	}

	.list_body image {
		width: 120rpx;
		height: 120rpx;
		background: rgba(255, 227, 227, 1);
		border-radius: 8rpx;
	}

	.list {
		width: 690rpx;
		margin: auto;
		margin-top: 40rpx;
	}

	.list_top {
		display: flex;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 40rpx;
	}

	.list_top>view:nth-child(2) {
		margin-left: 16rpx;
	}

	.list_top image {
		width: 28rpx;
		height: 28rpx;
	}

	.top_b {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		width: 560rpx;
		margin-top: 20rpx;
		margin-left: 116rpx;
	}

	.top_a>view:nth-child(2) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-right: 20rpx;
	}

	.top_a span {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		margin-left: 10rpx;
	}

	.top_a>view:nth-child(3) {
		width: 166rpx;
		height: 34rpx;
		background: rgba(246, 17, 55, 0.2);
		border-radius: 17rpx;
		font-size: 22rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 34rpx;
		color: rgba(246, 17, 55, 1);
		text-align: center;
	}

	.top_a {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		padding-top: 30rpx;
	}

	.top_a image {
		width: 36rpx;
		height: 36rpx;
	}

	.main_top {
		width: 690rpx;
		height: 190rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		position: fixed;
		top: 90rpx;
		left: 30rpx;
		right: 30rpx;
		z-index: 666;
	}
</style>
