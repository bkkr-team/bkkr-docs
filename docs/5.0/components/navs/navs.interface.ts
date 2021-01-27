export type NavButtonLayout = 'icon-top' | 'icon-start' | 'icon-end' | 'icon-bottom' | 'icon-hide' | 'label-hide';

export interface NavBarChangedEventDetail {
    nav?: string;
}

export interface NavButtonClickEventDetail {
    tab: string;
    selected: boolean;
    href?: string;
}