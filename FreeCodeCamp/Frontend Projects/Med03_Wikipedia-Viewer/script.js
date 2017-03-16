function showResult(data, status, xhr) {
    alert("show results!");
    console.log(data);
    /*
    var myJSON = JSON.parse(xhr.responseText);
    //console.log(myJSON);
    var myHtml = "<ul>";
    var pages = myJSON.query.pages;
    for (var key in pages) {
        //console.log(key);
        myHtml += "<li>";
        myHtml += "<a href='" + 'https://en.wikipedia.org/?curid=' + pages[key].pageid + "' target='blank'>";
        myHtml += "<h2>" + pages[key].title + "</h2>";
        myHtml += "</a>";
        myHtml += "<p>" + pages[key].extract + "</p>";
        myHtml += "</li>";
    }
    myHtml += "</ul>";
    document.getElementById("results").innerHTML = myHtml;
    */
}

$(function() {
  // enter
    $("#wiki_search").keypress(function(e){
        if(e.keyCode===13){
            var searchTerm = $("#wiki_search").val();
            alert(searchTerm);
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function() { alert("success"); },
                error: function(xhr){
                    alert("An error occured: " + xhr.status + " " + xhr.statusText);
                }
            })
        }
    });
    // click ajax call
    $("#search").on("click", function() {
        var searchTerm = $("#wiki_search").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        alert("url : "+url);
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function() { alert("success"); },
            error: function(xhr){
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
            }
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    });
});