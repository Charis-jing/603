<template>
	<view>
		<view class="header">
			<view>
				<image src="../../static/img/login/x.png" mode=""></image>
			</view>
			<view>注册</view>
		</view>
		<view class="title">
			<view>设置密码</view>
		</view>
		<view class="from">
			<view>登录密码:</view>
			<view class="input_bj"><input style="width: 80%;" type="text" :password="psw" placeholder="请输入密码" value="" />
				<view class="psw" @click="psw_data(1)">
					<image :src="psw==true?'../../static/img/login/1.png':'../../static/img/login/0.png'" mode=""></image>
				</view>
			</view>
			<view>确认密码:</view>
			<view class="input_bj"><input style="width: 80%;" type="text" :password="psw2" placeholder="请再次确定8-12位登录密码" value="" />
				<view class="psw" @click="psw_data(2)">
					<image :src="psw2==true?'../../static/img/login/1.png':'../../static/img/login/0.png'" mode=""></image>
				</view>
			</view>

			<view>邀请码:</view>
			<view class="input_bj"><input type="number" maxlength="13" placeholder="请输入邀请码(必填)" value="" /></view>
		</view>
		<view class="but_login">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				psw: true,
				psw2: true,
				radio_ta: 0
			}
		},
		methods: {
			psw_data(e) {
				if (e == 1) {
					if (this.psw == true) {
						this.psw = false
					} else {
						this.psw = true
					}
				} else {
					if (this.psw2 == true) {
						this.psw2 = false
					} else {
						this.psw2 = true
					}
				}
			},
			radio_data() {
				if (this.radio_ta == 0) {
					this.radio_ta = 1
				} else {
					this.radio_ta = 0
				}
			}
		}
	}
</script>

<style>
	.phone_yz {
		width: 160rpx;
		height: 60rpx;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		line-height: 60rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-right: 15rpx;
		border-radius: 15rpx;
		text-align: center;
		margin-top: 14rpx;

	}

	.from {
		padding: 0 65rpx;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.from>view {
		margin-top: 24rpx;
	}

	.input_bj input {
		width: 100%;
		height: 88rpx;
	}

	.psw {
		width: 44rpx;
		height: 44rpx;
		background: rgba(0, 0, 0, 1);
		border-radius: 50%;
		opacity: 0.3;
		text-align: center;
		line-height: 44rpx;
		margin-top: 20rpx;
		margin-left: 25rpx;
	}

	.input_bj image {
		width: 27rpx;
		height: 15rpx;
	}

	.input_bj {
		padding-left: 30rpx;
		margin-top: 14rpx !important;
		height: 88rpx;
		background: rgba(239, 239, 239, 1);
		opacity: 1;
		border-radius: 8rpx;
		display: flex;
		line-height: 88rpx;
	}

	.header {
		height: 36rpx;
		padding-top: 25rpx;
	}

	.header>view:nth-child(1) {
		float: left;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 550;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		line-height: 36rpx;
		margin-left: 34rpx;
	}

	.header image {
		width: 44rpx;
		height: 44rpx;
	}

	.header>view:nth-child(2) {
		float: right;
		position: absolute;
		right: 45%;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.title {
		text-align: center;
		margin-top: 136rpx;
	}

	.title>view:nth-child(1) {
		font-size: 60rpx;
		font-family: Source Han Sans CN;
		font-weight: 600;
		line-height: 102rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.title>view:nth-child(2) {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		line-height: 48rpx;
		color: rgba(102, 102, 102, 1);
		letter-spacing: 25rpx;
		opacity: 1;
		margin-top: 20rpx;
	}

	.img_yz {
		text-align: right;
	}

	.img_yz>image {
		width: 209rpx;
		height: 88rpx;
		border-radius: 8rpx;
	}

	.forget_code {
		text-align: right;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		padding-right: 55rpx;
		margin-top: 20rpx;
	}

	.but_login {
		width: 670rpx;
		margin: auto;
		height: 88rpx;
		text-align: center;
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		border-radius: 44rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		line-height: 88rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 70rpx;
		margin-bottom: 50rpx;
	}

	.radio_body {
		padding-left: 60rpx;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #999999;
		display: flex;
		margin-top: 23rpx;
	}

	.radio_body span {
		color: #F61137;
	}

	.radio {
		width: 30rpx;
		height: 30rpx;
		/* background-color: red; */
		border-radius: 50%;
		border: 1rpx solid #999999;
		margin-right: 22rpx;
	}

	.radio_to {
		width: 30rpx;
		height: 30rpx;
		background-color: #F61137;
		border-radius: 50%;
		border: 1rpx solid #F61137;
		margin-right: 22rpx;
	}
</style>
