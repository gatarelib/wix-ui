export declare const inputTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    hasStyleState: (stateName: any) => boolean;
    getInput: () => any;
    getValue: () => any;
    getPlaceholder: () => any;
    getPrefix: () => any;
    getSuffix: () => any;
    isDisabled: () => any;
    setValue: (value: any) => void;
    focus: () => any;
    blur: () => any;
    keyDown: (key: any) => any;
};
export declare const textTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isEllipsis: () => boolean;
    hasTitleAttribute: () => boolean;
    getFontFamily: () => string;
};
export declare const paginationTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    root: any;
    exists: () => boolean;
    simulate: any;
    getPageStrip: () => any;
    getPages: () => Element[];
    getPageLabels: () => string[];
    getPageByIndex: (idx?: number) => Element;
    getPageByNumber: (n: number) => Element;
    getCurrentPage: () => Element;
    getNavButton: (name: "first" | "last" | "previous" | "next") => Element;
    getPageInput: () => HTMLInputElement;
    getTotalPagesField: () => Element;
    clickNavButton: (name: "first" | "last" | "previous" | "next") => void;
    clickPage: (page: number) => void;
    changeInput: (newValue: string) => void;
    commitInput: () => void;
    blurInput: () => void;
    inputHasError: () => boolean;
};
export declare const badgeTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getType: () => any;
    getContent: () => any;
    getContentText: () => any;
};
export declare const tooltipTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    styles: {
        getBackgroundColor: () => string;
        getBorderWidth: () => string;
        getBorderStyle: () => string;
        getBorderColor: () => string;
        getBorderRadius: () => string;
        getContentPadding: () => string;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => any;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const dividerTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isVertical: () => boolean;
    textContent: () => any;
};
export declare const checkboxTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    element: () => any;
    exists: () => boolean;
    click: () => void;
    keyDown: (key: string) => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    mouseDown: () => any;
    focus: () => any;
    isChecked: () => boolean;
    isIndeterminate: () => boolean;
    isDisabled: () => boolean;
    children: () => Element;
    tickmark: () => Element;
    input: () => HTMLInputElement;
    hasErrorState: () => boolean;
    hasFocusState: () => boolean;
    hasReadOnlyState: () => boolean;
};
export declare const toggleSwitchTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    click: () => void;
    isChecked: () => any;
    isDisabled: () => any;
    getKnobIcon: () => any;
    hasKnobIcon: () => boolean;
    getId: () => any;
    getTabIndex: () => any;
    getRootStyles: () => CSSStyleDeclaration;
    getTrackStyles: () => CSSStyleDeclaration;
    getKnobStyles: () => CSSStyleDeclaration;
    getKnobIconStyles: () => CSSStyleDeclaration;
};
import { TextDriver } from "../components/StylableText/Text.driver";
export declare const stylableTextTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => TextDriver;
export { TextDriver };
import { ButtonDriver } from "../components/Button/Button.driver";
export declare const buttonTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => ButtonDriver;
export { ButtonDriver };
import { BadgeDriver as StylableBadgeDriver } from "../components/StylableBadge/Badge.driver";
export declare const stylableBadgeTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => StylableBadgeDriver;
export { StylableBadgeDriver };
export declare const radioButtonTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    select: () => any;
    value: () => string;
    name: () => string;
    isInputFocused: () => boolean;
    isRequired: () => boolean;
    iconExists: () => boolean;
    labelExists: () => boolean;
    isChecked: () => boolean;
    isFocused: () => boolean;
    isDisabled: () => boolean;
};
export declare const autocompleteTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    hasStyleState: (stateName: any) => boolean;
    getInput: () => any;
    getValue: () => any;
    getPlaceholder: () => any;
    getPrefix: () => any;
    getSuffix: () => any;
    isDisabled: () => any;
    setValue: (value: any) => void;
    focus: () => any;
    blur: () => any;
    keyDown: (key: any) => any;
} & {
    exists: () => boolean;
    getOptionsCount: () => any;
    getSelectedOptionsCount: () => number;
    optionAt: (index: number) => {
        exists: () => boolean;
        click: () => any;
        mouseEnter: () => any;
        className: () => any;
        isHovered: () => boolean;
        isSelected: () => boolean;
        isDisabled: () => boolean;
        getText: () => any;
        getElement: () => any;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => any;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const sliderTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    value: () => number;
    min: () => number;
    max: () => number;
    vertical: () => boolean;
    thumb: () => any;
    tooltip: () => any;
    ticks: () => any;
    track: () => any;
    rtl: () => boolean;
    root: () => any;
    mouseMove(value: any): void;
    mouseDown(): void;
    mouseUp(): void;
    focus(): void;
    blur(): void;
    arrowLeft(): void;
    arrowRight(): void;
    arrowUp(): void;
    arrowDown(): void;
    pageUp(): void;
    pageDown(): void;
    home(): void;
    end(): void;
    stubTrackBoundingRect(rect?: any): void;
    stubRootBoundingRect(rect?: any): void;
    getTrackBoundingRect(): any;
    getRootBoundingRect(): any;
    getThumbSize(): any;
    getOffsetByValue(value: any): number;
    change(value?: number): void;
    hoverThumb(): void;
    unhoverThumb(): void;
    dragThumb(offset: any): void;
    thumbTooltipValue(): any;
    clickTick(tickIdx: any): void;
    clickSlider(value: any): void;
    forceUpdate(): void;
};
export declare const addressInputTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    hasStyleState: (stateName: any) => boolean;
    getInput: () => any;
    getValue: () => any;
    getPlaceholder: () => any;
    getPrefix: () => any;
    getSuffix: () => any;
    isDisabled: () => any;
    setValue: (value: any) => void;
    focus: () => any;
    blur: () => any;
    keyDown: (key: any) => any;
} & {
    exists: () => boolean;
    getOptionsCount: () => any;
    getSelectedOptionsCount: () => number;
    optionAt: (index: number) => {
        exists: () => boolean;
        click: () => any;
        mouseEnter: () => any;
        className: () => any;
        isHovered: () => boolean;
        isSelected: () => boolean;
        isDisabled: () => boolean;
        getText: () => any;
        getElement: () => any;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => any;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const labelTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getLabelText: () => any;
    getId: () => any;
    getForAttribute: () => any;
    isDisabled: () => boolean;
    click: () => any;
    keyDown: (key: any) => any;
    hasEllipsis: () => boolean;
};
export declare const timePickerTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getInputElement: () => any;
    isDisabled: () => any;
    getInputType: () => any;
    getValue: () => any;
    keyDown: (key: any) => any;
    focus: () => any;
    blur: () => any;
    styles: {
        getRootDisplay: () => string;
        getBorderRadius: () => string;
    };
};
export declare const labelWithOptionsTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getOptionsCount: () => any;
    getSelectedOptionsCount: () => number;
    optionAt: (index: number) => {
        exists: () => boolean;
        click: () => any;
        mouseEnter: () => any;
        className: () => any;
        isHovered: () => boolean;
        isSelected: () => boolean;
        isDisabled: () => boolean;
        getText: () => any;
        getElement: () => any;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => any;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
} & {
    exists: () => boolean;
    getLabelText: () => any;
    getId: () => any;
    getForAttribute: () => any;
    isDisabled: () => boolean;
    click: () => any;
    keyDown: (key: any) => any;
    hasEllipsis: () => boolean;
} & {
    getSuffix: () => any;
    isRequired: () => boolean;
    isError: () => boolean;
    isDisabled: () => boolean;
    checkboxDriverAt: (index: number) => {
        element: () => any;
        exists: () => boolean;
        click: () => void;
        keyDown: (key: string) => any;
        mouseEnter: () => any;
        mouseLeave: () => any;
        mouseDown: () => any;
        focus: () => any;
        isChecked: () => boolean;
        isIndeterminate: () => boolean;
        isDisabled: () => boolean;
        children: () => Element;
        tickmark: () => Element;
        input: () => HTMLInputElement;
        hasErrorState: () => boolean;
        hasFocusState: () => boolean;
        hasReadOnlyState: () => boolean;
    };
};
import { ThumbnailDriver } from "../components/Thumbnail/Thumbnail.driver";
export declare const thumbnailTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => ThumbnailDriver;
export { ThumbnailDriver };
export declare const popoverTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => any;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const linkTestkitFactory: (obj: {
    wrapper: HTMLElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isAnchor: () => boolean;
    getAttribute: (attribute: any) => any;
    getChildren: () => any;
    trigger: (eventName: any, event?: {}) => any;
};
