//background color changes
$("document").ready(function() {
	$("#products h2.product-name[data-type='vitamin']").css("backgroundColor", "darkgreen");
	$("#products h2.product-name[data-type='mineralwater']").css("backgroundColor", "blue");
	$("#products h2.product-name[data-type='proteinbar']").css("backgroundColor", "purple");

    document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
        updateProductView("vitamins", evt.target.checked);
    });

    document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
        updateProductView("mineralwater", evt.target.checked);
    });

    document.querySelector('#cbProtein').addEventListener('change',function (evt) {
        updateProductView("proteinbar", evt.target.checked);
    });
//lesson code solution with wrap 
    $(".product-item").each(function () {
        var prodName = encodeURIComponent($(this).children("h2").text());
        var prodID = encodeURIComponent($(this).data("prod_id"));

        var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
        $(this).children("img").wrap(link);
    });
        

    function updateProductView(categoryName, bVisible) {
        var dataSelectorVal = "";
        switch (categoryName) {
        case "vitamins":
            dataSelectorVal = "h2[data-type='vitamin']";
            break;
        case "mineralwater":
            dataSelectorVal = "h2[data-type='mineralwater']";
            break;
        case "proteinbar":
            dataSelectorVal = "h2[data-type='proteinbar']";
            break;
        }
        $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
    };
//lesson code
    $(".product-item").each(function () {

//lesson code
        var prodID =
        encodeURIComponent($(this).data("prod_id"));
        var link = $("a href='product.html?prodName=" + prodName + "&prodId=" + prodID + "'/>");
            $(this).children("img").wrap(link);       

    })
});
