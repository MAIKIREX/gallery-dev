
import type { Collection } from "../../../../types"
import { basicPricing } from "./basic-pricing"
import { featuredPricing } from "./featured-pricing"
import { comparisonPricing } from "./comparison-pricing"

export const pricingCards: Collection = {
  id: "pricing-cards",
  title: "Pricing Cards",
  description: "Pricing plan cards for subscriptions and services",
  variants: [
    basicPricing,
    featuredPricing,
    comparisonPricing,
  ],
}
