import { z } from "zod";

export const OfferSchema = z.object({
  CONFIDENCE: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, { message: "Confidence must be between 0 and 100 as a string" }),
  
  json: z.object({
    trigger: z.object({
      products: z.array(z.string()),
      collections: z.array(z.string()),
      tags: z.array(z.string()),
    }),
    triggerSource: z.enum(["specificProducts", "cartValue", "allProducts"]),
    triggerPage: z.string(),
    funnelName: z.string(),
    upsells: z.array(z.object({
      page: z.enum(["productPage", "cartPage", "collectionPage", "homePage"]),
      behaviour: z.literal("upsell"),
      upsellSettings: z.object({
        widgetSpecific: z.object({
          fbt: z.object({
            includeTriggerProductInFbt: z.boolean(),
          }),
        }),
        general: z.object({
          upsellStyle: z.enum(["inpage", "popup"]),
          requireSourceProduct: z.boolean(),
          rejectButtonBehaviour: z.literal("continueShopping"),
        }),
        translations: z.object({
          checkoutBtnText: z.literal("Checkout"),
        }),
      }),
      offers: z.array(z.object({
        minQty: z.literal(1),
        discount: z.object({
          dValue: z.string(), // You could refine this to check for number-like strings
          dType: z.enum(["%Off", "fixed"]),
        }),
        mostPopular: z.boolean(),
        upgrade: z.boolean(),
        offerEligibleVariants: z.array(z.any()),
        products: z.array(z.any()),
      })),
      downsell: z.array(z.any()),
      upsellType: z.enum(["normal"]),
    })),
  }),
});
