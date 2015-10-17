angular.module("PostsApp", [])
	.controller("PostsCtrl", ['PostsService', function(PostsService){
		var self = this;

		self.hello = "Posts";

		self.posts = PostsService.listar();

		self.adicionarPost = function(){
			self.post.dataCadastro = new Date();
			PostsService.add(self.post);
			self.post = null;
		}

	}])
	.factory("PostsService", [function(){
		var posts = [];

		return {
			listar: function(){
				return posts;
			},

			add: function(post){
				posts.push(post);
			}
		}
	}])