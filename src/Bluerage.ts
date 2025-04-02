declare global {
  interface Window {
    Bluerage: {
      WebApp: {
        MiniAppInit?: (data: any) => void;
      };
      WebView: {
        onEvent: (event: string, callback: (eventData: any) => void) => void;
      };
    };
    BluerageWebViewProxy?: {
      postEvent: (eventName: string, eventData: any) => void;
    };
  }
}

export interface SafeAreaInsets {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

type SafeAreaInsetsCallback = (insets: SafeAreaInsets) => void;

export class Bluerage {
  private static safeAreaInsets: SafeAreaInsets = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  private static safeAreaCallbacks: Set<SafeAreaInsetsCallback> = new Set();

  static init() {
    if (!window.Bluerage?.WebView) {
      console.error('Bluerage WebView is not initialized');
      return;
    }

    const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const requestPayload = { request_id: requestId };

    if (window.BluerageWebViewProxy?.postEvent) {
      window.BluerageWebViewProxy.postEvent('MiniAppInit', requestPayload);
      return;
    }

    if (window.Bluerage?.WebApp?.MiniAppInit) {
      window.Bluerage.WebApp.MiniAppInit(requestPayload);
    }

    // Set up safe area insets handler
    window.Bluerage.WebView.onEvent('receiveEvent', (eventData: any) => {
      if (eventData?.type === 'MiniAppDidUpdateConfig' && eventData.data?.safe_area_insets) {
        const insets = eventData.data.safe_area_insets;
        Bluerage.safeAreaInsets = {
          top: Number(insets.top) || 0,
          left: Number(insets.left) || 0,
          right: Number(insets.right) || 0,
          bottom: Number(insets.bottom) || 0
        };
        // Notify all callbacks
        Bluerage.safeAreaCallbacks.forEach(callback => callback(Bluerage.safeAreaInsets));
      }
    });
  }

  static getSafeAreaInsets(): SafeAreaInsets {
    return { ...Bluerage.safeAreaInsets };
  }

  static onSafeAreaInsetsChange(callback: SafeAreaInsetsCallback): () => void {
    Bluerage.safeAreaCallbacks.add(callback);
    // Immediately call with current value
    callback(Bluerage.safeAreaInsets);
    // Return cleanup function
    return () => Bluerage.safeAreaCallbacks.delete(callback);
  }
}
