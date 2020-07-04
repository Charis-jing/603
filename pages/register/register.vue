<template>
	<view>
		<view class="header">
			<view>注册</view>
			<view @click="toLogin()">去登录</view>
		</view>
		<view class="title">
			<view>手机号快速注册</view>
		</view>
		<view class="from">
			<view>手机号:</view>
			<view class="input_bj">
				<input v-model="Tel" type="number" maxlength="13" placeholder="请输入手机号" value="" />
			</view>

			<view>验证码:</view>
			<view class="input_bj"><input v-model="VerificationCode" style="width: 75%;" type="text" maxlength="4" placeholder="请输入验证码" value="" />
				<view class="phone_yz" @click="getSmsCode()">
					{{SendText}}
				</view>
			</view>
			<view>图形验证码:</view>
			<view class="input_bj"><input v-model="VerifyCode" style="width: 80%;" type="text" maxlength="4" placeholder="请输入图形验证码"
				 value="" />
				<view class="img_yz" @click="getImgCode()">
					<image :src="ImgCodeSrc" mode="aspectFill"></image>
				</view>
			</view>
			<view>登录密码:</view>
			<view class="input_bj">
				<input v-model="NewPassword" type="password" maxlength="20" placeholder="请输入密码" value="" />
			</view>
			<view>确定密码:</view>
			<view class="input_bj">
				<input v-model="ConNewPassword" type="password" maxlength="20" placeholder="请输入确认密码" value="" />
			</view>
			<view>邀请码:</view>
			<view class="input_bj">
				<input v-model="RecommendName" type="text" maxlength="13" placeholder="请输入邀请码" value="" />
			</view>
		</view>
		
		<view class="but_login" @click="register()">立即注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				psw: true,
				radio_ta: 0,
				Tel: '',
				VerifyCode: '', //图形验证码
				VerificationCode:'',//短信验证码
				ImgCodeSrc: '',
				RecommendName:'',
				NewPassword:'',
				ConNewPassword:'',
				
				SendStatus:0, //短信是否发送，120s倒计时
				SendText:'获取验证码'
			}
		},
		onLoad() {
			this.getImgCode(); //获取图形验证码
		},
		methods: {
			//登录
			toLogin(){
				uni.redirectTo({
					url:'/pages/login/login'
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

			//获取短信验证码
			getSmsCode() {
				if(this.SendStatus != 0){
					return false;
				}
				if (this.Tel == '') {
					return this.toastMsg('请输入手机号');
				}
				if (!(/^1[3456789]\d{9}$/.test(this.Tel))) {
					return this.toastMsg('手机号格式错误，请重新输入');
				}
				if (this.VerifyCode == '') {
					return this.toastMsg('请输入图形验证码');
				}
				//获取验证码
				this.apiRequest('/QT/DefaultF/RegisterCode', (res) => {
					//服务端返回的秒数
					var time = res.Data.RemainingTime;
					this.toastMsg('发送成功');
					this.SendStatus = 1;
					var interval = setInterval(()=>{
						if(--time<=0){
							this.SendStatus = 0;
							this.SendText = '获取验证码';
							clearInterval(interval);
						}else{
							this.SendText = time+'s后重试';
						}
					},1000);
				}, 'POST', {
					Tel: this.Tel.trim(),
					VerifyCode: this.VerifyCode.trim()	
				})
			},
			//开始注册
			register(){
				if (this.Tel == '') {
					return this.toastMsg('请输入手机号');
				}
				if (!(/^1[3456789]\d{9}$/.test(this.Tel))) {
					return this.toastMsg('手机号格式错误，请重新输入');
				}
				if (this.VerificationCode == '') {
					return this.toastMsg('请输入短信验证码');
				}
				if(this.NewPassword == ''){
					return this.toastMsg('请输入密码');
				}
				if(this.ConNewPassword == ''){
					return this.toastMsg('请输入确认密码');
				}
				if(this.ConNewPassword != this.NewPassword){
					return this.toastMsg('两次密码输入不一致');
				}
				if(this.RecommendName == ''){
					return this.toastMsg('请输入邀请码');
				}
				this.apiRequest('/QT/DefaultF/RegeditSumbit', (res) => {
					this.toastMsg(res.ErrorMsg);
					uni.redirectTo({
						url:'/pages/login/login'
					})
				}, 'POST', {
					RecommendName: this.RecommendName.trim(),
					NewPassword: this.NewPassword.trim(),
					ConNewPassword:this.ConNewPassword.trim(),
					Tel:this.Tel.trim(),
					VerificationCode:this.VerificationCode.trim()
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
	.phone_yz {
		width: 160rpx;
		/* height:88rpx; */
		background: rgba(246, 17, 55, 1);
		opacity: 1;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		line-height: 60rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 8rpx;
		text-align: center;
		line-height: 88rpx;
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
		margin-bottom: 30rpx;
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
