import * as handlebars from "handlebars";
export const Tlist = function (context, options) {
    var ret = "<ul>";

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + "<li>" + options.fn(context[i]) + "</li>";
    }

    return ret + "</ul>";
};