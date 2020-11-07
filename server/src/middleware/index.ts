import { FBAuth } from "./firebase-auth";
import { apiRateLimiter } from "./rate-limit";

export const middleware = { apiRateLimiter, FBAuth };
