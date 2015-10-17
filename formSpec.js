describe('Controller: FormCtrl', function(){

	beforeEach(module('FormApp'));

	var ctrl;

	beforeEach(inject(function($controller){
		ctrl = $controller('FormCtrl');
	}));

	it("Deve haver ter cidades carregadas", function(){
		expect(ctrl.cidades).toEqual([
			{nome: "Natal", id: 1},
			{nome: "Macaiba", id: 2},
			{nome: "São Gonçalo do Amarante", id: 3}
		])
	});
})