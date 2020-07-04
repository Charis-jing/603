<template>
	<view style="padding-top: 1rpx;">
		<view class="list" v-for="item in datalist" @longpress="logoTime(item.OID)">
			<view class="list_top">
				<view v-show="item.IsDefault">
					<image src="../../static/img/shop/007.png" mode=""></image>
				</view>
				<view>{{item.AccepterName}}</view>
				<view>{{item.AccepterTel}}</view>
			</view>
			<view class="list_footer">
				<view>{{item.AddrInfo}}</view>
				<view @click="goShop_site(item.OID)">
					<image src="../../static/img/shop/008.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="footer" @click="goShop_site()"> +新增收货地址</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist: ''
			}
		},
		onLoad() {},
		onShow() {
			this.data_list()
		},
		methods: {
			data_list() {
				this.apiRequest('/QT/MallF/GetMallAddrList', (res) => {
					console.log(res)
					this.datalist = res.Data.AddrList
					console.log(this.datalist)
				}, 'GET', {})
			},
			logoTime(e) {
				console.log(e)
				let that = this;
				uni.showModal({
					title: '提示',
					content: '确定要删除改地址?',
					success: function(res) {
						if (res.confirm) {
							that.apiRequest('/QT/MallF/DelMallAddr', (res) => {
								console.log(res)
								that.data_list()
							}, 'POST', {
								OID: e
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			goShop_site(e) {
				if (e) {
					uni.navigateTo({
						url: '../shop_site/shop_site?Oid=' + e
					});
				} else {

					uni.navigateTo({
						url: '../shop_site/shop_site?Oid=' + 1
					});
				}
			}
		}
	}
</script>

<style>
	.footer {
		width: 690rpx;
		height: 88rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 44rpx;
		line-height: 88rpx;
		text-align: center;
		margin: auto;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 80rpx;
		margin-bottom: 25rpx;
	}

	.list_footer {
		display: flex;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		justify-content: space-between;
		margin-top: 6rpx;
	}

	.list_footer>view:nth-child(1) {
		width: 589rpx;
		margin-top: 22rpx;
		height: 50rpx;

	}

	.list_footer image {
		width: 44rpx !important;
		height: 44rpx !important;
	}

	.list {
		width: 690rpx;
		margin: auto;
		margin-top: 50rpx;
	}

	.list image {
		width: 60rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}

	.list_top {
		display: flex;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		height: 30rpx;
		line-height: 30rpx;
	}

	.list_top>view:nth-child(2) {

		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-right: 28rpx;
	}
</style>
