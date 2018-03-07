"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            var props = _this.props;
            if (props.disabled) {
                return;
            }
            if (!('checked' in props)) {
                _this.setState({
                    checked: e.target.checked,
                });
            }
            props.onChange({
                target: __assign({}, props, { checked: e.target.checked }),
                stopPropagation: function () {
                    e.stopPropagation();
                },
                preventDefault: function () {
                    e.preventDefault();
                },
                nativeEvent: e.nativeEvent,
            });
        };
        _this.saveInput = function (node) {
            _this.input = node;
        };
        var checked = 'checked' in props ? props.checked : props.defaultChecked;
        _this.state = {
            checked: checked,
        };
        return _this;
    }
    Checkbox.prototype.componentWillReceiveProps = function (nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked,
            });
        }
    };
    Checkbox.prototype.shouldComponentUpdate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    };
    Checkbox.prototype.focus = function () {
        this.input.focus();
    };
    Checkbox.prototype.blur = function () {
        this.input.blur();
    };
    Checkbox.prototype.render = function () {
        var _a = this.props, prefixCls = _a.prefixCls, className = _a.className, style = _a.style, name = _a.name, id = _a.id, type = _a.type, disabled = _a.disabled, readOnly = _a.readOnly, tabIndex = _a.tabIndex, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, autoFocus = _a.autoFocus, value = _a.value, others = __rest(_a, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "autoFocus", "value"]);
        var globalProps = Object.keys(others).reduce(function (prev, key) {
            if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                prev[key] = others[key];
            }
            return prev;
        }, {});
        var checked = this.state.checked;
        var classString = classNames(prefixCls, className, (_b = {},
            _b[prefixCls + "-checked"] = checked,
            _b[prefixCls + "-disabled"] = disabled,
            _b));
        return (<span className={classString} style={style}>
                <input name={name} id={id} type={type} readOnly={readOnly} disabled={disabled} tabIndex={tabIndex} className={prefixCls + "-input"} checked={!!checked} onClick={onClick} onFocus={onFocus} onBlur={onBlur} onChange={this.handleChange} autoFocus={autoFocus} ref={this.saveInput} value={value} {...globalProps}/>
                <span className={prefixCls + "-inner"}/>
            </span>);
        var _b;
    };
    Checkbox.propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        name: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.string,
        defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onClick: PropTypes.func,
        tabIndex: PropTypes.string,
        readOnly: PropTypes.bool,
        autoFocus: PropTypes.bool,
        value: PropTypes.any,
    };
    Checkbox.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: false,
        onFocus: function () { },
        onBlur: function () { },
        onChange: function () { },
    };
    return Checkbox;
}(React.Component));
exports.default = Checkbox;
