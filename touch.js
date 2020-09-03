
	//Vueコンポーネント
	var MyComponent = {
		template: '<canvas id="myCanvas"></canvas>',
	}

	//Vueインスタンス
	new Vue({
		el:"#app",
		components:{
			'my-component': MyComponent
		},
		data:{
			
		},
		methodts:{
		}
	});