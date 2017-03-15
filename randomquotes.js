$(document).ready(function() {
  function newQuote() {      
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(apiResponse) {
        quote = apiResponse.quoteText;        
        if (apiResponse.quoteAuthor) {
          author = "said by " + apiResponse.quoteAuthor;
          $('#author').html(author);
        } else {
          $('#author').html("Unknown");
        }
        $('#quote').html(quote);
        
      }
    });
    
         var colors = ['#F74558', '#0E272A', '#92595F', '#177572', '#c13d4a', '#5fc165', '#dbd326'];
       
  var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $("#new-quote").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
    
  };
  
  newQuote();
  
  $('#new-quote').click(function(e) {
    e.preventDefault();
    newQuote();
    
  });
  
  $('#tweet-quote').click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " — " + author));
  });
  
    
  
});