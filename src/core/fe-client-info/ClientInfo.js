export class ClientInfo {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    isMobile() {
        return this._width < 700
    }

    isPortraitTablet() {
        return this._width >= 700 && this._Width < 800
    }

    isLandscapeTablet() {
        return this._width >= 700 && this._width < 1200
    }

    getViewportWidth() {
        return this._width
    }

    getViewportHeight() {
        return this._height
    }

    isCordova() {
        return !!process.env.CORDOVA
    }

    isAndroid() {
        return /Android/i.test(navigator.userAgent)
    }

    isIOS() {
        return /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent)
    }

    isIE() {
        // MSIE for IE version 1-10, Trident for IE 11 to above
        return /MSIE/i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent)
    }


    isSafari() {
        // NOTE: Please beware of chrome browser in iOS
        return navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && !navigator.userAgent.match('CriOS')
    }

    isIpad() {
        return this.isIOS() && (this.isPortraitTablet() || this.isLandscapeTablet())
    }

    isTabletApp() {
        return this.isCordova() && (this.isPortraitTablet() || this.isLandscapeTablet())
    }
}

export function getClientInfo() {
    return new ClientInfo(window.innerWidth, window.innerHeight)
}

export function onClientInfoUpdate(listener) {
    window.addEventListener('resize', listener, false)
    return () => {
        window.removeEventListener('resize', listener, false)
    }
}
