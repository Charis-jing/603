<template>
	<view class="main">	

		<scroll-view class="main_box" scroll-y="true" @scrolltolower="lower">
			<view class="main_top" :class="'main_'+vip">
								<view class="top_a">花团</view>
								<view class="top_b">当前等级</view>
								<view class="main_top_f">
									<view>
										<view class="top_c">初团</view>
										<view class="top_plan">
											<view style="width: 100rpx;"></view>
										</view>
										<view class="top_d">当前经验:5/243</view>
										<view class="top_e">隔离升级:224</view>
									</view>
									<view>
										<image :src="'../../static/img/rich/'+vip+'_dj.png'" mode=""></image>
									</view>
					
								</view>
							</view>
						<view class="body_title">-经验明细-</view>
			<view style="margin-bottom: 40rpx;padding-top: 30rpx;">
				<view class="body_list">
					<view class="list_a">
						<view>
							<image src="../../static/img/rich/user_img.png" mode=""></image>
						</view>
						<view class="list_text">
							<view>推荐好友</view>
							<view>2020-12-31 14:25</view>
						</view>
					</view>
					<view class="list_b">+1</view>
				</view>
				<view class="body_list">
					<view class="list_a">
						<view>
							<image src="../../static/img/rich/user_img.png" mode=""></image>
						</view>
						<view class="list_text">
							<view>推荐好友</view>
							<view>2020-12-31 14:25</view>
						</view>
					</view>
					<view class="list_b">+1</view>
				</view>
				
				<view class="body_list">
					<view class="list_a">
						<view>
							<image src="../../static/img/rich/user_img.png" mode=""></image>
						</view>
						<view class="list_text">
							<view>推荐好友</view>
							<view>2020-12-31 14:25</view>
						</view>
					</view>
					<view class="list_b">+1</view>
				</view>
				<view class="body_list">
					<view class="list_a">
						<view>
							<image src="../../static/img/rich/user_img.png" mode=""></image>
						</view>
						<view class="list_text">
							<view>推荐好友</view>
							<view>2020-12-31 14:25</view>
						</view>
					</view>
					<view class="list_b">+1</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               vip:0
			}
		},
		methods: {
			ontrueGetList() {
				uni.showToast({
					title: '第3个页面'
				})
				console.log("加载了第三个页面，可以把网络请求放这里")
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
	.main {
		// background-image: linear-gradient(45deg, #f43f3b, #ec008c);
	}

	.main_top {
		height: 506rpx;
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 666;
		background-size: 100% 100%;
	}

	.main_top image {
		width: 230rpx;
		height: 230rpx;
	}

	.top_a {
		text-align: center;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		padding-top: 32rpx;
	}

	.top_b {
		width: 158rpx;
		height: 52rpx;
		background: rgba(255, 255, 255, 0.2);
		// opacity:0.2;
		border-radius: 0px 32px 32px 0px;
		line-height: 52rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
	}

	.top_c {
		font-size: 44rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 40rpx;
	}

	.top_plan {
		margin-top: 40rpx;
		width: 300rpx;
		height: 14rpx;
		background: rgba(245, 245, 249, 0.2);
		border-radius: 99rpx;
	}

	.top_plan>view {
		background: rgba(245, 245, 249, 1);
		opacity: 1;
		height: 14rpx;
		border-radius: 99rpx;
	}

	.top_d {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
	}

	.top_e {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 16rpx;
	}

	.main_top_f {
		display: flex;
		justify-content: space-around;
		margin-left: 25rpx;
	}

	.body_title {
		text-align: center;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
		position: fixed;
		top: 500rpx;width: 100%;
		z-index: 999;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #F8F8F8;
		
	}

	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box {
		width: 100vw;
		height: 100vh;
		padding-bottom: 100rpx;
		box-sizing: border-box;
		padding-top: 545rpx;
		// position: relative;
		// top: ;
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

	// image {
	// 	width: 750rpx;
	// 	height: 750rpx;
	// }
	.body_list {
		width: 650rpx;
		height: 160rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 30px rgba(153, 153, 153, 0.3);
		opacity: 1;
		border-radius: 16rpx;
		display: flex;
		justify-content: space-between;
		margin: auto;
		padding: 0 30rpx;
		margin-top: 20rpx;
	}

	.list_a {
		margin-top: 40rpx;
		display: flex;
	}

	.list_b {
		line-height: 160rpx;
		// float: right;\
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
	}

	.body_list image {
		width: 88rpx;
		height: 88rpx;
	}

	.list_text {
		margin-left: 20rpx;
	}

	.list_text>view:nth-child(1) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.list_text>view:nth-child(2) {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(206, 206, 206, 1);
		opacity: 1;
		margin-top: 15rpx;
	}
	.main_0{
		background-image: url('../../static/img/rich/0_bj.png');
	}
	.main_1{
		background-image: url('../../static/img/rich/1_bj.png');
		}
	.main_2{
		background-image: url('../../static/img/rich/2_bj.png');}
	.main_3{
		background-image: url('../../static/img/rich/3_bj.png');}
	.main_4{
		background-image: url('../../static/img/rich/4_bj.png');}
</style>
