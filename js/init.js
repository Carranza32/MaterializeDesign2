$(document).ready(function () {
    M.AutoInit();
    $('.chips-placeholder').chips({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });
    $('.select-wrapper').siblings("label").addClass("active");
    $('.modal').modal({inDuration: 150,outDuration: 150});
    $('#tabs-swipe-demo').tabs({swipeable: true});
    //$(".rating").rate();
    $(".dropdown-trigger").dropdown({coverTrigger: false});
    $('input#input_text, textarea#textarea2').characterCounter();


    //Menu completo const menu = ["Fab","Image List","List","Progress","Menu","Ripple","Slider"];
    const menu = ["Getting Started","Button","Card","Selection","Chips","Dialog","Drawer","Elevation","Select","Snackbar","Tab Bar","Text Field","Tooltips","Nav","Typography"];
    for (let i = 0; i < menu.length; i++) {
        $("#slide-out").append("<li><a id='"+menu[i]+"' href='"+menu[i].replace(" ","")+".html' class='waves-effect'>"+menu[i]+"</a></li>");
    }

    $("#limpiar").click(function (e) { 
        e.preventDefault();
        $("#search").val('');
    });

    $('.header-search-input').autocomplete({
        data: {
            "Getting Started": null,
            "Button": null,
            "Card": null,
            "Selection": null,
            "Chips": null,
            "Dialog": null,
            "Drawer": null,
            "Elevation": null,
            "Select": null,
            "Snackbar": null,
            "Tab Bar": null,
            "Text Field": null,
            "Tooltips": null,
            "Nav": null,
            "Typography": null,
        },
        onAutocomplete: function(data){
            window.location.replace(data.replace(" ","")+'.html');
        }
    });
});

function MakeToast(){
    var toastHTML = '<span>Single-line message with action.</span><button class="btn-flat toast-action">Action</button>';
    M.toast({html: toastHTML});
}