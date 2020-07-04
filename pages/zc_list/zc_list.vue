<template>
	<view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		
			<view class="list">
				<view class="list_a">
					<view>1000.00USDT</view>
					<view>2020.12.09  18：09：12</view>
				</view>
				<view class="list_b">523.36积分</view>
			</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>1000.00USDT</view>
				<view>2020.12.09  18：09：12</view>
			</view>
			<view class="list_b">523.36积分</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},onReachBottom() {
			console.log("上拉加载更多")
		}
	}
</script>

<style>
.list{
	width: 690rpx;
	margin: auto;
	display: flex;
	justify-content: space-between;
	border-bottom:2rpx solid rgba(239,239,239,1); 
	padding: 30rpx 0 ;
}
.list_a>view:nth-child(1){
	font-size:32rpx;
	font-family:Source Han Sans CN;
	font-weight:600;
	color:rgba(51,51,51,1);
	opacity:1;
}
.list_a>view:nth-child(2){
	font-size:26rpx;
	font-family:Source Han Sans CN;
	font-weight:400;
	color:rgba(206,206,206,1);
	opacity:1;
	margin-top: 20rpx;
}
.list_b{
	font-size:30rpx;
	font-family:Source Han Sans CN;
	font-weight:550;
	/* color:rgba(246,17,55,1); */
	opacity:1;
	margin-top: 25rpx;
}
</style>
