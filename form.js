angular.module("FormApp", [])
	.controller("FormCtrl", [function(){
		var self = this;

		self.hello = "Olá Mundo";

		self.cidades = [
			{nome: "Natal", id: 1},
			{nome: "Macaiba", id: 2},
			{nome: "São Gonçalo do Amarante", id: 3}
		];

		self.alertFields = function(){
			console.log("ALERTANDO", self.user);
		}

	}]);