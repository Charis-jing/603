<template>
	<view>
		<view class="main_sous">
			<view style="margin-left: 34rpx;">
				<image style="margin-top: 10rpx;margin-left: 20;" src="../../static/img/search/002.png" mode=""></image>
				<input v-model="GoodsName" style="margin-top: 10rpx;" type="text" placeholder="请输入搜索内容">
			</view>
			<view style="margin-right: 34rpx;">搜索</view>
		</view>
		<view style="padding-top: 100rpx;">
			<view class="list" v-for="item in List" @click="toGoodsDetail(item.goods.OID)">
				<view class="list_a">
					<image :src="baseUrl+item.goods.ImgList.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="list_b">
					<view>{{item.goods.Name}}</view>
					<view>￥{{item.goods.Price}}</view>
					<view>
						<view>
							<image src="../../static/img/search/003.png" mode=""></image>
						</view>
						<view>{{item.goods.ShopName}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GoodsName: '',
				GoodsTypeOID: '',
				List:[],
				pageIndex:1,
				pageSize:20,
				loadMore:true
			}
		},
		onLoad(res) {
			//初始化变量
			if (res.hasOwnProperty('GoodsName')) {
				this.GoodsName = res.GoodsName;
			}
			if (res.hasOwnProperty('GoodsTypeOID')) {
				this.GoodsTypeOID = res.GoodsTypeOID;
			}
			//获取商品列表
			this.getList();
		},
		methods: {
			toGoodsDetail(OID){
				uni.navigateTo({
					url:'/pages/shop_list/shop_list?OID='+OID
				})
			},
			onPullDownRefresh() {
				this.pageIndex = 1;
				this.loadMore = true;
				this.getList();
			},
			
			//获取数据
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
					   GoodsName:this.GoodsName,
					   GoodsTypeOID:this.GoodsTypeOID,
					   pageIndex:this.pageIndex,
					   pageSize:this.pageSize
				   })
			}
		},
		onReachBottom() {
			if(this.loadMore){
				this.pageIndex +=1;
				this.getList();
			}
		}
	}
</script>

<style>
	.list_a image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 16rpx;
	}

	.list_b>view:nth-child(1) {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 10rpx;
	}

	.list_b>view:nth-child(2) {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		margin-top: 10rpx;
	}

	.list_b>view:nth-child(3) {
		display: flex;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		height: 28rpx;
		line-height: 28rpx;
		margin-top: 24rpx;
	}

	.list_b image {
		width: 28rpx;
		height: 28rpx;
		margin-right: 15rpx;
	}

	.list_b {
		margin-left: 40rpx;
	}

	.list {
		display: flex;
		padding: 40rpx 0;
		width: 690rpx;
		margin: auto;
		border-bottom: 2rpx solid rgba(239, 239, 239, 1);
		opacity: 1;
	}

	.main_sous {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-top: 15rpx;
		background-color: #F61137;
		height: 100rpx;
		position: fixed;
		top: 20;
		z-index: 666;
	}

	input {
		color: #000000;
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
		display: flex;
	}

	.main_sous>view:nth-child(1)>view {
		margin-top: 19rpx;
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
</style>
