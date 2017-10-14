var jekyllApp = window.app = {};
jekyllApp.Links = function() {
	this._input = $('#available-link-search-txt');
	this._initAutocomplete();
};

jekyllApp.Links.prototype = {
	_initAutocomplete: function() {
		this._input
		  .autocomplete({
		    source: 'users/autocomplete_sidebar_links',
		    appendTo: '#available-link-search-results',
		    select: $.proxy(this._select, this)
		  })
		  .autocomplete('instance')._renderItem = $.proxy(this._render, this);
	},

	_select: function(e, ui) {
		this._input.val(ui.item.title);
		return false;
	},

	_render: function(ul, item) {
		if(item.url == ""){
			var markup = [ '<span class="title">' + item.title + '</span>' ]
		}else{
			var markup = ['<a href=' + item.url + ' class="title">' + item.title + '</a>'] }

		return $('<li>')
		  .append(markup.join(''))
		  .appendTo(ul);
	}
};
