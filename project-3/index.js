$(document).ready(function () {

 //Retrieve data from localStorage
 $("#list-items").html(localStorage.getItem("listItems"));

 $(".add-items").submit(function(event) {
 event.preventDefault();

 //retrieve values
 var item = $("#todo-list-item").val();

 //add new item to list if present
 if (item) {
 	//<hr> draws a breakline below the element
 	$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");

 	//persist data in localstorage
 	localStorage.setItem("listItems", $("#list-items").html());

 	//clear input field after new item added to list
 	$("#todo-list-item").val("");
 }

 });

 //checkbox ticked
 $(document).on("change", ".checkbox", function() {

 	if ($(this).attr("checked")) {
     	$(this).removeAttr("checked");
   	} else {
     	$(this).attr("checked", "checked");
   	}

 	//in styles.css we defined the completed class as a line strikethrough
 	$(this).parent().toggleClass("completed");
 	localStorage.setItem("listItems", $("#list-items").html());
 });

 //remove button clicked
 $(document).on("click", ".remove", function() {
  	$(this).fadeOut( "slow", function() {
    	//don't do anything after callback
  	});
  	$(this).parent().remove();
  localStorage.setItem("listItems", $("#list-items").html());
 });
});
