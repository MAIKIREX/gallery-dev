
import type { Collection } from "../../../../types"
import { simpleProfile } from "./simple-profile"
import { profileWithStats } from "./profile-with-stats"
import { profileWithActions } from "./profile-with-actions"
import { profileWave } from "./profile-wave"
import { profileMinimalGlass } from "./profile-minimal-glass"
import { profileDarkPremium } from "./profile-dark-premium"
import { profileEditorialSoft } from "./profile-editorial-soft"
import { profileSophieLight } from "./profile-sophie-light"
import { profileSophieGlassLight } from "./profile-sophie-glass-light"
import { profileSophieGlassDark } from "./profile-sophie-glass-dark"
import { candidateFullscreen } from "./candidate-fullscreen"
import { profileConnectingAddMember } from "./profile-connecting-add-member"

export const profileCards: Collection = {
  id: "profile-cards",
  title: "Profile Cards",
  description: "User profile cards with avatars and information",
  variants: [
    simpleProfile,
    profileWithStats,
    profileWithActions,
    profileWave,
    profileMinimalGlass,
    profileDarkPremium,
    profileEditorialSoft,
    profileSophieLight,
    profileSophieGlassLight,
    profileSophieGlassDark,
    candidateFullscreen,
    profileConnectingAddMember,
  ],
}
