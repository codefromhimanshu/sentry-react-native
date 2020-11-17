export { Breadcrumb, Request, SdkInfo, Event, Exception, Response, Severity, StackFrame, Stacktrace, Status, Thread, User, } from "@sentry/types";
export { addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, } from "@sentry/core";
export { Integrations as BrowserIntegrations, ErrorBoundary, withErrorBoundary, createReduxEnhancer, } from "@sentry/react";
import * as Integrations from "./integrations";
import { SDK_NAME, SDK_VERSION } from "./version";
export { ReactNativeBackend, ReactNativeOptions } from "./backend";
export { ReactNativeClient } from "./client";
export { init, setDist, setRelease, nativeCrash } from "./sdk";
export { TouchEventBoundary, withTouchEventBoundary } from "./touchevents";
export { Integrations, SDK_NAME, SDK_VERSION };
//# sourceMappingURL=index.d.ts.map