<template>
	<view>
		<view class="top_title"  >
		<view class=""v-for="(item,index) in headers" :key="index" @click="changeZhuangtai(item.id)">
				<view :class="header==item.id?'act' :''">{{item.Name}}</view>
		</view>
			
		
		</view>
		<view class="body"  v-show="header== 1 ? true: false">
			<view class="list" >
				<view class="list_title">
					<view class="title_a">
						<view>
							<image src="../../static/img/shop/004.png" mode=""></image>
						</view>
						<view>芬兰旗舰店</view>
						<view>
							<image src="../../static/img/money/you.png" mode=""></image>
						</view>
					</view>
					<view>等待买家付款</view>
				</view>
		
				<view class="top_b fgx_bot">
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
		
				<view class="top_b ">
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
				<view class="money">合计：<span>1395678 .00积分</span></view>
				<view class="bot">
					<view  @click="cancelOrder">取消订单</view>
					<view @click="goOrderPay">立即付款</view>
				</view>
			</view>
		
		
		
		
			<view class="list">
				<view class="list_title">
					<view class="title_a">
						<view>
							<image src="../../static/img/shop/004.png" mode=""></image>
						</view>
						<view>芬兰旗舰店</view>
						<view>
							<image src="../../static/img/money/you.png" mode=""></image>
						</view>
					</view>
					<view>等待买家付款</view>
				</view>
		
				<view class="top_b fgx_bot">
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
		
				<view class="top_b ">
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
				<view class="money">合计：<span>1395678 .00积分</span></view>
				<view class="bot">
					<view style="display: none;" >取消订单</view>
					<view>确认收货</view>
				</view>
			</view>
		
		
		
		
		
			<view class="list" >
				<view class="list_title">
					<view class="title_a">
						<view>
							<image src="../../static/img/shop/004.png" mode=""></image>
						</view>
						<view>芬兰旗舰店</view>
						<view>
							<image src="../../static/img/money/you.png" mode=""></image>
						</view>
					</view>
					<view class="cg">交易成功</view>
				</view>
		
				<view class="top_b fgx_bot">
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
			</view>
		
		
		
		
		</view>
		<view class="body" >
			<view class="list"  v-show="header== 2 ? true: false">
				<view class="list_title">
					<view class="title_a">
						<view>
							<image src="../../static/img/shop/004.png" mode=""></image>
						</view>
						<view>芬兰旗舰店</view>
						<view>
							<image src="../../static/img/money/you.png" mode=""></image>
						</view>
					</view>
					<view>等待买家付款</view>
				</view>

				<view class="top_b fgx_bot">
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

				<view class="top_b ">
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
				<view class="money">合计：<span>1395678 .00积分</span></view>
				<view class="bot">
					<view  @click="cancelOrder">取消订单</view>
					<view @click="goOrderPay">立即付款</view>
				</view>
			</view>




			<view class="list"  v-show="header== 3 ? true: false">
				<view class="list_title">
					<view class="title_a">
						<view>
							<image src="../../static/img/shop/004.png" mode=""></image>
						</view>
						<view>芬兰旗舰店</view>
						<view>
							<image src="../../static/img/money/you.png" mode=""></image>
						</view>
					</view>
					<view>等待买家付款</view>
				</view>

				<view class="top_b fgx_bot">
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

				<view class="top_b ">
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
				<view class="money">合计：<span>1395678 .00积分</span></view>
				<view class="bot">
					<view style="display: none;" >取消订单</view>
					<view>确认收货</view>
				</view>
			</view>





			<view class="list"  v-show="header== 4 ? true: false">
				<view class="list_title">
					<view class="title_a">
						<view>
							<image src="../../static/img/shop/004.png" mode=""></image>
						</view>
						<view>芬兰旗舰店</view>
						<view>
							<image src="../../static/img/money/you.png" mode=""></image>
						</view>
					</view>
					<view class="cg">交易成功</view>
				</view>

				<view class="top_b fgx_bot">
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
			</view>




		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				header:1,
				headers:[
					{
						id:1,
						Name:'全部'
					},
					{
						id:2,
						Name:'待付款'
					},
					{
						id:3,
						Name:'待收货'
					},
					{
						id:4,
						Name:'已完成'
					},
				]
			}
		},
		methods: {
			// 跳转订单支付页面
			goOrderPay(){
				uni.navigateTo({
					url:'/pages/shop_take/shop_take'
				})
			},
     // 选择订单状态
	 changeZhuangtai (e){
		 this.header=e
		  
	 },
	 // 取消订单  /MallF/CancelOrder
	 cancelOrder() {
	 	console.log(1233)
	 	this.apiRequest('/QT/MallF/CancelOrder', (res) => {
	 		console.log(res)
	 	}, {
	 		OID: this.OID
	 	},'POST')
	 },
	 
		}
	}
</script>

<style>
	.cg {

		color: rgba(153, 153, 153, 1) !important;
	}

	.bot {
		display: flex;
		justify-content: flex-end;
		margin-right: 30rpx;
		margin-top: 30rpx;
	}

	.bot>view:nth-child(1) {

		border: 2rpx solid rgba(153, 153, 153, 1);
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-right: 30rpx;
	}

	.bot>view:nth-child(2) {

		background: rgba(246, 17, 55, 1);
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.bot>view {
		width: 160rpx;
		height: 60rpx;
		border-radius: 10rpx;
		text-align: center;
		line-height: 60rpx;
	}

	.money {
		text-align: right;
		margin-right: 30rpx;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.money span {
		font-size: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.list_title {
		display: flex;
		height: 30rpx;
		line-height: 30rpx;
		justify-content: space-between;
		width: 630rpx;
		margin: auto;
	}

	.list_title>view:nth-child(2) {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		opacity: 1;
		color: rgba(246, 17, 55, 1);
	}

	.title_a {
		display: flex;
	}

	.title_a>view:nth-child(2) {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin: 0 21rpx;
	}

	.title_a image {
		width: 30rpx;
		height: 30rpx;
	}

	.list {
		width: 690rpx;
		/* height: 707rpx; */
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 30rpx rgba(153, 153, 153, 0.2);
		opacity: 1;
		border-radius: 16rpx;
		margin: auto;
		margin-top: 20rpx;
		padding-bottom: 40rpx;
		padding-top: 30rpx;

	}

	.body {
		padding-top: 110rpx;
		padding-bottom: 60rpx;
	}

	.top_title {
		display: flex;
		justify-content: space-around;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		height: 98rpx;
		background: rgba(255, 255, 255, 1);
		/* opacity: 0.7; */
		line-height: 98rpx;
		position: fixed;
		top: 80rpx;
		width: 100%;
		z-index: 666;
	}

	.act {
		font-weight: 550;

		color: rgba(246, 17, 55, 1);
		border-bottom: 6rpx solid red;
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
		padding-bottom: 40rpx;

	}

	.fgx_bot {

		border-bottom: 2rpx solid #EFEFEF;
	}

	.top_b image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 15rpx;
	}
</style>
