export { Severity, Status, } from "@sentry/types";
import { addGlobalEventProcessor } from "@sentry/core";
export { addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, } from "@sentry/core";
export { Integrations as BrowserIntegrations, ErrorBoundary, withErrorBoundary, createReduxEnhancer, } from "@sentry/react";
import * as Integrations from "./integrations";
import { SDK_NAME, SDK_VERSION } from "./version";
export { ReactNativeBackend } from "./backend";
export { ReactNativeClient } from "./client";
// eslint-disable-next-line deprecation/deprecation
export { init, setDist, setRelease, nativeCrash } from "./sdk";
export { TouchEventBoundary, withTouchEventBoundary } from "./touchevents";
/**
 * Adds the sdk info. Make sure this is called after @sentry/react's so this is the top-level SDK.
 */
function createReactNativeEventProcessor() {
    if (addGlobalEventProcessor) {
        addGlobalEventProcessor((event) => {
            event.platform = event.platform || "javascript";
            event.sdk = Object.assign(Object.assign({}, event.sdk), { name: SDK_NAME, packages: [
                    ...((event.sdk && event.sdk.packages) || []),
                    {
                        name: "npm:@sentry/react-native",
                        version: SDK_VERSION,
                    },
                ], version: SDK_VERSION });
            return event;
        });
    }
}
createReactNativeEventProcessor();
export { Integrations, SDK_NAME, SDK_VERSION };
//# sourceMappingURL=index.js.map