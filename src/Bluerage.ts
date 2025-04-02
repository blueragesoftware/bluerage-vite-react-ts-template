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

export class Bluerage {
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
  }
}
