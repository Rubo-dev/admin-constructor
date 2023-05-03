export interface IComponent {
  id: string;
  componentRef: string;
  styles?: any;
  props?: any;
  text?: string;
}

export interface DomElement {
  tagName: string;
  display: boolean;
  type?: string;
  attributes?: any[];
  innerText?: string;
}

export interface MenuItems {
  menuName: string;
  icon: string;
}

export interface ButtonConfigs extends Resolutions {
  color: string;
  backgroundColor: string;
  padding: string;
}

export interface Resolutions {
  width: string;
  height: string;
}

export interface ListConfigs extends ListStyles {
  headerText: string;
  inputItems: [];
}

export interface ListStyles {
  backgroundColor: string;
}

export interface FontFamilies {
  fontName: string;
}
export interface TextareaStylesConfigs {
  fontSize: string;
  fontWeight: string;
  fontFamily: { name: string; code: string };
  color: string;
  backgroundColor: string;
}
