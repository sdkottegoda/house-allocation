var render = function(theme, data, meta, require) {
	theme('simple', {
		header : [ {
			partial : 'header',
			context : data.header
		} ],
		title :[{
			partial : 'title',
			context : data.title
		}],
		main : [ {
			partial : 'edit-event',
			context : data.body
		} ]
	});
};