
var player= null;

document.addEventListener("DOMContentLoaded", function() {
    init();
});


function init(){
    if(typeof(gSTB) !== 'undefined'){
        player = stbPlayerManager.list[0];
        gSTB.SetTopWin(0);

        player.play({
            uri: 'udp://@225.1.1.1:2001',
            solution: 'auto',
        });

    }else{
        alert('No estas conectando un dispositivo infomir');
    }
}