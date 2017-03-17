$(function() {
    function showResult(data, status, jqXHR) {
        console.log(data);
        $("#output").html();
        for(var i=0;i<data[1].length;i++){
            $("#output").prepend("<div><div class='well'><a href="+data[3][i] +">"
                               + "<h2>" + data[1][i]+ "</h2></a>"
                               + "<p>" + data[2][i] + "</p></div></div>");
        }
    }

    function getWiki() {
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
          // plop data
            success: showResult
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
    }

  // enter
    $("#searchTerm").keypress(function(e){
        if(e.keyCode===13){
          getWiki();
        }
    });
// click ajax call
    $("#search").on("click", getWiki);
});