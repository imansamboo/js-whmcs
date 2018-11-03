function calculateTax() {
    var total=$(".amt").text();
    total=total.replace(" USD","");
    total=total.substr(1);
    var tax = 0.09*total;
    return [tax,total];

}
var tax;
var subTotal;
var total;
$(document).ready(function(){
    tax = calculateTax()[0];
    subTotal = calculateTax()[1];
    total = 1.09 * subTotal

    $(".subtotal").after("<div class=\"bordered-totals\">\n" +
        "    <div class=\"clearfix\">\n" +
        "        <span class=\"pull-left\">value added equals to</span>\n" +
        "        <span id=\"taxTotal1\" class=\"pull-right\">$" + tax + " USD</span>\n" +
        "    </div>\n" +
        "</div>");
    $(".total-due-today-padded").html("\n" +
        "                                    <span id=\"totalDueToday\" class=\"amt\">$"+Math.round(total)+" USD</span>\n" +
        "                                    <span>Total Due Today</span>\n" +
        "                                ");
    $("span.cost").html("$"+Math.round(total)+".00 USD");
});

/*
<div class="bordered-totals">
    <div class="clearfix">
        <span class="pull-left">level1 @ 9.00%</span>
        <span id="taxTotal1" class="pull-right">$18.00 USD</span>
    </div>
</div>
*/
