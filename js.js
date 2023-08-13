console.log($(".activeli > .nameSection").text())

$(".titlePage").text($(".activeli > .nameSection").text());

$(".menuSide > ul > li").click(function () {
    console.log("kkk")
    console.log("." + $(this).find(".nameSection").text())
    $("." + $(this).find(".nameSection").text()).css("display", "block");
    $("." + $(this).find(".nameSection").text()).siblings().css("display", "none");
    $(this).addClass("activeli");
    $(this).siblings().removeClass("activeli");
    $(".titlePage").text($(".activeli > .nameSection").text());

})

$(".itemDash").addClass("load");
$(".menuButShow").click(function () {
    $(".sidesection").toggleClass("showSid");
    $(".menuButShow").toggleClass("closeIcon");
    $(".menuButShow > i").toggleClass("far fa-times");
    $("body").toggleClass("paddingBody");
    if ($("body").hasClass("paddingBody")) {
        $(".paddingBody > .barSection").css("width", "85%")

    }
    else {
        $(".barSection").css("width", "100%")

    }
})
