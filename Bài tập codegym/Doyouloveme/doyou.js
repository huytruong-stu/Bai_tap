function yesClick()
    {
        alert("I love you too! <3");
    }
    function noHover()
    {
        var x = Math.round(Math.random() * window.innerWidth);
        var y = Math.round(Math.random() * window.innerHeight);
        document.getElementById('btnNo').style.left = x + 'px';
        document.getElementById('btnNo').style.top = y + 'px';
    }
    