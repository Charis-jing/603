<template>
	<view class="main">

		<scroll-view class="main_box" scroll-y="true" @scrolltolower="lower">
			<view class="header">
				<view>购物车</view>
				<view>
					<image src="../../static/img/shop/001.png" mode="" @click="removeGoods"></image>
				</view>
			</view>
			<view style="padding-top: 46rpx;padding-bottom: 125rpx;">
				<view class="body">
					<view class="body_title">
						<view class="check">
							<view></view>
						</view>
						<view>陀螺软件</view>
					</view>
					<view class="body_list" @click="shop_detail">
						<view class="list">
							<view class="check">
								<view></view>
							</view>
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="list_text">
								<view>天真纯洁的美以及藏在心底的爱小雏菊</view>
								<view>￥2548.36</view>
							</view>
						</view>
						<view class="list list_fgx" @click="shop_detail">
							<view class="check_to">
								<view></view>
							</view>
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="list_text">
								<view>天真纯洁的美以及藏在心底的爱小雏菊</view>
								<view>￥2548.36</view>
							</view>
						</view>
					</view>
				</view>



				<view class="body">
					<view class="body_title">
						<view class="check_to">
							<view></view>
						</view>
						<view>陀螺软件</view>
					</view>
					<view class="body_list">
						<view class="list">
							<view class="check_to">
								<view></view>
							</view>
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="list_text">
								<view>天真纯洁的美以及藏在心底的爱小雏菊</view>
								<view>￥2548.36</view>
							</view>
						</view>
						<view class="list list_fgx">
							<view class="check_to">
								<view></view>
							</view>
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="list_text">
								<view>天真纯洁的美以及藏在心底的爱小雏菊</view>
								<view>￥2548.36</view>
							</view>
						</view>
					</view>
				</view>



				<view class="body">
					<view class="body_title">
						<view class="check_to">
							<view></view>
						</view>
						<view>陀螺软件</view>
					</view>
					<view class="body_list">
						<view class="list">
							<view class="check_to">
								<view></view>
							</view>
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="list_text">
								<view>天真纯洁的美以及藏在心底的爱小雏菊</view>
								<view>￥2548.36</view>
							</view>
						</view>
						<view class="list list_fgx">
							<view class="check_to">
								<view></view>
							</view>
							<view>
								<image src="../../static/img/3.jpg" mode=""></image>
							</view>
							<view class="list_text">
								<view>天真纯洁的美以及藏在心底的爱小雏菊</view>
								<view>￥2548.36</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="footer">
				<view>合计525848.36积分</view>
				<view @click="submitSelBuyCarGoods">立即下单</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List: [],
				CarOID: 123,
				number:5,
				Count:5
			}
		},
		onLoad() {
			this.getBuyCarGoodsList()
		},
		methods: { 
			// 提交购物车商品   /MallF/SubmitSelBuyCarGoods
			submitSelBuyCarGoods() {
				this.apiRequest('/QT/MallF/SubmitSelBuyCarGoods', (res) => {
					console.log(res)
					console.log(123)
				}, {
					CarOID: this.CarOID,
					Count: this.Count
				}, 'POST')
				uni.navigateTo({
					url:'/pages/shop_order/shop_order'
				})
			},
			// 删除购物车商品  /MallF/RemoveGoods
			removeGoods() {
				this.apiRequest('/QT/MallF/RemoveGoods', (res) => {
					console.log(res)
					console.log(123)
				}, {
					CarOID: this.CarOID,
					number: this.number
				}, 'POST')
			},
			// 修改购物车数量  /MallF/EditBuyCarNumber
			editBuyCarNumber() {
				this.apiRequest('/QT/MallF/EditBuyCarNumber', (res) => {
					console.log(res)
					// console.log(123)
				}, {
					CarOID: this.CarOID,
					number: this.number
				}, 'POST')
			},
			// 跳转到商品详情
			shop_detail() {
				uni.navigateTo({
					url: '/pages/shop_list/shop_list'
				})
			},
			// 查看购物车 /MallF/GetBuyCarGoodsList  

			getBuyCarGoodsList() {
				this.apiRequest('/QT/GetBuyCarGoodsList', (res) => {
					console.log(res)
				}, 'GET')
			},

			ontrueGetList() {
				uni.showToast({
					title: '第2个页面'
				})
				console.log("加载了第二个页面，可以把网络请求放这里")
			},
			lower() {
				uni.showToast({
					title: 'scroll-view的加载更多'
				})
				console.log("分页数据可以放这里~~~~~~嘿嘿")
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		display: flex;
		justify-content: space-around;
		width: 690rpx;
		height: 128rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		border-radius: 64rpx;
		margin: auto;
		position: fixed;
		bottom: 160rpx;
		left: 30rpx;
		right: 30rpx;
		line-height: 128rpx;

	}

	.footer>view:nth-child(1) {
		font-size: 29rpx;
		font-family: Source Han Sans CN;
		font-weight: 600;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
	}

	.footer>view:nth-child(2) {
		width: 200rpx;
		height: 88rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 49rpx;
		line-height: 88rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		text-align: center;
		margin-top: 20rpx;
	}

	.list_text>view:nth-child(1) {
		width: 373rpx;
		height: 73rpx;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 30rpx;
	}

	.list_text>view:nth-child(2) {
		width: 167rpx;
		height: 34rpx;
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		line-height: 34rpx;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		margin-top: 33rpx;
	}

	.list_fgx {
		border-top: 2rpx solid rgba(239, 239, 239, 1);
	}

	.list {
		display: flex;
		justify-content: space-between;
		width: 650rpx;
		margin: auto;
	}

	.list image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 16rpx;
		margin-top: 30rpx;
	}

	.list>view:nth-child(1) {
		margin-top: 95rpx;
	}

	.list {
		margin-bottom: 20rpx;
	}

	.body_list {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		border-radius: 16rpx;
		margin-top: 30rpx;
		padding-bottom: 20rpx;
	}

	.body {
		padding-top: 40rpx;
		width: 690rpx;
		margin: auto;
	}

	.body_title {
		display: flex;
	}

	.body_title>view:nth-child(2) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		height: 30rpx;
		line-height: 30rpx;
		margin-left: 20rpx;
	}

	.check_to {

		border: 2rpx solid #707070;
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 30rpx;
	}

	.check {
		border: 2rpx solid #F61137;
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 30rpx;
	}

	.check>view {
		width: 18rpx;
		height: 18rpx;
		background: rgba(246, 17, 55, 1);
		border-radius: 50%;
		opacity: 1;
		margin: auto;
		margin-top: 6rpx;
	}

	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box {
		width: 100vw;
		height: 100vh;
		padding-bottom: 120rpx;
		box-sizing: border-box;
	}

	.main_centent {
		width: 100%;
		height: 100vh;
		color: #fff;
		letter-spacing: 4rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header {
		height: 58rpx;
		padding-top: 25rpx;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 666;
		background-color: #FFFFFF;

	}

	.header>view:nth-child(1) {
		float: left;
		margin-left: 340rpx;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		line-height: 36rpx;
	}

	.header>view:nth-child(2) {
		right: 0;
		float: right;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		line-height: 36rpx;
		padding-right: 30rpx;
	}

	.header image {
		width: 36rpx;
		height: 36rpx;
	}
</style>
