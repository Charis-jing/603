<template>
	<view style="padding-top: 20rpx;">
		<view class="main_top"><input type="text" v-model="NiName" value=""placeholder="输入新昵称" /></view>
	<view class="but" @click="update()">确认</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				NiName:''
			}
		},
		onLoad(res){
			if(res.hasOwnProperty('NiName')){
				this.NiName = res.NiName;
			}
		},
		methods: {
			update(){
				if(this.NiName == ''){
					return this.toastMsg('请输入昵称');
				}
				//获取会员信息
				this.apiRequest('/QT/MemberF/SaveNiName', (res) => {
					this.toastMsg('修改成功');
					setTimeout(function(){
						uni.navigateBack({})
					},1000);
				}, 'POST',{
					NiName:this.NiName
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F9;
	}
.main_top{
	height:94rpx;
	background:rgba(255,255,255,1);
	opacity:1;
	
}
input{
	padding-top: 25rpx;margin-left: 30rpx;
}
.but{
	width:690rpx;
	height:88rpx;
	background:rgba(246,17,55,1);
	opacity:1;
	border-radius:44rpx;
	line-height: 88rpx;
	margin: auto;
	text-align: center;
	font-size:32rpx;
	font-family:Source Han Sans CN;
	font-weight:500;
	color:rgba(255,255,255,1);
	opacity:1;
	margin-top: 120rpx;
}
</style>
