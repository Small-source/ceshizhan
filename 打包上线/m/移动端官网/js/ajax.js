// 定义全局对象
var ajax = {
	/*
	 * get方法用于发送get请求
	 * @url 发送的地址
	 * @data 发送的携带数据 默认是字符串
	 * @callback 发送完成之后的回调函数
	 */
	get: function(url, data, callback) {
		// 定义xhr对象
		var xhr = null;
		// 考虑兼容性
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		} else {
			throw new Error("抱歉，浏览器不支持AJAX，请升级")
		}
		// 设置onreadystatechange事件
		xhr.onreadystatechange = function() {
			// 判断状态码是否为4 
			if(xhr.readyState === 4 && xhr.status === 200) {
				// 定义对象
				var obj = new Function("return " + xhr.responseText)();
				callback(obj)
			}
		}
		xhr.open("get", url + "?" + data, true);
		xhr.send();

	},
	/*
	 * post方法用于发送post请求
	 * @url 发送的地址
	 * @data 发送的携带数据 默认是字符串
	 * @callback 发送完成之后的回调函数
	 */
	post: function(url, data, callback) {
		// 定义xhr对象
		var xhr = null;
		// 考虑兼容性
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		} else {
			throw new Error("抱歉，浏览器不支持AJAX，请升级")
		}
		// 设置onreadystatechange事件
		xhr.onreadystatechange = function() {
			// 判断状态码是否为4 
			if(xhr.readyState === 4 && xhr.status === 200) {
				// 定义对象
				var obj = new Function("return " + xhr.responseText)();
				callback(obj)
			}
		}
		xhr.open("post", url , true);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}
}