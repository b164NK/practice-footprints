window.onload = function(){
	var el_myCanvas = document.getElementById('myCanvas');
	var clientRect = el_myCanvas.getBoundingClientRect();
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	//Vueインスタンス
	new Vue({
		el:'#app',
		data:{
			pointX: 0,
			pointY: 0,
			myText: '画面をタッチしてください',
			bgcolor: 'blue'
		},
		methods:{
			touchMove: function(e){
				// タッチによる画面スクロールを止める
				e.preventDefault();
				this.myText = 'タッチ中...';
				this.pointX = e.changedTouches[0].pageX - positionX;
				this.pointY = e.changedTouches[0].pageY - positionY;
				this.bgcolor = 'red';
			},
			touchEnd: function(e){
				this.myText = '画面をタッチしてください';
				this.bgcolor = 'blue';
			}
		}
	});


};