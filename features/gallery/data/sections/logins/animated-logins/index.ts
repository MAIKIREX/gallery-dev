
import type { Collection } from "../../../../types"
import { auroraLoginZodMotion } from "./aurora-login-zod-motion"
import { realnestSplitLogin } from "./realnest-split-login"
import { devwolfTiltLoginLight } from "./devwolf-tilt-login-light"
import { devwolfCarouselStepLogin } from "./devwolf-carousel-step-login"

export const animatedLogins: Collection = {
  id: "animated-logins",
  title: "Logins Animados",
  description: "Layouts responsive con validación y micro-interacciones",
  variants: [
    auroraLoginZodMotion,
    realnestSplitLogin,
    devwolfTiltLoginLight,
    devwolfCarouselStepLogin,
  ],
}
