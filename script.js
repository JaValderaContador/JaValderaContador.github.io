function addComment(){
    var inputVal = document.getElementById("NewComment").value;
    var commentaries = document.getElementById("Comentaries");
    commentaries.innerHTML = "<p>" + inputVal + "<p>";
}