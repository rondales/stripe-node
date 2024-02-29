// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      /**
       * A feature represents a monetizable ability or functionality in your system.
       * Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
       */
      interface Feature {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'entitlements.feature';

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * A unique key you provide as your own system identifier. This may be up to 80 characters.
         */
        lookup_key: string;

        /**
         * The feature's name, for your own purpose, not meant to be displayable to the customer.
         */
        name: string;
      }
    }
  }
}