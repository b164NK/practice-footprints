window.onload = function(){
	//タッチイベントが利用可能かどうかの判別
	var supportTouch = 'ontouchend' in document;

	//イベント名の決定
	var EVENTNAME_START = supportTouch? 'touchstart':'mousedown';
	var EVENTNAME_MOVE = supportTouch? 'touchmove':'mousemove';
	var EVENTNAME_END = supportTouch? 'touchend':'mouseup';

	var el_myCanvas = document.getElementById('myCanvas');
	var clientRect = el_myCanvas.getBoundingClientRect();
	//↓　x,y座標の基準点を決める
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	//Vueインスタンス
	new Vue({
		el:'#app',
		data:{
			pointX: 0,
			pointY: 0,
			myText: '画面をタッチしてください',
			bgcolor: 'blue',
			eventstart: EVENTNAME_START,
			eventmove: EVENTNAME_MOVE,
			eventend: EVENTNAME_END
		},
		methods:{
			handleStart:function(e){
				this.bgcolor = 'red';
				this.myText = '動かしてみてください';
				if(this.eventstart == 'touchstart'){
					this.pointX = e.changedTouches[0].pageX - positionX;
					this.pointY = e.changedTouches[0].pageY - positionY;
				}else if(this.eventstart == 'mousedown'){
					this.pointX = e.pageX - positionX;
					this.pointY = e.pageY - positionY;
				}
			},
			handleMove:function(e){
				if(this.bgcolor == 'red'){
					this.myText = 'タッチ中...';
					if(this.eventmove == 'touchmove'){
						e.preventDefault();
						this.pointX = e.changedTouches[0].pageX - positionX;
						this.pointY = e.changedTouches[0].pageY - positionY;
					}else if(this.eventmove == 'mousemove'){
						this.pointX = e.pageX - positionX;
						this.pointY = e.pageY - positionY;
					}
				}
			},
			handleEnd:function(e){
				this.bgcolor = 'blue';
				this.myText = '画面をタッチしてください';
			}
		}
	});
};
