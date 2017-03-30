/**
 * Hint directive. Shows up container with a text
 */
myApp.directive('hint', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attr) {

            var container;

            elm.on('mousemove', function(e) {
                container.css({
                    top: e.pageY + 'px',
                    left: e.pageX + 'px'
                })
            });

            elm.on('mouseover', function(e) {
                container = $('<div class="hint">' + attr.hint + '</div>').insertAfter(document.body);
                container.css({
                    top: e.pageY + 'px',
                    left: e.pageX + 'px'
                })
            });

            elm.on('mouseout', function() {
                container.remove();
            });
        }
    }
});


