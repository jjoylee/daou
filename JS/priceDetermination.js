/* 해성옵틱스 - 판매/구매 단가 결정서에서 사용하는 js(기본 줄 추가 삭제 기능 제공) */
define(function(require) {
	var $ = require("jquery");
	var app = require("app");
	var Backbone = require("backbone");
	var PlusMinusRow = require("plugins/approval/forms/PlusMinusRow");
	var Integration = Backbone.View.extend({
			el: '#document_content',

			initialize : function(options){
				this.options = options || {};
				this.docModel = this.options.docModel;
				this.variables = this.options.variables;
				this.infoData = this.options.infoData;
			},

			render : function(){
				var self = this;
				$('.viewModeHiddenPart').show();

				$("#dynamic_table").PlusMinusRow({
					tableId : "dynamic_table",
					plusBtnId : "plus",
					minusBtnId : "minus",
					copyRowClass : "copyRow",
					copyRowNoClass : "copyRowNo"
				});
			},

			renderViewMode : function(){
				$('.viewModeHiddenPart').hide();
			},
			
			onEditDocument : function(){
				this.render();
			},

			beforeSave :function() {
			},

			afterSave :function() {
			},
			
			validate :function() {
				return true;
			},

			getDocVariables : function(){
				/* getDocVariables 사용 하려면 return 소스 코드 구현 */ 
			}
		});
		return Integration;
	});