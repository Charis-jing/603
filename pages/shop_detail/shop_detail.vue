<template>
	<view>
		<view class="main_top">
			<view class="top" v-for="(item,index) in detail" :key="index">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view>{{item.ShopName}}</view>
				<view>{{'联系电话:'+item.Tel}}</view>
				<view>{{'地址:'+item.ShopAddr}}</view>
			</view>
		</view>
		<view class="body">
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>{{goodsMessage}}</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
			<view class="list">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="list_text">
					<view>天真纯洁的美以及藏在心底的爱</view>
					<view>￥2548.36</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 商店联系信息
				ShopOID: '123',
				detail: '',
				// "ShopHeadIcon": "店铺Logo",
				// "ShopName": "店铺名称",
				// "ShopAddr": "店铺地址",
				// "Tel": "电话"

				GoodsName: '1',
				GoodsTypeOID: '1',
				pageIndex: '1',
				pageSize: '1',
				// 得到商品信息
				goodsMessage: 'w'
			}
		},
		onLoad() {
			this.getShopInfo()
			this.getGoodsList()
		},
		methods: {
			// 获取商品;列表 /MallUF/GetGoodsList
			getGoodsList() {
				console.log(1)
				this.apiRequest('/QT/MallUF/GetGoodsList', (res) => {
					console.log(123)
					this.goodsMessage = res.data
					console.log(this.goodsMessage)
				}, {
					ShopOID: this.ShopOID,
					GoodsName: this.GoodsName,
					GoodsTypeOID: this.GoodsTypeOID,
					pageIndex: this.pageIndex,
					pageSize: this.pageSize
				}, 'GET', )
			},
			// 获取商铺信息  /MallF/GetShopInfo
			getShopInfo() {
				// console.log(1233)
				this.apiRequest('/QT/MallF/GetShopInfo', (res) => {
					// console.log(res)
					// this.detail = res.data.Data
				}, 'GET', {
					ShopOID: this.ShopOID
				})
			},
		}
	}
</script>

<style>
	.list_text {
		margin-left: 30rpx;
	}

	.list_text>view:nth-child(1) {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 10rpx;
	}

	.list_text>view:nth-child(2) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		margin-top: 20rpx;
	}

	.list {
		display: flex;
		padding: 25rpx 30rpx;
	}

	.body {
		width: 690rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-top: 75rpx;
		margin-bottom: 20rpx;
	}

	image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 16rpx;
	}

	.top {
		height: 330rpx;
		width: 100%;
		text-align: left;
		width: 690rpx;
		background-color: #FFFFFF;
		margin: auto;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin-top: 20rpx;
	}

	.top>view {
		margin-left: 40rpx;
		position: relative;
		top: -25rpx
	}

	.main_top {
		height: 300rpx;
		background-image: linear-gradient(#F61137, #ffffff);
		opacity: 1;
		padding-top: 30rpx;
	}

	.top>view:nth-child(2) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 20rpx;
	}

	.top>view:nth-child(3) {
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-top: 30rpx;
	}

	.top>view:nth-child(4) {
		width: 516rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-top: 16rpx;
	}
</style>
