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

    //const menu = ["Button","Card","Checkbox","Chips","Dialog","Drawer","Elevation","Fab","Image List","List","Progress","Menu","Radio","Ripple","Select","Slider","Snackbar","Switch","Tab Bar","Text Field","Nav","Typography"];
    const menu = ["Getting Started","Button","Card","Selection","Chips","Dialog","Drawer","Elevation","Select","Snackbar","Tab Bar","Text Field","Tooltips","Nav","Typography"];

    for (let i = 0; i < menu.length; i++) {
        $("#slide-out").append("<li><a id='"+menu[i]+"' href='"+menu[i].replace(" ","")+".html' class='waves-effect'>"+menu[i]+"</a></li>");
    }

    $("#limpiar").click(function (e) { 
        e.preventDefault();
        $("#search").val('');
    });
});

function MakeToast(){
    var toastHTML = '<span>Single-line message with action.</span><button class="btn-flat toast-action">Action</button>';
    M.toast({html: toastHTML});
}
