$(document).ready(function () {
    $('.chips-placeholder').chips({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.select-wrapper').siblings("label").addClass("active");
    $('.modal').modal({inDuration: 150,outDuration: 150});
    //$(".rating").rate();
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });

    const menu = ["Button","Card","Checkbox","Chips","Dialog","Drawer","Elevation","Fab","Image List","List","Progress","Menu","Radio","Ripple","Select","Slider","Snackbar","Switch","Tab Bar","Text Field","Nav","Typography"];
    for (let i = 0; i < menu.length; i++) {
        $("#slide-out").append("<li><a id='"+menu[i]+"' href='"+menu[i]+".html' class='waves-effect'>"+menu[i]+"</a></li>");
    }

    $("ul#slide-out > li > a").click(function(e){
        /*e.preventDefault();*/
    });

    $("#limpiar").click(function (e) { 
        e.preventDefault();
        $("#search").val('');
    });
});