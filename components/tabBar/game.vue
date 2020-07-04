<template>
	<view class="main">
		<scroll-view class="main_box" scroll-y="true" @scrolltolower="lower">
			<view class="main_top">
				<view class="main_top_gps">
					<view>
						<image src="../../static/img/game/g.png" mode=""></image>郑州-郑东新区
					</view>
					<view>首页</view>
				</view>
				<view class="main_sous" @click="toSearch()">
					<view>
						<image src="../../static/img/game/sou.png" mode=""></image>搜索
					</view>
					<view>搜索</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
						 indicator-active-color="#F61137" indicator-color="#FCB7C3" circular="true">
							<swiper-item v-for="item in img_bg">
								<view class="swiper-item">
									<image class="item_img_a" :src="baseUrl+item.Image" mode=""></image>
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
			<view class="main_body">
				<view class="body_a">
					<view class="categories" v-for="item in categories">
						<view @click="toSearch('',item.OID)">
							<image :src="baseUrl+item.ImgUrl" mode=""></image>
							<view>{{item.Name}}</view>
						</view>
					</view>
				</view>
				<!-- <view class="body_b">
					<view>
						<view>
							<image src="../../static/img/3.jpg" mode=""></image>
						</view>
						<view>西瓜</view>
					</view>
					<view>
						<view>
							<image src="../../static/img/3.jpg" mode=""></image>
						</view>
						<view>西瓜</view>
					</view>
					<view>
						<view>
							<image src="../../static/img/3.jpg" mode=""></image>
						</view>
						<view>西瓜</view>
					</view>
					<view>
						<view>
							<image src="../../static/img/3.jpg" mode=""></image>
						</view>
						<view>西瓜</view>
					</view>
					<view>
						<view>
							<image src="../../static/img/3.jpg" mode=""></image>
						</view>
						<view>西瓜</view>
					</view>
				</view> -->
			</view>
			<view class="uni-padding-wrap">
				<view class="page-section swiper2">
					<view class="page-section-spacing">
						<swiper class="swiper2" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="2500" :duration="duration"
						 indicator-active-color="#F61137" indicator-color="#FCB7C3" circular="true">
							<swiper-item v-for="item in img_bg2">
								<view class="swiper-item">
									<image class="item_img_b" :src="baseUrl+item.Image" mode=""></image>
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
			<view class="list">
				<view></view>
				<view>优选商品</view>
			</view>
			<view class="list_body">
				<view v-for="item in List"  @click="toGoodsDetail(item.goods.OID)">
					<view>
						<image :src="baseUrl+item.goods.ImgList.split(',')[0]" mode="aspectFill"></image>
					</view>
					<view class="list_text">
						<view>{{item.goods.Name}}</view>
						<view>￥{{item.goods.Price}}</view>
						<view>{{item.goods.ShopName}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img_bg: ['../../static/img/3.jpg', '../../static/img/4.jpg', '../../static/img/3.jpg'],
				img_bg2: ['../../static/img/4.jpg', '../../static/img/3.jpg', '../../static/img/4.jpg'],
				categories:[],
				keyword:'',//搜索关键词
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
				//商品列表
				List:[],
				pageIndex:1,
				pageSize:20,
				loadMore:true
			}
		},
		methods: {
			toGoodsDetail(OID){
				uni.navigateTo({
					url:'/pages/shop_list/shop_list?OID='+OID
				})
			},
			
			//跳转到收索页
			toSearch(GoodsName='',GoodsTypeOID=''){
				uni.navigateTo({
					url:'/pages/search/search?GoodsName='+GoodsName+'&GoodsTypeOID='+GoodsTypeOID
				})
			},
			//获取商品
			getList(){
				this.apiRequest('/QT/MallUF/GetGoodsList',(res) => {
					if(this.pageIndex == 1){
						uni.stopPullDownRefresh();
					}
					if(res.Data.TotalPageCount >= this.pageIndex && res.Data.List.length > 0){ //当前页数小于总页数
						if(this.pageIndex == 1){
							this.List = res.Data.List;
						}else{
							this.List = this.List.concat(res.Data.List);
						}
						this.pageIndex++;
						return true;
					}
					this.toastMsg(this.pageIndex == 1?'没有搜索到商品':'没有更多商品');
					this.loadMore = false;
				},'GET',{
					   GoodsName:'',
					   GoodsTypeOID:'',
					   pageIndex:this.pageIndex,
					   pageSize:this.pageSize
				   })
			},
			onReachBottom() {
				
			},
			onPullDownRefresh(){
				this.pageIndex = 1;
				this.loadMore = true;
				this.getList();
			},
			ontrueGetList() {
				uni.showToast({
					title: '第1个页面'
				})
				console.log("加载了第一个页面，可以把网络请求放这里")
				//加载轮播图
				this.apiRequest('/QT/DefaultF/GetCarouselImage',(res) => {
					this.img_bg = res.Data.IndexList;
					this.img_bg2 = res.Data.MallList;
				},'GET');
				//加载商品分类
				this.apiRequest('/QT/MallUF/GetGoodsType',(res) => {
					this.categories = res.Data.List;
				},'GET')
				
				this.pageIndex = 1;
				this.loadMore = true;
				this.getList();
				
			},
			lower() {
				if(this.loadMore){
					this.pageIndex +=1;
					this.getList();
				}
			}
		}
	}
</script>

<style lang="scss">
	.list_body>view {
		width: 690rpx;
		height: 290rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30rpx rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-bottom: 31rpx;
		display: flex;

	}

	.list_body image {
		width: 250rpx;
		height: 250rpx;
		background: rgba(255, 180, 180, 1);
		opacity: 1;
		border-radius: 16rpx;
	}

	.list_body>view>view:nth-child(1) {
		padding: 25rpx;
	}

	.list_text {
		padding: 25rpx;
	}

	.list_text>view:nth-child(1) {
		width: 327rpx;
		height: 80rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.list_text>view:nth-child(2) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		margin-top: 19rpx;
	}

	.list_text>view:nth-child(3) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-top: 39rpx;
	}

	.list {
		margin-top: 40rpx;
		padding-left: 33rpx;
		display: flex;
		height: 34rpx;
		line-height: 34rpx;
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-bottom: 31rpx;
	}

	.list>view:nth-child(1) {
		width: 8rpx;
		height: 34rpx;
		background: linear-gradient(180deg, rgba(246, 17, 55, 1) 0%, rgba(255, 255, 255, 1) 100%);
		opacity: 1;
		border-radius: 172rpx;
	}

	.list>view:nth-child(2) {
		margin-left: 20rpx;
	}

	.main {
		// background-image: linear-gradient(45deg, #ec008c, #6739b6);
		// padding-bottom: 120rpx;

	}

	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box {
		padding-top: 168rpx;
		width: 100vw;
		height: 100vh;
		padding-bottom: 100rpx;
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

	image {
		width: 750rpx;
		height: 750rpx;
	}

	.main_top {
		position: fixed;
		top: 0;
		height: 200rpx;
		background-color: #F61137;
		width: 100%;
		padding-left: 33rpx;
		z-index: 666;
	}

	.main_top_gps image {
		width: 33rpx;
		height: 33rpx;
		position: relative;
		top: 6rpx;
	}

	.main_top_gps {
		display: flex;
		font-size: 13px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 44px;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.main_top_gps>view:nth-child(2) {
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin: auto;
		width: 300rpx;
	}

	.main_sous {
		display: flex;
		margin-top: 15rpx;
	}

	.main_sous>view:nth-child(1) {
		padding-left: 30rpx;
		width: 550rpx;
		height: 68rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 10rpx;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
		line-height: 68rpx;
	}

	.main_sous image {

		width: 33rpx;
		height: 33rpx;
		position: relative;
		top: 6rpx;
		margin-right: 25rpx;
	}

	.main_sous>view:nth-child(2) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-left: 33rpx;
		height: 68rpx;
		line-height: 68rpx;
	}

	.swiper-item {
		text-align: center;
	}

	.swiper-item image {}

	.item_img_a {
		width: 680rpx;
		height: 400rpx;
		margin: 0 auto;
		border-radius: 16rpx;
	}

	.item_img_b {
		width: 680rpx;
		height: 200rpx;
		margin: 0 auto;
		border-radius: 16rpx;
	}

	.uni-padding-wrap {
		margin-top: 50rpx;
	}

	.swiper {
		// width: 650rpx;
		height: 450rpx;
		// margin: auto;
	}

	.swiper2 {

		height: 200rpx;
	}

	.body_a{
		display: flex;
		display: -webkit-flex;
		align-items: center;
		flex-wrap: wrap;
		.categories{
			width: 20%;
			align-items: center;
			justify-content: center;
			margin-bottom: 20rpx;
		}
	}

	.main_body {
		text-align: center;
		padding: 0 40rpx;
		margin-top: 33rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.body_b {
		margin-top: 22rpx;
	}

	.main_body image {
		width: 121rpx;
		height: 115rpx;
		opacity: 1;
	}
</style>
