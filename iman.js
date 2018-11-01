/*var iman;
iman = 0;
$(document).ready(function(){
    $("#iman").hide();
    var b = $("div#select-company");
    $("div#select-company").hide();
    var a =  $("#chechboxitem");
    console.log(a);
    var listItem = '';
    var listValue = '';
    $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=index", { api: "api" } )
        .done(function( data ) {
            for (i=0; i<data.length ;i++) {
                listValue = JSON.stringify(data[i].address).substr(1,JSON.stringify(data[i].address).length - 2)
                listItem +="<option value='"+listValue+"'>"+ listValue +"</option>";
                $("#select-list").html(listItem)
            }
        });

    a.click(function(){
        $("#select-company").toggle();
        if(iman == 0){
            iman = 1;
        }else{
            iman = 0;
        }
        console.log(iman);
    });
    $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=insex", { api: "api" } )
        .done(function( data ) {
            for (i=0; i<data.length ;i++) {
                listValue = JSON.stringify(data[i].address).substr(1,JSON.stringify(data[i].address).length - 2)
                listItem +="<option value='"+listValue+"'>"+ listValue +"</option>";
                $("#select-list").html(listItem)
            }
        });
    var btn = $("#enter-new");
    btn.click(function(){
        $("#iman").toggle();
    });
    b = $("form#imanAjax");
    b.submit(function (e) {
        $.post('http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=store',$(this).serialize(),function (data) {
            console.log(data);
        });
        $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=insex", { api: "api" } )
            .done(function( data ) {
                for (i=0; i<data.length ;i++) {
                    listValue = JSON.stringify(data[i].address).substr(1,JSON.stringify(data[i].address).length - 2)
                    listItem +="<option value='"+listValue+"'>"+ listValue +"</option>";
                    $("#select-list").html(listItem);
                    $("form#imanAjax").hide();
                    $("div#iman").html('<div class="alert alert-primary" role="alert">This is a primary alert—check it out! </div>');
                }
            });

        e.preventDefault();
    });


})*/

/*http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=store*/



/*var total=$(".amt").text();
total=total.replace(" USD","");
total=total.substr(1);
console.log(total);*/
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
var iman;
iman = 0;
$(document).ready(function(){
    $("#row-progress").hide();
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
        $("#row-progress").show();
        $.post('http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=store',$(this).serialize(),function (data) {
            console.log(data);
        })
        e.preventDefault();
        move();

        $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=insex", { api: "api" } )
            .done(function( data ) {
                for (i=0; i<data.length ;i++) {
                    listValue = JSON.stringify(data[i].address).substr(1,JSON.stringify(data[i].address).length - 2);
                    listItem +="<option value='"+listValue+"'>"+ listValue +"</option>";
                }
                $("#row-progress").hide();
                $("#select-list").html(listItem);
                $("form#imanAjax").hide();
                $("div#iman").html("<div class=\"bs-example\" data-example-id=\"simple-alerts\"> <div class=\"alert alert-success\" role=\"alert\"> <strong>Well done!</strong> You successfully save this record. </div></div>");
                $("button#enter-new").hide();
            });

    });
    var listItem = '';
    $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=insex", { api: "api" } )
        .done(function( data ) {
            for (i=0; i<data.length ;i++) {
                listValue = JSON.stringify(data[i].address).substr(1,JSON.stringify(data[i].address).length - 2);
                listItem +="<option value='"+listValue+"'>"+ listValue +"</option>";
                $("#select-list").html(listItem)
            }
        });

})




