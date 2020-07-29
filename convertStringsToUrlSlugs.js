// The global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
return title.split(/\W/)
.filter(obj => {
return obj !== "";
})
.join("-")
.toLowerCase();
}
