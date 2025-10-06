// symbols
export const layoutKey = "_layout_";

// interfaces
export interface ILayout {
  header: {
    height: string;
  };
  leftDrawer: {
    isOpen: boolean;
    maxWidth: string;
    minWidth: string;
    width: string;
    isFixed: boolean;
  };
}
