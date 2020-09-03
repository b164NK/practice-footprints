window.onload = function(){
	//Vueコンポーネント
	var MyComponent = {
		template:'<canvas id="myCanvas"></canvas>',
		
		
	}
	//Vueインスタンス
	new Vue({
		el:'#app',
		components:{
			'my-component': MyComponent
		},
		data:{
			pointX: 0,
			pointY: 0
		}
	});
}