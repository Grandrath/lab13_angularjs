// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var configurationField = module.exports = angular.module("configurationField", []);

	configurationField.directive("configurationField", function() {

		return {
			restrict: "E",
			transclude: true,
			scope: {
				value: "=value"
			},
			controller: function($scope, $element) {
				var target = new RenderTarget($scope);
				$scope.value.renderTo(target);
			},
			template:
				'<div class="config">' +
				' <label ng-transclude></label>' +
				' <input type="text" ng-class="invalidClass" value="{{renderedText}}" title="{{title}}">' +
				'</div>',
			replace: true
		};

	});

	function RenderTarget(scope) {
		this._scope = scope;
	}

	RenderTarget.prototype.render = function render(values) {
		this._scope.renderedText = this._scope.value.getUserText();
		this._scope.invalidClass = values.invalid ? "invalid" : "";
		this._scope.title = values.tooltip;
	};

})();
