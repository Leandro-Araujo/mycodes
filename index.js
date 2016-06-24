$.ajax({
	method: 'GET',
	url: 'https://api.github.com/users/leandro-araujo/repos',
	success: function(req){
		new Vue({
		  el: '#app',
		  data: {
		    lista: req
		  }
		})

	}
});
