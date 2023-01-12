
$(document).ready(function(){
    $('#bp3mnu').click(function(){
        $('#struktur1').css({
            'height': '550px',
        })
        $('#up1').css('display', 'block')
        $('#bp3mnu').css('display', 'none')
    });
});

$(document).ready(function () { 
    $('#up1').click(function () { 
        $('#struktur1').css({
            'height': '110px',
            // 'background': 'rgb(0, 208, 255)',
        })
        $('#bp3mnu').css('display', 'block')
        $('#up1').css('display', 'none')
    });
});