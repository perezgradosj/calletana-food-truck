window.addEventListener("load", function() {
    let tabs = document.querySelector(".tabs");
    let options = { responsiveThreshold: 100 };
    M.Tabs.init(tabs, options);
})

function newPedidoAlert(){
    var modal = document.querySelector('#modal1');
    var instanceModal = M.Modal.init(modal);
    instanceModal.open();
}