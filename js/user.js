$(function () {
    // console.log($(".icon-gouwudai"));
    $(".icon-gouwudai").click(function () {
        $(".shopbag").toggle();
    })



    let list=$("header .list");
    let side=$(".side");
    let li=$(".side li");
    // console.log(li);
    list.click(function(){
        side.slideToggle("slow");
        $("header .icon-gouwudai").toggleClass("discover");
        $(".change1").toggleClass("row1");
        $(".change2").toggleClass("row2");
        // console.log($(".row1"), $(".row2"));




        list.click(function(){
        //     	// $("body").css({
        //     	// "overflow-x": 'auto',
        //     	// "overflow-y": 'auto'
        //     });

            $(document).unbind("scroll.unable");
        })

        $(document).on('scroll.unable',function (e) {

            $(document).scrollTop(top);

        })

    })
    li.mouseenter(function(){
        let i=$(this).index();
        li.removeClass('active').eq(i).addClass('active');
    });
    // console.log($(".active"));


    let odd=$(".odd");
    let list2=$(".list2");
    let list1=$(".bottom .main ul>li");
    console.log(list1,list2,odd);
    list1.click(function(){
        let i=$(this).index();
        list2.eq(i).slideToggle("slow");

        odd.eq(i).toggleClass('trun');
    });






})