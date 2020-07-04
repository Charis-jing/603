<template>
	<view class="main">
		大约10年以前，人类还活在 PC星球，那时的生活状态是，每个家庭一部 电脑。
		
		花团APP一个旨在帮助大众用户表达自我,记录美好生活的商城分享平台。为用户创造丰富多样的玩法,让用户在生活中轻松快速购物。
		
		花团APP依然是移动互联网大盘中几乎还在唯一增长的明星级应用领域,而互联网女皇报告也显示短视频是互联网时长红利唯一的增长入口
		
		大约10年以前，人类还活在 PC星球，那时的生活状态是，每个家庭一部 电脑。
		
		花团APP一个旨在帮助大众用户表达自我,记录美好生活的商城分享平台。为用户创造丰富多样的玩法,让用户在生活中轻松快速购物。
		
		花团APP依然是移动互联网大盘中几乎还在唯一增长的明星级应用领域,而互联网女皇报告也显示短视频是互联网时长红利唯一的增长入口
		
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// 获取关于我们
			console.log(123)
			this.apiRequest('/QT/DefaultF/GetAboutusNewsDetail', (res) => {
				console.log(res)
			}, 'GET')
		},
		methods: {
			
		}
	}
</script>

<style>
.main{
	width:690rpx;
	font-size:28rpx;
	font-family:Source Han Sans CN;
	font-weight:400;
	color:rgba(51,51,51,1);
	opacity:1;
	margin: auto;
}
</style>
