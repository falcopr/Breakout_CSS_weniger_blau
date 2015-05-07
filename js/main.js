$(function() {
	$('#expertsTable').dataTable({
		'ajaxSource': 'js/experts.json',
		'columns': [
			{ 'data': 'image', 'title': 'Portrait', 'class': 'expertPortrait' },
			{ 'data': 'name', 'title': 'Name' },
			{ 'data': 'city', 'title': 'Stadt' },
			{ 'data': 'department', 'title': 'Hauptgruppe' },
			{ 'data': 'phone', 'title': 'Telefon' }],
		'columnDefs': [ {
	    'targets': 0,
	    'data': 'image',
	    'render': function ( data, type, full, meta ) {
	      	return '<img src="' + data + '" alt="" />';
	    }
	  } ]
	});
});
