import Vue from 'vue'
(() => {
     new Vue({
        el: "#app",
        data: {
            message: "Hello Vue!"
        },
        template: '<div style="background-color: red;width: 100px;height: 100px;">{{message}}</div>'
    });
})();
