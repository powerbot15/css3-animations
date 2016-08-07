(function(){

    var activators = document.querySelectorAll('[data-translate]');

    Array.prototype.forEach.call(activators, function (el) {

        el.addEventListener('click', function (e) {

            e.preventDefault();

            var elToTranslate = this.parentNode.querySelector('[data-el-to-move]');

            elToTranslate.classList.toggle('translated')

        });

    })

})();