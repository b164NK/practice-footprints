window.onload = function(){


	//Vueインスタンス
	new Vue({
		el:'#app',
		data:{
			pointX: 0,
			pointY: 0,
			myText: '画面をタッチしてください'
		},
		methods:{
			touchStart: function(e){
			},
			touchMove: function(e){
				// タッチによる画面スクロールを止める
				e.preventDefault();
			},
			touchEnd: function(e){
			}
		}
	});


};