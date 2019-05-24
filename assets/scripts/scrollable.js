var ScrollSection = document.getElementsByClassName("Scrollable");
var ScrollBody = document.getElementsByClassName("ScrollBody");
var ScrollHeader = document.getElementsByClassName("ScrollHeader");

for (var i = 0; i < ScrollSection.length; i++) {
    ScrollSection[i].onscroll = function () { scroll(i) };
}

function scroll(scrollIndex) {
    scrollIndex -= 1;
    console.log(ScrollSection[scrollIndex].scrollHeight);
    if (ScrollSection[scrollIndex].scrollTop > 31) {
        ScrollHeader[scrollIndex].style.padding = "1% 0%";
    } else if (ScrollSection[scrollIndex].scrollTop < 30) {
        ScrollHeader[scrollIndex].style.padding = "8% 0%";
    }
};


//80px 15px