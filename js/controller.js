var claudiaApp = angular.module('claudiaApp', ['claudiaAppControllers']);
var claudiaAppControllers = angular.module('claudiaAppControllers', []);

claudiaAppControllers.controller('FunStuffCtrl', function($scope, $http){

	$scope.pictures = [];

	$.getJSON('https://api.instagram.com/v1/users/8202968/media/recent/?access_token=8202968.ab103e5.3d98550d7fa44147a0e300e835aae633&count=5&callback=?')
	
	.success(function(data){

		var info = data.data;

		$scope.$apply(function() {

			$.each(info, function (i, val) {

				var text;

				if(val.caption == null)
					text = "";

				else {
					text = val.caption.text;
				}

				$scope.pictures.push({ url: val.images.standard_resolution.url, caption: text });

			});

		});

	});


	var url = "https://www.goodreads.com/review/list/6271152.xml?key=IOWu18eJ7UGIqur8C6YFw&v=2&shelf=currently-reading";
	$scope.currentlyReading = [];

	$.get("http://query.yahooapis.com/v1/public/yql",
    {
        q: "select * from xml where url=\""+url+"\"",
        format: "json"
    },

    function(data) {   

    	var info = data.query.results.GoodreadsResponse.reviews.review;

    	$scope.$apply(function() {

    		$.each(info, function (i, val) {

    			$scope.currentlyReading.push({ title: val.book.title, img: val.book.image_url });
    		
    		});

    	});
	});

});