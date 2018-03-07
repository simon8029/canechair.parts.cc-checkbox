/// <reference types="react" />
import * as React from 'react';
export default class Checkbox extends React.Component {
    static propTypes: {
        prefixCls: any;
        className: any;
        style: any;
        name: any;
        id: any;
        type: any;
        defaultChecked: any;
        checked: any;
        disabled: any;
        onFocus: any;
        onBlur: any;
        onChange: any;
        onClick: any;
        tabIndex: any;
        readOnly: any;
        autoFocus: any;
        value: any;
    };
    static defaultProps: {
        prefixCls: string;
        className: string;
        style: {};
        type: string;
        defaultChecked: boolean;
        onFocus(): void;
        onBlur(): void;
        onChange(): void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(...args: any[]): any;
    focus(): void;
    blur(): void;
    handleChange: (e: any) => void;
    saveInput: (node: any) => void;
    render(): JSX.Element;
}
