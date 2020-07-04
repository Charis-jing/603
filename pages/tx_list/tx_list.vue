<template>
	<view style="padding-top: 19rpx;">
		<view class="list">
			<view class="list_a">
				<view>
					<view>提现数量</view>
					<view>ERC20</view>
				</view>
				<view>
					<view>到账金额</view>
					<view>2563.34元</view>
				</view>
			</view>
			<view class="list_b">
				<image src="../../static/img/tx/001.png" mode=""></image>
			</view>
		</view>
		
		
			<view class="list">
				<view class="list_a">
					<view>
						<view>提现数量</view>
						<view>ERC20</view>
					</view>
					<view>
						<view>到账金额</view>
						<view>2563.34元</view>
					</view>
				</view>
				<view class="list_b">
					<image src="../../static/img/tx/002.png" mode=""></image>
				</view>
			</view>
		<view class="list">
			<view class="list_a">
				<view>
					<view>提现数量</view>
					<view>ERC20</view>
				</view>
				<view>
					<view>到账金额</view>
					<view>2563.34元</view>
				</view>
			</view>
			<view class="list_b">
				<image src="../../static/img/tx/001.png" mode=""></image>
			</view>
		</view>
		<view class="list">
			<view class="list_a">
				<view>
					<view>提现数量</view>
					<view>ERC20</view>
				</view>
				<view>
					<view>到账金额</view>
					<view>2563.34元</view>
				</view>
			</view>
			<view class="list_b">
				<image src="../../static/img/tx/002.png" mode=""></image>
			</view>
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
			
		}
	}
</script>

<style>
.list{
	width:690rpx;
	height:172rpx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 30rpx rgba(153,153,153,0.3);
	opacity:1;
	border-radius:16rpx;
	margin: auto;
	display: flex;
	justify-content: space-between;
	font-size:30rpx;
	font-family:Source Han Sans CN;
	font-weight:550;
	color:rgba(51,51,51,1);
	opacity:1;
	margin-top: 20rpx;
}
.list image{
	width: 230rpx;
	height: 150rpx;
	margin-top: 21rpx;
}
.list_a>view{
	display: flex;
	margin-left: 30rpx;
	margin-top: 30rpx;
}

.list_a>view>view:nth-child(2){
	margin-left: 20rpx;
}
</style>
