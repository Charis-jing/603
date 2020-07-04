<template>
	<view>
		<view class="main_top" :class="act>20?'black_top':''">
			<view>
				<image @click="back()" src="../../static/img/shop/012.png" mode=""></image>
			</view>
			<view :style="act>20?'':'visibility:hidden'">商品详情</view>
			<view @click="shouc()">
				<image :src="code==0?'../../static/img/shop/013.png':'../../static/img/shop/113.png'" mode=""></image>
			</view>
			<view>
				<image src="../../static/img/shop/014.png" mode=""></image>
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
					 indicator-active-color="#F61137" indicator-color="#FCB7C3" circular="true">
						<swiper-item v-for="item in img_bg">
							<view class="swiper-item">
								<image class="item_img_a" :src="item" mode=""></image>
							</view>
						</swiper-item>
						<!--   <swiper-item>
		                              <view class="swiper-item">B</view>
		                          </swiper-item>
		                          <swiper-item>
		                              <view class="swiper-item">C</view>
		                          </swiper-item> -->
					</swiper>
				</view>
			</view>
		</view>
		<view class="main_title">
			<view>这是一束满天星满天星满天星</view>
			<view>￥2548.36</view>
		</view>
		<view class="main_gge">
			<view class="gge_a">
				<view>
					<view>规格</view>
					<view>请选择规格</view>
				</view>
				<view>
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
			<view class="gge_b">
				<view>数量</view>
				<view>
					<view class="add" @click="add(1)">-</view>{{number}}
					<view class="add" @click="add(2)">+</view>
				</view>
			</view>

		</view>
		<view class="main_user">
			<view class="user_a">
				<view>
					<image src="../../static/img/3.jpg" mode=""></image>
				</view>
				<view class="user_text" @click="goShop">
					<view>陀螺旗舰店</view>
					<view>进店看看</view>
				</view>
			</view>
			<view class="user_b">
				<image src="../../static/img/money/you.png" mode=""></image>
			</view>
		</view>
		<view class="list_top">-商品详情-</view>
		<view class="img_list">
			<image src="../../static/img/4.jpg" mode=""></image>
		</view>
		<view class="footer">
			<view @click="goddsCar">加入购物车</view>
			<view>立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img_bg: ['../../static/img/3.jpg', '../../static/img/4.jpg', '../../static/img/3.jpg'],
				img_bg2: ['../../static/img/4.jpg', '../../static/img/3.jpg', '../../static/img/4.jpg'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				act: 0,
				number: 1,
				code: 0,
				// 商品详情oID
				OID:'123'
			}

		},
		onLoad() {
			this.getGoodsInfo()
		},
		methods: {
			// 跳转到店铺
			goShop(){
				uni.navigateTo({
					url:'/pages/shop_detail/shop_detail'
				})
			},
			// 跳转到商品详情 
			goddsCar(){
				uni.reLaunch({
					url:'/pages/index/index?id='+1
				})
			},
			// 获取商品详情资料  /MallUF/GetGoodsInfo
			getGoodsInfo() {
				console.log(1233)
				this.apiRequest('/QT/MallUF/GetGoodsInfo', (res) => {
				 console.log(res)
				 console.log(123)
					},'GET',{
						OID:this.OID
					})
			},
			back(){
				uni.navigateBack({
					
				})
			},
			add(e) {
				if (e == 1) {
					if (this.number == 1) {

						return
					}
					this.number--
				} else {
					if (this.number == 99) {
						return
					}
					this.number++
				}
			},
			shouc() {
				if (this.code == 1) {
					this.code = 0
				} else {
					this.code = 1
					uni.showToast({
						title: '收藏成功',
						duration: 2000
					});
				}
			}
		},
		onPageScroll(res) {
			// console.log(res.scrollTop); //距离页面顶部距离
			this.act = res.scrollTop
		}
	}
</script>

<style>
	.black_top {
		background-color: #FFFFFF;
		width: 100%;
	}

	.footer {
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		height: 128rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		width: 100%;
		line-height: 128rpx;
	}

	.footer>view:nth-child(1) {
		width: 260rpx;
		height: 88rpx;
		border: 1px solid rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 49rpx;
		margin-top: 20rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
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

	.img_list {
		width: 690rpx;
		opacity: 1;
		margin: auto;
		margin-top: 20rpx;
		margin-bottom: 128rpx;
	}

	.img_list image {
		width: 100%;
	}

	.list_top {
		text-align: center;
		margin-top: 50rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.user_a {
		display: flex;
		justify-content: ;
	}

	.user_b image {
		width: 30rpx;
		height: 30rpx;
		margin-top: 35rpx;
		/* position: relative;
		top: 36rpx; */
	}

	.user_text {
		margin-left: 20rpx;
	}

	.user_text>view:nth-child(1) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 6rpx;
	}

	.user_text>view:nth-child(2) {
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		width: 118rpx;
		height: 34rpx;
		background: rgba(255, 255, 255, 1);
		border: 2rpx solid rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 15rpx;
		text-align: center;
	}

	.main_user {
		width: 690rpx;
		height: 150rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		padding-top: 40rpx;
	}

	.main_user>view {
		padding: 0 30rpx;
	}

	.user_a image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 16rpx;
	}

	.gge_b {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		margin-top: 63rpx;
	}

	.gge_b>view:nth-child(1) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.gge_b>view:nth-child(2) {
		width: 160rpx;
		display: flex;
		justify-content: space-between;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.add {
		width: 44rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		background: rgba(245, 245, 249, 1);
		border-radius: 50%;
		opacity: 1;
		font-size: 46rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.gge_a {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		padding-top: 30rpx;
	}

	.gge_a>view:nth-child(1) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		display: flex;
		justify-content: space-between;
	}

	.gge_a>view:nth-child(1)>view:nth-child(2) {
		margin-left: 30rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.gge_a image {
		width: 30rpx;
		height: 30rpx;
	}

	.main_gge {
		width: 690rpx;
		height: 223rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-top: 50rpx;
	}

	.main_title {
		width: 690rpx;
		margin: auto;
		display: flex;
		justify-content: space-between;
		margin-top: 51rpx;
	}

	.main_title>view:nth-child(1) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.main_title>view:nth-child(2) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;

	}

	.main_top {
		display: flex;
		height: 40rpx;
		line-height: 40rpx;
		padding: 30rpx;
		position: fixed;
		top: 0;
		z-index: 666;

	}

	.main_top>view:nth-child(2) {
		margin-left: 230rpx;
	}

	.main_top>view:nth-child(3) {

		margin-left: 160rpx;
	}

	.main_top>view:nth-child(4) {

		margin-left: 25rpx;
	}

	.main_top image {
		width: 40rpx;
		height: 40rpx;
	}

	.swiper {
		width: 100%;
		height: 750rpx;
	}

	.swiper image {
		width: 100%;
		height: 750rpx;
	}
</style>
