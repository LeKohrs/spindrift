import Barba from 'barba.js';

Barba.Pjax.start();


document.addEventListener("DOMContentLoaded", function() {
    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise
                .all([this.newContainerLoading, this.Out()])
                .then(this.In.bind(this));
        },

        Out: function() {
            this.oldContainer.classList.toggle('bounceOutRight');

            return new Promise(function(resolve, reject) {
                window.setTimeout(function() {
                resolve();
            }, 600);
            });
        },
        In: function() {
            let body_classes = Barba.Pjax.Dom.currentHTML.match(/body\sclass=['|"]([^'|"]*)['|"]/)[1];
            let body_class_array = body_classes.split(' ');
            let body = document.getElementsByTagName('body')[0];
            body.className = '';
            for(let body_class of body_class_array) {
                body.classList.add(body_class);
            }
            this.newContainer.classList.toggle('bounceInRight');
            this.done();
        }
    });
    Barba.Pjax.getTransition = function() {
        return FadeTransition;
    };
});
