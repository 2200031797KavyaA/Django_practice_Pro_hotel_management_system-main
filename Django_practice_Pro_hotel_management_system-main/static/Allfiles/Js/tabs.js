(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.tabs = factory(root.jQuery);
    }
}(this, function ($) {
    var tabs = function (options) {
        //默认参数
        var def = {
            selector: null,          //标签容器的选择器
            start: 0,                 //默认显示的容器索引值
            event: "click",          //触发选项卡的鼠标动作
            delay: 200,               //延时动作触发，仅对鼠标滑过有效
            selected: ".selected",  //当前选项卡标签的附加样式名
            callback: $.noop          //回调函数
        };

        //参数验证
        var args = arguments[0];
        if (!args || !(typeof(args) == "object" && Object.prototype.toString.call(args).toLowerCase() == "[object object]" && !args.length)) {
            return $.error("ECode.tab: 参数必须为JSON格式");
        }

        //合并并修正参数
        $.extend(def, options);
        def.selected = def.selected.replace(/^\./, "");

        //主方法
        var tab = function (idArray, tagRel, handle) {
            tagRel.removeClass(def.selected);
            handle.addClass(def.selected);
            $(idArray.join(",")).hide();
            var thisTagRel = handle.attr("rel");
            $(thisTagRel).show();
            def.callback.apply(this, [thisTagRel.split('#')[1]]);
        };

        var tabWrap = $(def.selector);
        var numIndex = !!(typeof def.start === "number");
        tabWrap.each(function () {
            //缓存标签及容器对象，并按照初始参数显示容器及标签样式
            var T = $(this);
            var _id = [], container, display, tagRel = T.children("[rel^='#']");
            tagRel.removeClass(def.selected);
            for (var i = 0; i < tagRel.length; i++) {
                var rel = tagRel.eq(i).attr("rel");
                _id.push(rel);
                if (numIndex && def.start == i) {
                    display = $(rel);
                    tagRel.eq(i).addClass(def.selected);
                }
            }
            if (!numIndex) {
                display = $(def.start);
                T.children("[rel^='" + def.start + "']").addClass(def.selected);
            }
            container = $(_id.join(","));
            container.not($(display)).hide();
            display.show();
            def.callback.apply(this, [display.attr("id")]);

            //根据不同参数调用主方法
            var timer, isDelay = (/^mouseover|mouseout|mouseleave|mouseenter$/.test(def.event));
            if (!isDelay) {
                def.delay = 15
            } else {
                tagRel.bind("mouseout", function () {
                    clearTimeout(timer);
                });
            }
            tagRel.bind(def.event, function () {
                var _this = $(this);
                var thisTagRel = _this.attr("rel");
                clearTimeout(timer);
                timer = setTimeout(function () {
                    tab(_id, tagRel, _this);
                }, def.delay);
            });
        });
    };


    // jquery plugin
    $.fn.tabs = function (opt) {
        var ext = {
            selector: $(this)
        };
        opt = $.extend(opt, ext);

        tabs(opt);
    };

    return tabs;
}));
