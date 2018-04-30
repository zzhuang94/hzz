var App = function() {
    var App;
    var kobe = function(kobe) {
        console.log(kobe, 'good');
    }
    App = {
        kobe: kobe
    };
    App.aaa = 'kobe';
    return App;
}();

App.kobe('huangzhuozhuang');
console.log(App.aaa);
