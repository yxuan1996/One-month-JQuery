# One-month-JQuery

## Projects
### Project 1: LightBox

Simple photo gallery app, using the Lightbox library.

### Project 2: FAQ Page

Basic FAQ Page, using an animated accordion drop down. When a question is clicked, the corresponding answer is revealed.

### Project 3: Todo List

Simple todo list app, using local storage to persist data.

### Project 4: Launch Pads

Apartment marketplace app with city filtering, and rendering JSON data using AJAX.

## Notes
https://jquery.com/

#### Using JQuery
In index.html
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

Note that Javascript should always be loaded at the end, right before the </body> closing tag. 

**Alternative**
Alternatively, if we choose to include our js files in the <head> section, we need to wrap our entire JS code in document.ready. 

index.js
```
$(document).ready(function () {
    // YOUR CODE HERE!
});
```

#### Selectors
To select a HTML element with a particular id, we use the `$` symbol. 

In index.html
```
<div id="q1" class="question">1. What is jQuery?
```

In index.js
```
$("#q1")
```

#### Retrieving Values
```
var item = $("#todo-list-item").val();
```

#### .click() method
We can use .click() to define what happens after a user clicks on a particular element
```
$("#q1").click(function() {
 $("#a1").slideToggle("slow");
})
```

#### toggle methods
We can use toggle methods to apply or unapply a class (and it's related attributes) to an element
```
$("#q1").click(function() {
 $("#arrow1-down, #arrow1-up").toggleClass("collapse");
})
```

#### change method
- Check if the value of an element has changed. 
- Useful for checkboxes

```
$(".checkbox").change(function() {
 //do something
 })
```

- Unfortunately, the method shown above would not work if the checkbox class was created dynamically. (Created from JS, not originally present in the HTML document). 
-  To target dynamic elements, we need to select the entire document/DOM at the point in time. 

```
$(document).on("change", ".checkbox", function() {
	//do something
 });
```
#### .each() method
-The .each() method allows us to iterate over arrays and apply a function to it.
- Similar to the map() method in Python

```
$.each(response.apartments, function(i, apartment) {
	//function to apply
});
```

#### .grep() method
- This method allows us to find elements of an array which satisfy a filter function
- The original array is not affected

```
var selected = $.grep( ARRAY , function(n,i){
	//filter function
	return ( n !== 5 && i > 4 );
})
```

#### this keyword
- `this` allows us to reference a particular element. 
- Useful if the same function should be applied to multiple elements

#### Open a new tab
```
window.open(URL);
```

### Traversing the DOM
#### .next()
This method allows us to traverse the next HTML element on the same level. 

For example, if we are currently at the 3rd element of a list:
```
<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li class="third-item">list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>
```

.next() will get us the 4th element:
```
$( "li.third-item" ).next()
```

#### .children()
This method allows us to traverse the child elements 

```
$( "ul" ).children()
```

#### Adding items to HTML
We can use the .append() method to add child elements to a HTML element
```
$("#list-items").append("<li>" + item + "</li>");
```

We can also save the HTML in a variable. Notice that we use backtick symbol to open and close the HTML line. Variables can be injected using `${ variable }`

```
var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
var listing = `<a href='#' id=${apartment.id} class='list-group-item ${apartmentClass} listings'>
<h4 class='list-group-item-heading'>${apartment.description} / ${apartment.bedrooms} / ${apartment.price}</h4>
<p class='list-group-item-text'>${apartment.neighborhood}</p>
</a>`

 $(".apartments").append(listing);
```

#### Input Checkbox
```
<input type='checkbox'/>
```

The checkbox element has the attribute 'checked', which can be toggled on or off. 
```
if ($(this).attr("checked")) {
     $(this).removeAttr("checked");
} else {
     $(this).attr("checked", "checked");
}
```

#### hr tag 
`<hr>` Used to draw a breakline below the element

### Forms

index.html
```
<form class="add-items">
	<input type="text" class="form-control" id="todo-list-item" placeholder="What do you need to do today?">
	<button class="add" type="submit">Add to List</button>
</form>
```

index.js
```
$(document).ready(function () {
 $(".add-items").submit(function(event) {
 //do something after button clicked
 });
});
```

### LocalStorage
Local storage allows us to persist data in a user's browser. 

We can store data in key-value pairs
```
localStorage.setItem("key", value);
```

Retrieving data
```
$("#list-items").html(localStorage.getItem("listItems"));
```

Removing a specific piece of data
```
localStorage.removeItem("key");
```

Removing all data
```
localStorage.clear();
```

### AJAX
- AJAX allows us to retrieve data asynchronously. 
- It also allows us to update parts of a webpage without refreshing the entire page. 

Example: Retrieving data from an URL and parsing it in JSON format

index.js
```
$(document).ready(function() {
 $.ajax({
   url: "https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/4", ,
   dataType: "json",
   success: function(response) {
     //do something after data successfully retrieved
   }
 })
});
```

**Error Handling**
If Our AJAX response encounters an error, we need a way to handle it.
```
$(document).ready(function() {
 $.ajax({
   url: "###JSON—URL-GOING_HERE###",
   dataType: "json",
   success: function(response) {
	//do something after data successfully retrieved   
	},
   error: function(error) {
       console.log(error);
   }
 });
})
```

### Using Lightbox
If we want to use lightbox, we need to manually download it: https://github.com/lokesh/lightbox2

We can then include it in the CSS and Javascript sections
```
<!-- CSS -->
<link href="lightbox2-master/dist/css/lightbox.css" rel="stylesheet">

<!-- JavaScript -->
<script src="lightbox2-master/dist/js/lightbox.js"></script>
```


