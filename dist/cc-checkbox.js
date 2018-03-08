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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// export default class Checkbox extends React.Component {
//     static propTypes = {
//         prefixCls: PropTypes.string,
//         className: PropTypes.string,
//         style: PropTypes.object,
//         name: PropTypes.string,
//         id: PropTypes.string,
//         type: PropTypes.string,
//         defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
//         checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
//         disabled: PropTypes.bool,
//         onFocus: PropTypes.func,
//         onBlur: PropTypes.func,
//         onChange: PropTypes.func,
//         onClick: PropTypes.func,
//         tabIndex: PropTypes.string,
//         readOnly: PropTypes.bool,
//         autoFocus: PropTypes.bool,
//         value: PropTypes.any,
//     };
//     static defaultProps = {
//         prefixCls: 'rc-checkbox',
//         className: '',
//         style: {},
//         type: 'checkbox',
//         defaultChecked: false,
//         onFocus() { },
//         onBlur() { },
//         onChange() { },
//     };
//     constructor(props) {
//         super(props);
//         const checked = 'checked' in props ? props.checked : props.defaultChecked;
//         this.state = {
//             checked,
//         };
//     }
//     componentWillReceiveProps(nextProps) {
//         if ('checked' in nextProps) {
//             this.setState({
//                 checked: nextProps.checked,
//             });
//         }
//     }
//     shouldComponentUpdate(...args) {
//         return PureRenderMixin.shouldComponentUpdate.apply(this, args);
//     }
//     focus() {
//         this.input.focus();
//     }
//     blur() {
//         this.input.blur();
//     }
//     handleChange = (e) => {
//         const { props } = this;
//         if (props.disabled) {
//             return;
//         }
//         if (!('checked' in props)) {
//             this.setState({
//                 checked: e.target.checked,
//             });
//         }
//         props.onChange({
//             target: {
//                 ...props,
//                 checked: e.target.checked,
//             },
//             stopPropagation() {
//                 e.stopPropagation();
//             },
//             preventDefault() {
//                 e.preventDefault();
//             },
//             nativeEvent: e.nativeEvent,
//         });
//     };
//     saveInput = (node) => {
//         this.input = node;
//     }
//     render() {
//         const {
//             prefixCls,
//             className,
//             style,
//             name,
//             id,
//             type,
//             disabled,
//             readOnly,
//             tabIndex,
//             onClick,
//             onFocus,
//             onBlur,
//             autoFocus,
//             value,
//             ...others,
//         } = this.props;
//         const globalProps = Object.keys(others).reduce((prev, key) => {
//             if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
//                 prev[key] = others[key];
//             }
//             return prev;
//         }, {});
//         const { checked } = this.state;
//         const classString = classNames(prefixCls, className, {
//             [`${prefixCls}-checked`]: checked,
//             [`${prefixCls}-disabled`]: disabled,
//         });
//         return (
//             <span className={classString} style={style}>
//                 <input
//                     name={name}
//                     id={id}
//                     type={type}
//                     readOnly={readOnly}
//                     disabled={disabled}
//                     tabIndex={tabIndex}
//                     className={`${prefixCls}-input`}
//                     checked={!!checked}
//                     onClick={onClick}
//                     onFocus={onFocus}
//                     onBlur={onBlur}
//                     onChange={this.handleChange}
//                     autoFocus={autoFocus}
//                     ref={this.saveInput}
//                     value={value}
//                     {...globalProps}
//                 />
//                 <span className={`${prefixCls}-inner`} />
//             </span>
//         );
//     }
// }
var CCCheckbox = /** @class */ (function (_super) {
    __extends(CCCheckbox, _super);
    function CCCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isChecked: false
        };
        return _this;
    }
    CCCheckbox.prototype.render = function () {
        return (React.createElement("span", { className: this.props.className, style: this.props.style },
            React.createElement("input", { name: name, id: this.props.id, type: this.props.type, readOnly: this.props.readOnly, disabled: this.props.disabled, tabIndex: this.props.tabIndex, className: this.props.(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", "-input"], ["", "-input"])), this.props.prefixCls), checked: this.props., checked: true }),
            "onClick=",
            this.props.onClick,
            "onFocus=",
            this.props.onFocus,
            "onBlur=",
            this.props.onBlur,
            "onChange=",
            this.handleChange,
            "autoFocus=",
            autoFocus,
            "ref=",
            this.saveInput,
            "value=",
            value,
            globalProps,
            "/>",
            React.createElement("span", { className: prefixCls + "-inner" })));
    };
    CCCheckbox.prototype.componentWillMount = function () {
        //
    };
    CCCheckbox.prototype.componentDidMount = function () {
        //
    };
    CCCheckbox.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ cccheckboxArray: nextProps.cccheckboxArray });
    };
    CCCheckbox.prototype.componentDidUpdate = function () {
        //
    };
    return CCCheckbox;
}(React.Component));
exports.default = CCCheckbox;
var templateObject_1;
