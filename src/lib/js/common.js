/**
 * [任意位数随机验证码]
 * @param  {Number} n [随机验证码的位数]
 * @return {String}   [返回的验证码]
 */
function randomCode(n){
	// 显示4为随机验证码
	// 字符串拼接
	var mycode = '';
	for(var i=0;i<n;i++){
		mycode += parseInt(Math.random()*10);
	}

	return mycode;
}

// randomCode(4);
// randomCode(6);


/**
 * 随机颜色
 * @return {String} [rgb颜色]
 */
function randomColor(num){
	if(num === 16){
		var str = '0123456789abcdef';//str[0]
		
		var color = '#';
		
		for(var i=0;i<6;i++){
			// 获取随机索引值
			var idx = parseInt(Math.random()*str.length);

			// 根据随机索引值得到随机16进制字符
			color += str[idx];
		}

		return color;
	}else{
		var r = parseInt(Math.random()*256);
		var g = parseInt(Math.random()*256);
		var b = parseInt(Math.random()*256);


		return 'rgb('+r+','+g+','+b+')';
		
	}
}


/**
 * 任意范围内的随机整数
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [min-max间的随机整数]
 */

function randomNumber(min,max){
	// Math.random();//0-1（不包括1）的数

	/*
		Math.random()		res
		0					min
		1					max
	 */
	return parseInt(Math.random()*(max-min+1))+min;
}

// randomNumber(0,255);
// randomNumber(1,100);
// randomNumber(100,999);


var Element = {
	// 对象的方法

	/**
	 * 过滤非元素节点
	 * @param  {Array} nodes [节点集合]
	 * @return {Array} [返回只包含元素节点的数组]
	 */
	get:function(nodes){
		// 用于存放结果
		var res = [];

		// 删除非元素节点
		for(var i=0;i<nodes.length;i++){
			if(nodes[i].nodeType === 1){
				res.push(nodes[i]);
			}
		}

		return res;
	},

	/**
	 * [得到ele元素下的所有子元素]
	 * @param  {Element} ele [父元素]
	 * @return {Array}     [ele元素的所有子元素]
	 */
	children:function(ele){
		// var res = [];

		// for(var i=0;i<ele.childNodes.length;i++){
		// 	if(ele.childNodes[i].nodeType === 1){
		// 		res.push(ele.childNodes[i]);
		// 	}
		// }

		// return res;

		return this.get(ele.childNodes);
	},

	// 得到前一个元素节点
	prev:function(ele){
		var res = ele.previousSibling;

		// while循环方案
		// while(res.nodeType !== 1 && res !== null){
		// 	res = res.previousSibling
		// }

		// return res;


		// 递归方案
		if(res===null || res.nodeType === 1){
			return res;
		}

		return this.prev(res);
	},

	// 得到后一个元素节点
	next:function(ele){
		var res = ele.nextSibling;
		if(res===null || res.nodeType === 1){
			return res;
		}

		return this.next(res);
	},

	// 练习：兼容IE8-
	getByClass:function(name){

	}
}

/**
 * [获取元素的css样式，兼容IE8-]
 * @param  {Element} ele  [获取样式的元素]
 * @param  {String} attr [css属性名]
 * @return {String}      [返回attr对应的css属性值]
 */
function getCss(ele,attr){
	// 不要判断是否为IE6,IE7,IE8
	// 而是判断用户的浏览器是否支持某一个方法
	if(window.getComputedStyle){
		// 标准浏览器
		return getComputedStyle(ele)[attr];
	}else if(ele.currentStyle){
		// IE6,7,8
		return ele.currentStyle[attr];
	}else{
		// 其他浏览器，直接返回内联样式
		return ele.style[attr];
	}
}

// getCss(box,'font-size');//30px

/**
 * 给元素绑定事件，兼容IE8-
 * @param  {Node}  ele       [绑定事件的元素]
 * @param  {String}  type      [事件类型]
 * @param  {Function}  handler   [事件处理函数]
 * @param  {Boolean} isCapture [是否捕获]
 */
function bind(ele,type,handler,isCapture){
	// 标准浏览器
	if(ele.addEventListener){
		ele.addEventListener(type,handler,isCapture);
	}

	// IE8-
	else if(ele.attachEvent){
		ele.attachEvent('on'+type,handler);
	}

	// 其他浏览器
	else{
		ele['on'+type] = handler;
	}
}

// // 移除事件
// function unbind(){

// }


// // 只能绑定一次的事件
// function one(){

// }

var Event = {
	// 绑定事件
	bind:function(){},

	// 移除事件
	unbind:function(){},

	// 只能绑定一次的事件
	one:function(){}
}

// 封装函数时，如果不知如何下手
// 先用
// bind(box,'click',function(){},true);



// Cookie的操作
var Cookie = {
	/**
	 * 设置cookie
	 * @param {String} name   [cookie名]
	 * @param {String} value  [cookie值]
	 * @param {[Object]} params [参数，是一个对象]
	 	* expires	{Date}		有效期
	 	* path		{String}	保存路径
	 	* domain	{String}	域名
	 	* secure	{Booolean}	安全性
	 */
	set:function(name,value,params){
		// 必填
		var str = name + '=' + value;

		// 判断是否有参数
		if(params){

			// 有效期
			if(params.expires){
				str += ';expires=' + params.expires.toUTCString();
			}

			// 保存路径
			if(params.path){
				str += ';path='+params.path;
			}

			// 域名
			if(params.domain){
				str += ';domain='+params.domain;
			}

			// 安全性
			if(params.secure){
				str += ';secure';
			}
		}

		document.cookie = str;
	},

	/**
	 * [获取name对应的cookie值]
	 * @param  {String} name [cookie名]
	 * @return {String}      [返回name对应的cookie的值]
	 */
	get:function(name){
		// 获取所有cookie
		var allCookies = document.cookie;


		// 用于保存结果
		var res = '';


		// String->Array
		allCookies = allCookies.split('; ');

		// 遍历找出所需cookie
		allCookies.forEach(function(item){
			// 拆分name,value
			var arr = item.split('=');

			if(arr[0] === name){
				res = arr[1];
			}
		});

		return res;
	},

	remove:function(name){
		var now = new Date();
		now.setDate(now.getDate()-1);

		// document.cookie = name + '=null;expires='+now.toUTCString();
		this.set(name,'x',{expires:now});
	}
}

// Cookie.set('username','laoxie')
// Cookie.set('password','123',{expires:date,});
// Cookie.remove('password');
// Cookie.get('left');//47px;


// 动画函数
// function animate(ele,attr,target){
// 	// 拼接定时器名字width->widthTimer,opacity->opacityTimer
// 	var timerName = attr + 'Timer';

// 	clearInterval(ele[timerName]);
// 	ele[timerName] = setInterval(function(){
// 		// 获取当前值left,top,width,fontSize,opaicty.....
// 		// var current = getComputedStyle(ele)[attr];
// 		var current = getCss(ele,attr);//100px,16px,0.5,45deg...

// 		// 提取单位
// 		var unit = current.match(/[a-z]+$/);//

// 		// 避免报错
// 		if(unit===null){
// 			unit = '';
// 		}else{
// 			unit = unit[0];
// 		}

// 		// 提取值
// 		current = parseFloat(current);

// 		// 计算缓冲速度
// 		// 避免速度过小，同时避免速度为0
// 		var speed = (target-current)/10;

// 		if(attr === 'opacity'){
// 			// 避免小数位过多
// 			current = current.toFixed(2)*1;

// 			if( speed<0 && speed>-0.01){
// 				speed = -0.01;
// 			}

// 			if( speed>0 && speed<0.01){
// 				speed = 0.01;
// 			}
// 			// console.log(speed)
// 			// speed = speed>0 ? 0.01 : -0.01;
// 		}else{
// 			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed)
// 		}

// 		var val = current + speed;

// 		// console.log(val);

// 		// 到达目标值
// 		// 停止定时器
// 		if(val === target){
// 			clearInterval(ele[timerName]);

// 			val = target;
// 		}


// 		ele.style[attr] = val + unit;


// 	},30);
// }

function animate(ele,options,callback){//undefined
	// target,attr
	// 先获取定时器数量
	var timerLen = 0;
	for(var key in options){
		timerLen++;

		(function(attr){
			var timerName = attr + 'Timer';

			// 获取目标值
			var target = options[attr];

			clearInterval(ele[timerName]);
			
			ele[timerName] = setInterval(function(){
				var current = getCss(ele,attr);//100px,16px,0.5,45deg...

				// 提取单位
				var unit = current.match(/[a-z]+$/);//

				// 避免报错
				if(unit===null){
					unit = '';
				}else{
					unit = unit[0];
				}

				// 提取值
				current = parseFloat(current);

				// 计算缓冲速度
				// 避免速度过小，同时避免速度为0
				var speed = (target-current)/10;

				if(attr === 'opacity'){
					// 避免小数位过多
					current = current.toFixed(2)*1;

					if( speed<0 && speed>-0.01){
						speed = -0.01;
					}

					if( speed>0 && speed<0.01){
						speed = 0.01;
					}
					// console.log(speed)
					// speed = speed>0 ? 0.01 : -0.01;
				}else{
					speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
				}

				var val = current + speed;

				// console.log(val);

				// 到达目标值
				// 停止定时器
				if(val === target){
					clearInterval(ele[timerName]);

					val = target;

					// 每完成一个动画，数量减1
					timerLen--;

					// 当定时器为最后一个，且有回调函数时，执行回调函数
					if(timerLen===0 && typeof callback === 'function'){
						callback();
					}
				}


				ele.style[attr] = val + unit;
			},30);

		})(key);
	}
}

// animate(div,'left',200);

/**
 * 数据类型判断
 * @param  {Every} data [任意数据类型]
 * @return {String}      [返回数据类型对应的字符串]
 */
function type(data){
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}



export default{
	Cookie
}