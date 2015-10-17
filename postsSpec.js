describe('Controller: PostsCtrl', function(){

	beforeEach(module('PostsApp'));

	var ctrl, pstService;

	beforeEach(inject(function($controller, PostsService){
		spyOn(PostsService, 'listar').and.callThrough();
		spyOn(PostsService, 'add').and.callThrough();
		pstService = PostsService;
		ctrl = $controller('PostsCtrl');
	}));

	it("Listar foi chamado uma unica vez", function(){
		expect(pstService.listar).toHaveBeenCalled();
		expect(pstService.listar.calls.count()).toEqual(1);
	});

	it("Adicionar um post", function(){
		ctrl.post = {autor: "jarbas", comentario: "teste"};
		ctrl.adicionarPost();
		expect(pstService.add).toHaveBeenCalled();
		expect(pstService.listar.calls.count()).toEqual(1);
		expect(ctrl.posts[0].autor).toEqual("jarbas");
		expect(ctrl.post).toBe(null);
	});

	
})