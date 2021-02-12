// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click x to delete todo
$("ul").on("click", "li span", function(e) {
	e.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	console.log("Clicked span");
});

$("input[type='text']").keypress(function(e) {
	if (e.which === 13) {
		// new todo from input
		var text = $(this).val();
		$(this).val("");

		// append new li to
		$("ul").append("<li><span>X</span> " + text + "</li>");
	}
});