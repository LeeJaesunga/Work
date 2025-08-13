document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnFooterSel");
    const list = document.querySelector(".footer-link-select .link-list");

    btn.addEventListener("click", function (event) {
        event.preventDefault(); // a태그 이동 방지
        list.style.display = (list.style.display === "block") ? "none" : "block";
    });

    // 바깥 클릭 시 닫히게 하기
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".footer-link-select")) {
            list.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnCtpv");
    const popup = btn.closest(".block").querySelector(".popup-select");

    btn.addEventListener("click", function () {
        // 현재 display 상태에 따라 토글
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    });

    // 버튼 외부 클릭 시 닫히게 하기 (선택사항)
    document.addEventListener("click", function (e) {
        if (!popup.contains(e.target) && e.target !== btn) {
            popup.style.display = "none";
        }
    });
});
