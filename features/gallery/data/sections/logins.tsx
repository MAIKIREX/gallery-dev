import type { Section } from "../../types"
import { animatedLogins } from "./logins/animated-logins"

export const loginsSection: Section = {
  id: "logins",
  name: "Login",
  collections: [
    animatedLogins,
  ],
}