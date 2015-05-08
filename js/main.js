$(function() {
	$('#expertsTable').dataTable({
		'ajaxSource': 'js/experts.json',
		'columns': [
			{ 'data': 'image', 'title': 'Portrait', 'class': 'colPortrait' },
			{ 'data': 'name', 'title': 'Name', 'class': 'colName' },
			{ 'data': 'city', 'title': 'Stadt', 'class': 'colStadt' },
			{ 'data': 'department', 'title': 'Hauptgruppe', 'class': 'colHauptgruppe' },
			{ 'data': 'phone', 'title': 'Telefon', 'class': 'colTelefon' }],
		// Doent calculate on first init, instead use class widths
		"bAutoWidth": false,
		// Templating for the first column
		'columnDefs': [ {
	    'targets': 0,
	    'data': 'image',
	    'render': function ( data ) {
	      	return '<img src="' + data + '" alt="" />';
	    }
	  } ]
	});
});
