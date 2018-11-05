//$("#frmCheckout").attr("action", "/whmcs/cart.php?a=checkout&financial=1")
//define var iman for financial bill if iman = 1 client need financial bill
var iman;
iman = 0;
var selectButton = $("button#select-company");
//var tax achieve from view content
var tax;
var va =$("strong")[0].textContent.replace(" USD","").substr(1)*0.09;
var listItem = '';
var amount = $(".alert, .alert-success, .text-center, .large-text");
function getListItem(data)
{
    for (i=0; i<data.length ;i++) {
        listValue = JSON.stringify(data[i].address).substr(1,JSON.stringify(data[i].address).length - 2);
        listItem +="<option value='"+listValue+"'>"+ listValue +"</option>";
    }
    return listItem;

}

//function move for progress bar
function move()
{
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            console.log(width);
        }
    }
}

$(document).ready(function(){
    $("#row-progress").hide();
    $("#iman").hide();
    var b = $("div#select-company");
    $("div#select-company").hide();
    var a =  $("#chechboxitem");
    a.click(function(){
        amount.html(' Total Due Today: &nbsp; <strong>subtotal:$'+va*100/9+'.00 USD + tax: $'+va+'.00 USD = '+va*109/9+'.00 USD</strong> ');
        //show company select element for selecting sesired company
        $("#select-company").toggle();
        if(iman == 0){
            iman = 1;
        }else{
            iman = 0;
        }
    });
    var btn = $("#enter-new");
    btn.click(function(){
        //if click on insert botton, company specification form is shown
        $("#iman").show();
    });
    b = $("form#imanAjax");
    b.submit(function (e) {
        $("#row-progress").show();
        $.post('http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=store',$(this).serialize(),function (data) {
            console.log(data);
        })
        e.preventDefault();
        //run progress bar
        move();
        //receive list items from index api
        $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=index", { api: "api" } )
            .done(function( data ) {
                listItem = getListItem(data);
                //hide extra content after save
                $("#row-progress").hide();
                $("#select-list").html(listItem);
                listItem = "";
                $("form#imanAjax").hide();
                $("div#iman").html("<div class=\"bs-example\" data-example-id=\"simple-alerts\"> <div class=\"alert alert-success\" role=\"alert\"> <strong>Well done!</strong> You successfully save this record. </div></div>");
                $("button#enter-new").hide();
            });
        selectButton.click(function () {
            // if click select company shoud hide select list and change href of main form's submit action
            $("div#select-company").hide();
            $("div.form-check").hide();
            $("#frmCheckout").attr("action", "/whmcs/cart.php?a=checkout&financial=1")
        })

    });
    $.get( "http://localhost/whmcs/admin/addonmodules.php?module=addonmodule&controller=CompanySpecification&action=index", { api: "api" } )
        .done(function( data ) {
            listItem = getListItem(data);
            $("#select-list").html(listItem);
            listItem = ""
        });
    selectButton.click(function () {
        // if click select company shoud hide select list and change href of main form's submit action
        $("div#select-company").hide();
        $("div.form-check").hide();
        $("#frmCheckout").attr("action", "/whmcs/cart.php?a=checkout&financial=1")
    })

})