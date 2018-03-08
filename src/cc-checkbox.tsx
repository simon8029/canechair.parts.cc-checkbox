import * as React from 'react';
import * as classNames from 'classnames';

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

export default class CCCheckbox extends React.Component<ThisPropsType, ThisStateType> {
    constructor(props: ThisPropsType) {
        super(props as any);
        this.state = {
            isChecked: false
        };
    }

    render() {
        return (
            <span className={this.props.className} style={this.props.style}>
                <input
                    name={name}
                    id={this.props.id}
                    type={this.props.type}
                    readOnly={this.props.readOnly}
                    disabled={this.props.disabled}
                    tabIndex={this.props.tabIndex}
                    className={this.props.`${this.props.prefixCls}-input`}
                    checked={this.props.!!checked}
                onClick={this.props.onClick}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                onChange={this.handleChange}
                autoFocus={autoFocus}
                ref={this.saveInput}
                value={value}
                {...globalProps}
                />
                <span className={`${prefixCls}-inner`} />
            </span>
        );
    }

    componentWillMount() {
        //
    }

    componentDidMount() {
        //
    }

    componentWillReceiveProps(nextProps: StateToPropsType) {
        this.setState({ cccheckboxArray: nextProps.cccheckboxArray });
    }

    componentDidUpdate() {
        //
    }

    // Build in delete function, remove it if not needed.
    // oncccheckboxDelete = (cccheckbox: cccheckboxModel) => {
    //    this.props.actions.deletecccheckbox(cccheckbox)
    //    .then(() => {
    //        toastr.success('cccheckbox deleted.');
    //    });
    // }
    //
}

export type ThisStateType = {
    isChecked: boolean
};

export type ThisPropsType = {
    prefixCls: string,
    className: string,
    style: object,
    name: string,
    id: string,
    type: string,
    defaultChecked: boolean | number,
    checked: boolean | number,
    disabled: boolean,
    onFocus: () => void,
    onBlur: () => void,
    onChange: () => void,
    onClick: () => void,
    tabIndex: number,
    readOnly: boolean,
    autoFocus: boolean,
    value: any,
};