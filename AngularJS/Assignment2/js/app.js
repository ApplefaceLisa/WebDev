angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    toBuyCtrl.items = ShoppingListCheckOffService.toBuyList;
    toBuyCtrl.message = (toBuyCtrl.items.length == 0) ? "Everything is bought!" : null;
    toBuyCtrl.checked = function(index) {
        ShoppingListCheckOffService.checked(index);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.items = ShoppingListCheckOffService.boughtList;
}

function ShoppingListCheckOffService() {
    var checkSrv = this;
    checkSrv.toBuyList = [
      {name: "cookies", quantity: 10},
      {name: "butters", quantity: 3},
      {name: "beers", quantity: 12},
      {name: "popcorns", quantity: 5},
      {name: "watermelons", quantity: 1},
      {name: "pineapples", quantity: 2},
      {name: "chips", quantity: 6},
      {name: "beef jerks", quantity: 4},
      {name: "grapes", quantity: 1},
      {name: "breads", quantity: 2}
    ];

    checkSrv.boughtList = [];

    checkSrv.checked = function(index) {
        checkSrv.boughtList.push(checkSrv.toBuyList[index]);
        checkSrv.toBuyList.splice(index, 1);
    }
}
