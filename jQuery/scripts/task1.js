﻿function solve(){
    return  function(selector, count){
        if (typeof (selector) !== 'string') {
            throw ('invalid selector');
        }
            if (isNaN(count) || count < 1) {
                throw ('invalid count');
            }
            var element = $(selector),
                ul = $('<ul />').addClass('itel-list'),
                li,
                i;
            for (i = 0; i < count.length; i++) {
                li = $('<li />').addClass('list-item').text('List item #' + i);
                li.appendTo(ul);
            }
            ul.appendTo(element);
            alert(ul);
        };
    }