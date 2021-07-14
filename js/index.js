window.addEventListener("load", function() {
    let tabs = document.querySelector(".tabs");
    let options = { responsiveThreshold: 100 };
    let instance = M.Tabs.init(tabs, options);
})