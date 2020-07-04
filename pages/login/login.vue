<template>
	<view>
		<view class="header">
			<view>登录</view>
			<view @click="toRegister()">立即注册</view>
		</view>
		<view class="title">
			<view>登录后更精彩</view>
			<view>更多好物等你来选</view>
		</view>
		<view class="from">
			<view>手机号:</view>
			<view class="input_bj">
				<input type="number" v-model="Name" maxlength="13" placeholder="请输入手机号" value="" />
				</view>
			<view>图形验证码:</view>
			<view class="input_bj">
				<input style="width: 80%;" v-model="VerifyCode" type="text" maxlength="4" placeholder="请输入图形验证码" value="" />
				<view class="img_yz">
					<image @click="getImgCode()" :src="ImgCodeSrc" mode="aspectFill"></image>
				</view>
			</view>
			<view>密码:</view>
			<view class="input_bj">
				<input style="width: 80%;" v-model="Pwd" type="text" :password="psw" placeholder="请输入密码" value="" />
				<view class="psw" @click="psw_data()">
					<image :src="psw==true?'../../static/img/login/1.png':'../../static/img/login/0.png'" mode=""></image>
				</view>
			</view>
		</view>
		<view class="forget_code" @click="toFoget()">忘记密码？</view>
		<view class="but_login" @click="login()">登录</view>
		<view class="radio_body">
			<view :class="radio_ta==0?'radio':'radio_to'" @click="radio_data()"></view>已同意<span>《用户协议》</span>和<span>《隐私协议》</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Name:'',
				VerifyCode:'',
				ImgCodeSrc:'',
				Pwd:'',
				psw: true,
				radio_ta: 0
			}
		},
		onLoad() {
			this.getImgCode();
		},
		methods: {
			//登录操作
			login(){
				if (this.Name == '') {
					return this.toastMsg('请输入手机号');
				}
				if (!(/^1[3456789]\d{9}$/.test(this.Name))) {
					return this.toastMsg('手机号格式错误，请重新输入');
				}
				if(this.VerifyCode == ''){
					return this.toastMsg('请输入验证码');
				}
				if(this.Pwd == ''){
					return this.toastMsg('请输入密码');
				}
				if(this.radio_ta != 1){
					return this.toastMsg('请先同意用户协议');
				}
				//开始登录
				this.apiRequest('/QT/DefaultF/Login', (res) => {
					uni.redirectTo({
						url:'/pages/index/index'
					})
				}, 'POST', {
					VerifyCode: this.VerifyCode,
					Name: this.Name,
					Pwd:this.Pwd
				})
			},
			
			//获取图形验证码
			getImgCode() {
				this.apiRequest('/QT/common/GetValidateCode', (res) => {
					this.ImgCodeSrc = res.Data.ImageUrl;
				}, 'POST', {
					length: 4,
					codeType: 2
				})
			},
			//跳转忘记密码
			toFoget(){
				uni.redirectTo({
					url:'/pages/forget_code/forget_code'
				})
			},
			toRegister(){
				uni.navigateTo({
					url:'/pages/register/register'
				})
			},
			psw_data() {
				if (this.psw == true) {
					this.psw = false
				} else {
					this.psw = true
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
	}

	.header {
		height: 36rpx;
		padding-top: 25rpx;
	}

	.header>view:nth-child(1) {
		float: left;
		margin-left: 350rpx;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		line-height: 36rpx;
	}

	.header>view:nth-child(2) {
		display: flex;
		float: right;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(246, 17, 55, 1);
		opacity: 1;
		line-height: 36rpx;
		padding-right: 30rpx;
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
