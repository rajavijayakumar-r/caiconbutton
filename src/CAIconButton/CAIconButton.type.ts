
type Type = "cta" | "primary" | "secondary" | "negative" | "success" | "contrastCta" | "contrastPrimary"
type Size = "el" | "l" | "m" | "s"
export type State = "default" | "hover" | "active" | "disable"

interface SizeProperties {
    height: BorderRadius;
    iconSize: BorderRadius;
    paddingLeft: BorderRadius;
    paddingRight: BorderRadius;
    paddingTop: BorderRadius;
    paddingBottom: BorderRadius;
    borderRadius: BorderRadius;
    borderWidth: BorderRadius;
}

interface TypeProperties {
    default: StateColorProperties;
    hover: StateColorProperties;
    active: StateColorProperties;
    disable: StateColorProperties;
}

interface StateColorProperties {
    backgroundColor: ColorProperties;
    textColor: ColorProperties;
    borderColor: ColorProperties;
    iconColor: ColorProperties;
}

interface ColorProperties {
    value: string;
    type: ColorType;
}

enum ColorType {
    Color = 'color'
}

interface BorderRadius {
    value: number;
    type: BorderRadiusType;
}

enum BorderRadiusType {
    BorderRadius = "borderRadius",
    BorderWidth = "borderWidth",
    FontSizes = "fontSizes",
    Sizing = "sizing",
    Spacing = "spacing",
}

export interface IconStyle {
    s: SizeProperties;
    m: SizeProperties;
    l: SizeProperties;
    el: SizeProperties;
    cta: TypeProperties;
    primary: TypeProperties;
    secondary: TypeProperties;
    negative: TypeProperties;
    success: TypeProperties;
    contrastCta: TypeProperties;
    contrastPrimary: TypeProperties;
}

export interface CAIconButtonProps {
    readonly theme: Object;
    readonly size?: Size;
    readonly type?: Type;
    readonly state?: State;
    callback: () => void;
}

export interface StyleObject {
    theme: IconStyle;
    size: Size;
    state: State;
    type: Type;
}