import NextAuth from "next-auth"
import { Subscription } from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      subscription?: Subscription | null
    }
  }

  interface User {
    id: string
    email: string
    name?: string | null
    subscription?: Subscription | null
  }
}
