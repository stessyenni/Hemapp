"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var FadeIn = function (_a) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'up' : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.duration, duration = _d === void 0 ? 0.4 : _d, _e = _a.once, once = _e === void 0 ? true : _e, className = _a.className, props = __rest(_a, ["children", "direction", "delay", "duration", "once", "className"]);
    var _f = (0, react_1.useState)(false), isVisible = _f[0], setIsVisible = _f[1];
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (once && ref.current) {
                    observer.unobserve(ref.current);
                }
            }
            else if (!once) {
                setIsVisible(false);
            }
        }, {
            root: null,
            threshold: 0.1,
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [once]);
    var getDirectionStyles = function () {
        switch (direction) {
            case 'up':
                return 'translate-y-8';
            case 'down':
                return 'translate-y-[-8px]';
            case 'left':
                return 'translate-x-8';
            case 'right':
                return 'translate-x-[-8px]';
            default:
                return 'translate-y-8';
        }
    };
    return (<div ref={ref} className={(0, utils_1.cn)('transition-all', isVisible
            ? 'opacity-100 transform-none'
            : "opacity-0 ".concat(getDirectionStyles()), className)} style={{
            transitionProperty: 'opacity, transform',
            transitionDuration: "".concat(duration, "s"),
            transitionDelay: "".concat(delay, "s"),
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }} {...props}>
      {children}
    </div>);
};
exports.default = FadeIn;
