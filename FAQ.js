
$(document).ready(function() {
	$("h1, h2, h3, h4, h5, h5").each(function(i) {
	 var heading = $(this);
	 var headingtext = heading.text();
	 console.log(headingtext);
	 var headingtextAnchor = headingtext.toLowerCase().trim().replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"").replace(/q /,"").replace(/ /g,"-");
	 console.log(headingtextAnchor);
	 heading.attr("id",headingtextAnchor );
	 var link = $("<a>");
     link.attr("href", "#" + headingtextAnchor);
     link.attr("title", headingtext);
     link.text(headingtext);
     link.addClass("link");

     if (headingtext.trim() == "") {
         //remove h3 with no content
         heading.remove();
     } else {
         heading.html(link);
     }
     
	 
	 });
	});
