<template>
	<view class="main">
		<view style="background: #F61137;">
			<view class="main_top">
				个人中心
			</view>
			<view class="main_top_img">
				<view>
					<image @click="img_update()" :src="this.baseUrl+member.HeadIcon" mode=""></image>
				</view>
				<view>
					<image @click="toPage('/pages/my_team/my_team')" src="../../static/img/user/001.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main_name">
			<view class="name_a" @click="toPage('/pages/name_update/name_update?NiName='+member.NiName)">
				<view>{{member.NiName?member.NiName:'设置昵称'}}</view>
				<view>
					<image src="../../static/img/user/002.png" mode=""></image>
				</view>
			</view>
			<view class="name_b">
				<view>
					<image src="../../static/img/user/003.png" mode=""></image>
				</view>
				<view>团队长</view>
			</view>
		</view>
		<view class="user_id">
			<view class="id">
				<view>
					<image src="../../static/img/user/004.png" mode=""></image>
				</view>
				<view>{{member.Name}}</view>
			</view>
			<view class="phone">
				<view>
					<image src="../../static/img/user/005.png" mode=""></image>
				</view>
				<view>{{member.Tel}}</view>
			</view>
		</view>
		<view class="main_fg"></view>
		<view class="order_top">
			<view>我的订单</view>
			<view class="top_a">
				<view @click="toPage('/pages/shop_order/shop_order')">查看全部订单</view>
				<view>
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="order_state">
			<view @click="toPage('/pages/shop_order/shop_order?status=0')">
				<view>
					<image src="../../static/img/user/006.png" mode=""></image>
				</view>
				<view>待付款</view>
			</view>
			<view @click="toPage('/pages/shop_order/shop_order?status=1')">
				<view>
					<image src="../../static/img/user/007.png" mode=""></image>
				</view>
				<view>待收货</view>
			</view>
			<view @click="toPage('/pages/shop_order/shop_order?status=2')">
				<view>
					<image src="../../static/img/user/008.png" mode=""></image>
				</view>
				<view>已完成</view>
			</view>
		</view>
		<view class="list">
			<view class="list_body" @click="toPage('/pages/site_list/site_list')">
				<view class="body_a">
					<view>
						<image src="../../static/img/user/009.png" mode=""></image>
					</view>
					<view>地址管理</view>
				</view>
				<view class="body_b">
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
			<view class="list_fgx"></view>

			<view class="list_body" @click="toPage('/pages/shop_sc/shop_sc')">
				<view class="body_a">
					<view>
						<image src="../../static/img/user/010.png" mode=""></image>
					</view>
					<view>收藏商品</view>
				</view>
				<view class="body_b">
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
			<view class="list_fgx"></view>
			<view class="list_body">
				<view class="body_a">
					<view>
						<image src="../../static/img/user/012.png" mode=""></image>
					</view>
					<view>邀请好友</view>
				</view>
				<view class="body_b">
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
			<view class="list_fgx"></view>
			<view class="list_body" @click="toPageto()">
				<view class="body_a">
					<view>
						<image src="../../static/img/user/013.png" mode=""></image>
					</view>
					<view>入驻商城</view>
				</view>
				<view class="body_b">
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
			<view class="list_fgx"></view>
			<view class="list_body" @click="toPage('/pages/set/set')">
				<view class="body_a">
					<view>
						<image src="../../static/img/user/014.png" mode=""></image>
					</view>
					<view>设置</view>
				</view>
				<view class="body_b">
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				member: {
					"Name": "会员账号",
					"NiName": "姓名",
					"GradeName": "级别",
					"RoleName": "角色",
					"Tel": "手机号",
					"GoldAddress": "钱包地址",
					"WithdrawGold": "最近一次提现金额",
					"HeadIcon": "头像",
					"IsVerified": "是否实名认证,false可进行实名认证",
					"WalletList": {
						"Balance": "钱包余额",
						"WalletName": "钱包名称"
					}
				}
			}
		},
		methods: {
			img_update() {
				let that = this
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths[0])
						uni.uploadFile({
							url: '/QT/common/uploadimg', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'url',
							formData: {

							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes)
								console.log(JSON.parse(uploadFileRes.data).Data.url);
								let url = JSON.parse(uploadFileRes.data).Data.url
								that.apiRequest('/QT/MemberF/SaveHeadIcon', (res) => {
									// this.member = res.Data.member;
									console.log(res)
									if (res.ErrorCode == 0) {
										console.log(12312)
										that.ontrueGetList()
									}
								}, 'POST', {
									HeadIcon: url
								})
							}
						});
					}
				});
			},
			//跳转页面
			toPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			//判断入驻商城状态
			toPageto() {
				this.apiRequest('/QT/MemberF/ApplyReportCenter', (res) => {
					// this.member = res.Data.member;
					console.log(res)
					if (res.Data.Remark) {
						uni.showToast({
							title: res.Data.Remark,
							duration: 2000,
							icon: "none"
						});
					}
					// if(res.)
				}, 'GET')
				return
				uni.navigateTo({
					url: '/pages/rz_shop_data/rz_shop_data'
				})

			},
			ontrueGetList() {
				uni.showToast({
					title: '第5个页面'
				})
				console.log("加载了第五个页面，可以把网络请求放这里")

				//获取会员信息
				this.apiRequest('/QT/MemberF/MemberView', (res) => {
					this.member = res.Data.member;
				}, 'GET')
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

<style>
	.list_fgx {
		width: 690rpx;
		height: 1rpx;
		background: rgba(245, 245, 249, 1);
		opacity: 1;
		margin: auto;
	}

	.list_body {
		display: flex;
		justify-content: space-between;
		margin: 23rpx 0;
		padding: 0 40rpx;
	}

	.list {
		margin-top: 60rpx;
	}

	.body_a {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.body_a image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}

	.body_b image {

		height: 30rpx;
		width: 28rpx;
	}

	.order_state {
		margin-top: 62rpx;
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		padding: 0 106rpx;
	}

	.order_state image {
		width: 63rpx;
		height: 63rpx;
	}

	.order_top {
		display: flex;
		justify-content: space-between;
		padding: 0 50rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		height: 32rpx;
		line-height: 32rpx;
	}

	.order_top image {
		height: 30rpx;
		width: 28rpx;
	}

	.top_a {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
	}

	.top_a>view:nth-child(1) {
		margin-right: 28rpx;
	}

	.main_fg {
		height: 20rpx;
		background: rgba(245, 245, 249, 1);
		opacity: 1;
		margin-top: 41rpx;
		margin-bottom: 47rpx;
	}

	.user_id {
		display: flex;
		justify-content: space-between;
		padding: 0 65rpx;
	}

	.user_id>view {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		height: 32rpx;
		line-height: 32rpx;
	}

	.user_id image {
		width: 32rpx;
		height: 32rpx;
		margin-right: 10rpx;
	}

	.main_name {
		background: #FFFFFF;
		opacity: 1;
		border-radius: 40rpx 40rpx 0px 0px;
		position: relative;
		top: -40rpx;
		padding-left: 264rpx;
		padding-top: 23rpx;
	}

	.main_name image {
		position: relative;
		top: 3rpx;
	}

	.name_a {
		font-size: 42rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.name_a image {
		width: 31.82rpx;
		height: 31.82rpx;
		margin-left: 31rpx;
	}

	.name_b {
		width: 145rpx;
		height: 40rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 40rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		background: #F61137;
		border-radius: 20rpx;
		text-align: center;
		margin-top: 10rpx;

	}

	.name_b>view:nth-child(1) {
		margin-left: 20rpx;
	}

	.name_b>view:nth-child(2) {
		margin-left: 9rpx;
	}

	.name_b image {
		width: 24rpx;
		height: 24rpx;
	}

	.main_name>view {
		display: flex;

	}

	.main {
		display: block !important;
	}

	.main_top {
		width: 750rpx;
		text-align: center;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		padding-top: 26rpx;
	}

	.main_top_img {
		display: flex;
		justify-content: space-between;
		height: 175rpx;
		padding: 0 30rpx;
	}

	.main_top_img>view:nth-child(1) image {
		width: 210rpx;
		height: 210rpx;
		border-radius: 50%;
		position: absolute;
		top: 120rpx;
		z-index: 666;
	}

	.main_top_img>view:nth-child(2) image {
		width: 291rpx;
		height: 145rpx;
	}
</style>
