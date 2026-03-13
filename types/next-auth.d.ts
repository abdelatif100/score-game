import { type DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `auth`, contains the session data.
   */
  interface Session {
    user: {
      /** The user's approval status in the store. */
      isApproved: boolean
    } & DefaultSession["user"]
  }

  interface User {
    isApproved: boolean
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    isApproved: boolean
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    isApproved: boolean
  }
}
