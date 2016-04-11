//Function which runs on page load
$(document).ready(function(){

    //Add button click event
	$('#add-task-button').click(function(){
		addNewRow();
	});

	//Refresh notes button click event
	$('#refreshNotes').click(function(){
		refreshNotes();
	});
		
	//Delete button click event --- NEED TO CREATE THIS BUTTON
	$('.deleteButton').click(function(){
		deleteRow($(this));
	});
});

/**
 * Click event function to append a new row to the tasks table
 */
function addNewRow(){	
	var numRows = $('#todolist-container').length;
	// $('#todolist-container').append('<li><input type="text" id="title-'+numRows+'" /></li><li><input type="text" id="description-'+numRows+'" /></li></ol>');
	$('#todolist-container').append('<li><input type="checkbox" id="check-2"><label for="check-2">'+$('#new-task-input').val()+'</label></li>');
}

/**
 * Click event function to start the creation of the task sticky notes
 * Get each of the rows in the task list and create a sticky note for each of them
 */
function refreshNotes(){
	
	var tableRows = $('#todolist-container');
	
	$('li').remove();

	$.each(tableRows,function(i){
		var title = $(this).find('input[id^="title"]').val();
		var description = $(this).find('input[id^="description"]').val();
		
		if(title != undefined && description != undefined){
			createNotes(title, description);
		}	
	});
}

/**
 * Creates the sticky notes and gives it a random colour.
 */
function createNotes(title, description){
	var header = '<h2>'+title+'</h2>';
	var desc = '<p>'+description+'</p>';
	
	var colours = new Array();
	colours[0] = 'green';
	colours[1] = 'blue';
	colours[2] = 'yellow';
	colours[3] = 'red';
	colours[4] = 'purple';
	colours[5] = 'orange';
	
	
	$('.sticky_notes').append('<li class="'+colours[randomFromTo(0,(colours.length - 1))]+'">'+header+description+'</li>');
}

/**
 * Get a random number between 2 numbers
 * 
 * @return Randon Number
 */
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
 }


/**
 * Deletes the grandparent of the delete button
 */
function deleteRow(thisButton){
	thisButton.parent().parent().remove();
}




