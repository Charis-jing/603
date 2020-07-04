<template>
	<view style="padding-top:56rpx ;">
		<view class="main_top">
			<view>店铺图标</view>
			<view>
				<image @click="img_update()" :src="top_img_show" mode=""></image>
			</view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>店铺名称</view>
			<view><input type="text" v-model="ShopName" value="" placeholder="请输入店铺名称" /></view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>联系人</view>
			<view><input type="text" v-model="Tel" value="" placeholder="请输入联系人" /></view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>联系电话</view>
			<view><input type="number" v-model="LegalName" value="" placeholder="请输入联系电话" /></view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>地区</view>
			<view class="biao">
				<view class="value">
					<biaofun-region @change="onChangeRegion"></biaofun-region>
				</view>
				<view>
					<image src="../../static/img/money/you.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>详细地址</view>
			<view><input type="text" v-model="Address" value="" placeholder="请输入详细地址 街道/门牌号" /></view>
		</view>
		<view class="fgx"></view>
		<view class="bot" @click="bot()">保存</view>
	</view>
</template>

<script>
	const regionData = require('@/static/biaofun-region/region.json');
	export default {
		data() {
			return {
				top_img_show: '../../static/img/rz/003.png',
				top_img: '',
				ShopName: '',
				Tel: '',
				LegalName: '',
				Address: '',
				region: ''
			}
		},
		onLoad(){
			
		},
		methods: {
			bot() {
				uni.navigateTo({
				    url: '../rz_shop/rz_shop'
				});
				return
				console.log(213)
				let that=this;
				if(!that.top_img){
					uni.showToast({
					    title: '请上传店铺图标',
					    duration: 2000,
						icon :"none"
					});
					
					return
				}else if(!that.ShopName){
					uni.showToast({
					    title: '请填写店铺名称',
					    duration: 2000,
						icon :"none"
					});
					return
				}else if(!that.Tel){
					uni.showToast({
					    title: '请填写联系电话',
					    duration: 2000,
						icon :"none"
					});
					return
				}else if(!that.LegalName){
					uni.showToast({
					    title: '请填写联系人',
					    duration: 2000,
						icon :"none"
					});
					return
				}else if(!that.region){
					uni.showToast({
					    title: '请选择地区',
					    duration: 2000,
						icon :"none"
					});
				}else if(!that.Address){
					uni.showToast({
					    title: '请填写详细地址',
					    duration: 2000,
						icon :"none"
					});
					return
				}
				// return
				//入驻商城
				this.apiRequest('/QT/MemberF/SubmitApplyReportCenter', (res) => {
					// this.member = res.Data.member;
				}, 'POST', {
					ShopHeadIcon: that.top_img,
					ShopName: that.ShopName,
					Province: that.region[0].name,
					City: that.region[1].name,
					County: that.region[2].name,
					Address: that.Address,
					LegalName: that.LegalName,
					Tel: that.tel

				})
			},
			onChangeRegion(region) {
				this.region = region
				console.log('选择的省市区数据：', this.region);
			},
			img_update() {
				let that = this
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths[0])
						// that.top_img=tempFilePaths[0]
						console.log(tempFilePaths[0])
						// return
						uni.uploadFile({
							url: '/QT/common/uploadimg', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'url',
							formData: {},
							success: (uploadFileRes) => {
								console.log(uploadFileRes)
								console.log(JSON.parse(uploadFileRes.data).Data.url);
								let url = JSON.parse(uploadFileRes.data).Data.url
								that.top_img = url
								that.top_img_show = that.baseUrl + url
							}
						});
					}
				});
			},
		}
	}
</script>

<style>
	.bot {
		width: 690rpx;
		height: 88rpx;
		background: rgba(246, 17, 55, 1);
		border-radius: 44rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		margin: auto;
		margin-top: 100rpx;
		text-align: center;
		line-height: 88rpx;
	}

	.biao {
		display: flex;
	}

	span {
		color: #000000 !important;
	}

	.biao image {
		width: 30rpx;
		height: 30rpx;
		position: relative;
		top: 5rpx;
		margin-left: 10rpx;
	}

	.main_list {
		display: flex;
		justify-content: space-between;
		width: 690rpx;
		margin: auto;
		margin-top: 40rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
	}

	.value {
		color: #000000
	}

	input {
		text-align: right;
		color: #000000;
		font-size: 32rpx;
		width: 400rpx;
	}

	.fgx {
		width: 690rpx;
		height: 2rpx;
		background: rgba(245, 245, 249, 1);
		opacity: 1;
		margin: auto;
		margin-top: 40rpx;
	}

	.main_top {
		display: flex;
		justify-content: space-between;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		width: 690rpx;
		margin: auto;
	}

	.main_top>view:nth-child(1) {
		margin-top: 34rpx;
	}

	.main_top image {
		width: 100rpx;
		height: 100rpx;
	}
</style>
