<template>
	<view style="padding-top:56rpx ;">
		<view class="main_list">
			<view>姓名</view>
			<view><input type="text" v-model="AccepterName" value="" placeholder="请输入姓名" /></view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>电话</view>
			<view><input type="text" v-model="AccepterTel" value="" placeholder="请输入电话" /></view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>地区</view>
			<view class="biao">
				<view class="value" v-show="OID!=1">
					<biaofun-region :defaultValue="defaultValue" @change="onChangeRegion"></biaofun-region>
				</view>

				<view class="value" v-show="OID==1">
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
			<view><input type="text" value="" v-model="Street" placeholder="请输入详细地址 街道/门牌号" /></view>
		</view>
		<view class="fgx"></view>
		<view class="main_list">
			<view>默认地址</view>
			<view>
				<switch color="red" :checked="IsDefault" @change="switch2Change" />
			</view>
		</view>
		<view class="fgx"></view>
		<view class="bot" @click="but()">保存</view>
	</view>
</template>

<script>
	const regionData = require('@/static/biaofun-region/region.json');
	export default {
		data() {
			return {
				region: [''],
				IsDefault: false,
				AccepterName: '',
				AccepterTel: '',
				AddrInfo: '',
				defaultValue: [],
				OID: '',
				Street:''
			}
		},
		onLoad(e) {
			this.default_Value = [],
				this.OID = e.Oid
			console.log(e.Oid)
			if (e.Oid != 1) {
				this.data_list()
			}
		},
		methods: {
			data_list() {
				this.apiRequest('/QT/MallF/GetMallAddr', (res) => {
					// this.list = res.Data.list;
					console.log(res)
					// if()
					// if(res.)
					// let Street = res.Data.Addr.Street
					console.log(this.defaultValue[0])
					this.defaultValue=[]
					this.defaultValue.push(res.Data.Addr.Province)
					this.defaultValue.push(res.Data.Addr.City)
					this.defaultValue.push(res.Data.Addr.County)
					// this.defaultValue[0]=res.Data.Addr.Province
					// this.defaultValue[1]=res.Data.Addr.City
					// this.defaultValue[2]=res.Data.Addr.County
					// this.defaultValue[1]= res.Data.Addr.City
					// this.defaultValue[2]= res.Data.Addr.County
					console.log(this.defaultValue)
					this.AccepterName = res.Data.Addr.AccepterName
					this.AccepterTel = res.Data.Addr.AccepterTel
					this.IsDefault = res.Data.Addr.IsDefault
					this.Street= res.Data.Addr.Street
					// console.log(add.replace(' ',","))

				}, 'GET', {
					OID: this.OID
				})
			},
			onChangeRegion(region) {
				this.region = region
				console.log('选择的省市区数据：', this.region);
				let site = region
				// for(var i=0;i<site.length;i++){
				// console.log(site[i].id)
				// this.apiRequest('/QT/common/GetRegion', (res) => {
				// 	// this.list = res.Data.list;
				// 	console.log(res)
				// 	// if(res.)
				// }, 'POST', {
				// 	// code:""
				// })
				// }
			},
			switch2Change(IsDefault) {
				if (this.IsDefault == true) {
					this.IsDefault = false
				} else {
					this.IsDefault = true
				}
				console.log(IsDefault)
			},
			but() {
				
				let data;
				if (this.region[0].name != undefined) {
					data = {
						IsDefault: this.IsDefault,
						AccepterName: this.AccepterName,
						AccepterTel: this.AccepterTel,
						Province: this.region[0].name,
						City: this.region[1].name,
						County: this.region[2].name,
						AddrInfo: this.Street
					}
				} else {
					data = {
						OID:this.OID,
						IsDefault: this.IsDefault,
						AccepterName: this.AccepterName,
						AccepterTel: this.AccepterTel,
						Province: this.defaultValue[0],
						City: this.defaultValue[1],
						County: this.defaultValue[2],
						AddrInfo: this.Street
					}
				}
				console.log(data)
				this.apiRequest('/QT/MallF/SaveMallAddr', (res) => {
					// this.list = res.Data.list;
					console.log(res)
					uni.showToast({
					    title: res.ErrorMsg,
					    duration: 2000,
						icon:"none"
					});
					if(res.ErrorCode==0){
						setTimeout(function(){
							uni.navigateBack({
							    delta: 1
							});
						},2500);
						
					}
				}, 'POST', data)
			}
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
