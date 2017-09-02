$(document).ready(function(){
    $("button").click(function(){
	console.log("button clicked");
        $.post("http://localhost:3001/gTran",
        {
          sMsg: $("#srcMsg").val(),
          fromL: $("#sLang").val(),
		  toL:"en"	
        },
        function(data,status){
            var dataJson = JSON.parse(data);
			$("#dstMsg").val(dataJson.tMsg);
        });
    });
});