// Type definitions for cordova-plugin-statusbar
// Project: https://github.com/apache/cordova-plugin-statusbar
// Definitions by: Xinkai Chen <https://github.com/Xinkai>
//                 Tim Brust <https://github.com/timbru31>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
* Global object StatusBar.
*/
interface Window {
    StatusBar: StatusBar;
    addEventListener(type: "statusTap", listener: (ev: Event) => any, useCapture?: boolean): void;
}

/**
* The StatusBar object provides some functions to customize the iOS and Android StatusBar.
*/
interface StatusBar {
    /**
    * On iOS 7, make the statusbar overlay or not overlay the WebView.
    * 
    * @param isOverlay - On iOS 7, set to false to make the statusbar appear like iOS 6.
    *                    Set the style and background color to suit using the other functions.
    */
    overlaysWebView(isOverlay: boolean): void;

    /**
    * Use the default statusbar (dark text, for light backgrounds).
    */
    styleDefault(): void;

    /**
    * Use the lightContent statusbar (light text, for dark backgrounds).
    */
    styleLightContent(): void;

    /**
    * On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false,
    * you can set the background color of the statusbar by color name.
    *
    * @param color - Supported color names are:
    *                black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
    */
    backgroundColorByName(color: string): void;

    /**
    * Sets the background color of the statusbar by a hex string.
    *
    * @param color - CSS shorthand properties are also supported.
    *                On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you can set the background color of the statusbar by a hex string (#RRGGBB).
    *                On WP7 and WP8 you can also specify values as #AARRGGBB, where AA is an alpha value
    */
    backgroundColorByHexString(color: string): void;

    /**
    * Sets the background color of the navigationsbar by a hex string.
    */
    navigationBackgroundColorByHexString(color: string): void;

    /**
    * Hide the statusbar.
    */
    hide(): void;

    /**
    * Show the statusbar.
    */
    show(): void;

    /**
    * Get statusbar height
    */
    getStatusBarHeight(): number;

    /**
    * Get navigationbar height
    */
    getNavigationBarHeight(): number;

    /**
    * Read this property to see if the statusbar is visible or not.
    */
    isVisible: boolean;
}

declare var StatusBar: StatusBar;