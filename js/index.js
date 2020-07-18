$("#ButSubmit").click(function (e) { 
    e.preventDefault();
    var texto = $("#FTexto").val();
    var div = $('<div class="lis"><p style="font-style: italic;">' + texto + '</p>');
    var check = $('<div class="divbot"><button id="chec" class="checar">check</button>').click(function(){
        $(this).parent().toggleClass("chec");
    })
    var del = $('<button id="borr" class="del">delete</button></div>').click(function(){
        $(this).parent().remove();
    })
    $(div).append(check, del);
    $(".lista").append(div);
    
});