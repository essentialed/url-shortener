function(head, req) {
    // !json templates.index

    provides("html", function() {
      send(templates.index.head);
      var row;
      while(row = getRow()) {
        send('<li id="' + row.key +
          '">Target URL: <a href="' + row.value.target + '">' +
          row.value.target + '</a> Shortened URL: <a href="/' + 
          row.key + '" class="local">/' + row.key + '</a></li>');
      }
      send(templates.index.tail);
    });
}
