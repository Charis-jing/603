<template>
	<view class="main">
		<!-- <scroll-view class="main_box" scroll-y="true"  @scrolltolower="lower"> -->
		<view class="main_top">
			资产
		</view>
		<view class="main_a">
			<view class="main_a_top a_top_img">
				<view style="margin-top: 25rpx;" @click="show_jh(1)">
					<view class="a_top_top">
						<view>
							<image src="../../static/img/money/01.png" mode=""></image>
						</view>
						<view>USDT</view>
					</view>
					<view class="a_top">63.315214823123128</view>
				</view>
				<view class="a_top_jh" @click="jihuo()">激活</view>
			</view>
			<view>
				<view class="list" @click="goToList('../zc_cz/zc_cz')">
					<view class="list_a">
						<view>
							<image src="../../static/img/money/001.png" mode=""></image>
						</view>
						<view>充币</view>
					</view>
					<view class="list_b">
						<image src="../../static/img/money/you.png" mode=""></image>
					</view>
				</view>
				<view class="list_fgx"></view>
				<view class="list">
					<view class="list_a">
						<view>
							<image src="../../static/img/money/002.png" mode=""></image>
						</view>
						<view>提现</view>
					</view>
					<view class="list_b">
						<image src="../../static/img/money/you.png" mode=""></image>
					</view>
				</view>
				<view class="list_fgx"></view>
				<view class="list">
					<view class="list_a">
						<view>
							<image src="../../static/img/money/003.png" mode=""></image>
						</view>
						<view>账单记录</view>
					</view>
					<view class="list_b">
						<image src="../../static/img/money/you.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="main_a_up" v-show="showto==1" @click="show_jh(2)">
				<image src="../../static/img/money/004.png" mode=""></image>
			</view>
		</view>
		<view :class="show==0?'main_b_2':'main_b'">
			<view class="main_a_top b_top_img">
				<view>
					<view class="a_top_top">
						<view>
							<image src="../../static/img/money/02.png" mode=""></image>
						</view>
						<view>积分</view>
					</view>
					<view class="a_top">5263.31</view>
				</view>
				<!-- <view class="a_top_jh">激活</view> -->
			</view>
			<view>
				<view class="list">
					<view class="list_a">
						<view>
							<image src="../../static/img/money/005.png" mode=""></image>
						</view>
						<view>兑换</view>
					</view>
					<view class="list_b">
						<image src="../../static/img/money/you.png" mode=""></image>
					</view>
				</view>
				<view class="list_fgx"></view>
				<view class="list">
					<view class="list_a">
						<view>
							<image src="../../static/img/money/003.png" mode=""></image>
						</view>
						<view>积分明细</view>
					</view>
					<view class="list_b">
						<image src="../../static/img/money/you.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 0,
				showto: 0
			}
		},
		methods: {
			goToList(e){
				uni.navigateTo({
				    url: e
				});
			},
			jihuo(){
					console.log(123)
				this.apiRequest('/QT/MemberF/Activeted', (res) => {
					// this.member = res.Data.member;
					console.log(res)
					uni.showToast({
					    title: res.Data.Remark,
					    duration: 2000,
						icon:"none"
					});
					// if(res.)
				}, 'POST')
				
					
			},
			show_jh(e) {
				if (e == 1) {

					this.show = 1
					let that = this;
					setTimeout(function() {
						that.showto = 1
					}, 2000);

				} else {
					this.show = 0
					this.showto = 0

				}
			},
			ontrueGetList() {
				uni.showToast({
					title: '第4个页面'
				})
				console.log("加载了第四个页面，可以把网络请求放这里")
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
		// position: fixed;
		// left: 5%;
	}

	.main_a {
		// height: 150rpx;
		// overflow:hidden
	}

	.main_b {
		position: fixed;
		top: 1150rpx;
		left: 33rpx;
		right: 33rpx;
		// top:230rpx;
		background-color: #FFFFFF;
		// z-index: 666;
		border-radius: 120rpx;
		transition: all 2s;
	}

	.main_b_2 {
		position: fixed;
		top: 200rpx;
		left: 33rpx;
		right: 33rpx;
		background-color: #FFFFFF;
		// z-index: 666;
		border-radius: 120rpx;
		transition: all 2s;
	}

	.main_a_up {
		position: fixed;
		top: 70%;
		left: 45%;
		width: 66rpx;
		height: 66rpx;
		margin: auto;

	}

	.main_a_up image {
		width: 66rpx;
		height: 66rpx;
	}

	.list image {
		width: 32rpx;
		height: 32rpx;
		position: relative;
		top: 3rpx;
	}

	.list {
		width: 650rpx;
		margin: 30rpx auto;
	}

	.list,
	.list_a {
		display: flex;
		justify-content: space-between;

	}

	.list_a {
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
	}

	.list_a>view:nth-child(2) {
		margin-left: 20rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
	}

	.list_b {
		width: 17rpx;
		height: 32rpx;
		// background:rgba(153,153,153,1);
		color: black;
		opacity: 1;
	}

	.list_fgx {
		width: 650rpx;
		height: 1rpx;
		background-color: rgba(241, 241, 241, 1);
		// border:1rpx solid rgba(241,241,241,1);
		opacity: 1;
		margin: auto;
	}

	.a_top_jh {
		float: right;
		width: 160rpx;
		height: 60rpx;
		margin-right: 47rpx;
		margin-top: 30rpx;
		line-height: 60rpx;
		text-align: center;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3rpx 10rpx rgba(18, 128, 94, 1);
		opacity: 1;
		border-radius: 30rpx;
		font-size: 26rpx !important;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(47, 166, 129, 1) !important;
		opacity: 1;
	}

	.main_top {
		text-align: center;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		padding-top: 26rpx;
	}

	.main_a_top {
		background-size: 100% 100%;
		width: 680rpx;
		// width:750rpx;
		height: 228rpx;
		margin: auto;
		opacity: 1;
		border-radius: 16rpx;
	}

	.a_top_img {
		background-image: url(../../static/img/money/bj1.png);
	}

	.b_top_img {

		background-image: url(../../static/img/money/bj2.png);
	}

	.main_a_top>view:nth-child(1) {

		display: flex;
		justify-content: space-between;
		padding: 0 33rpx;
		padding-top: 40rpx;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.main_a_top image {
		width: 56rpx;
		height: 56rpx;
		position: relative;
		top: -5rpx;
	}

	.a_top_top {
		display: flex;
		justify-content: space-around;
	}

	.a_top_top>view:nth-child(2) {
		margin-left: 20rpx;
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

	// image{width:750rpx;height: 750rpx;}
</style>
