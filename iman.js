var iman;
iman = 0;
$(document).ready(function(){
    $("#iman").hide();
    var b = $("div#select-company");
    $("div#select-company").hide();
    var a =  $("#chechboxitem");
    console.log(a);

    a.click(function(){
        $("#select-company").toggle();
        if(iman == 0){
            iman = 1;
        }else{
            iman = 0;
        }
        console.log(iman);
    });
    var btn = $("#enter-new");
    btn.click(function(){
        $("#iman").show();
    });
    b = $("form#imanAjax");
    b.submit(function (e) {
        $.post('http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=store',$(this).serialize(),function (data) {
            console.log(data);
        })
        e.preventDefault();
    });
    var listItem = '';
    $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=insex", { api: "api" } )
        .done(function( data ) {
            for (i=0; i<data.length ;i++) {
                listItem +="<option value='JSON.stringify(data[i].address)'>"+ (JSON.stringify(data[i].address)) +"</option>";
                console.log(listItem)
                $("#select-list").html(listItem)
            }
            });

})

/*http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=store*/







