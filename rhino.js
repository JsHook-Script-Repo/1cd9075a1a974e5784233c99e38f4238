// 使其不出现跳转到商店的按钮
common.hookMethod('com.android.packageinstaller.OPPackageInstallerActivity', 'onMarketResult', ['boolean','java.lang.String','java.lang.String','java.lang.String','boolean','java.lang.String','java.lang.String','java.lang.String'], function(param) {
}, function(param) {
}, function(param){
	return;
});

// 除非经扫描得到不安全的结果, 否则不绘制 “unknown source” 相关警告标签
common.hookMethod('com.android.packageinstaller.OPPackageInstallerActivity', 'showScanResult', ['int'], function(param){
	var input = parseInt(param.args[0]);
	if(input !== 1 && input !== 2 && input !== 6) {
		param.args[0] = java.lang.Integer.valueOf(0);
	}
});

// 使函数 boolean needScanandRecommend() 返回 false 则不会扫描安装包, 安装速度大大提升，但存在安装上恶意软件的风险
