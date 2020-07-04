import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 判断市场常见的几种刘海屏机型
uni.getSystemInfo({
	success: function(res) {
		let modelmes = res.model;
		console.log("手机型号-------", res.model);
		if (modelmes.indexOf('iPhone X') >= 0 || modelmes.indexOf('iPhone XR') >= 0 || modelmes.indexOf('iPhone XS') >= 0 ||
			modelmes.indexOf('iPhone 12') >= 0 || modelmes.indexOf('iPhone 11') >= 0 || modelmes.indexOf('iPhone11') >= 0 ||
			modelmes.indexOf('iPhone12') >= 0 || modelmes.indexOf('iPhoneXR') >= 0 || modelmes.indexOf('iPhoneX') >= 0) {
			Vue.prototype.$is_bang = true
		} else {
			Vue.prototype.$is_bang = false
		}
	}
});

/**
 * 基本的域名
 */
Vue.prototype.baseUrl = 'http://39.99.155.38:8603';

//消息提示信息
Vue.prototype.toastMsg = function(msg){
	uni.showToast({
		title: msg,
		icon: 'none'
	})
	return false;
}

/**
 * url请求地址
 * fn成功处理函数
 * params请求参数
 * method请求方式
 */
Vue.prototype.apiRequest = function(url, fn = ((res) => {}),method = 'GET',params = {}) {
	uni.request({
		url: url,
		method: method,
		header: {
			"Content-Type": "application/json",
			"Token": uni.getStorageSync('token')
		},
		data: params,
		success: res => {
			var result = res.data;
			//成功后处理
			if (result.ErrorCode == 0) {
				fn(result);
				return true;
			}
			//错误消息提示
			uni.showToast({
				title: result.ErrorMsg,
				icon: 'none'
			});
			//如果需要登录
			if (result.ErrorCode == -2) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
		fail: err => {
			uni.showToast({
				title: '请求接口失败',
				icon: 'none'
			});
		}
	})
}
//地区三级联动
Vue.prototype.apiRegion = function(url, fn = ((res) => {}),method = 'GET',params = {}) {
	uni.request({
		url: url,
		method: method,
		header: {
			"Content-Type": "application/json",
			"Token": uni.getStorageSync('token')
		},
		data: params,
		success: res => {
			var result = res;
			//成功后处理
			// if (result.ErrorCode == 0) {
				fn(result);
				return true;
			// }
			//错误消息提示
			uni.showToast({
				title: result.ErrorMsg,
				icon: 'none'
			});
			//如果需要登录
			if (result.ErrorCode == -2) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
		fail: err => {
			uni.showToast({
				title: '请求接口失败',
				icon: 'none'
			});
		}
	})
}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
