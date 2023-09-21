// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * ConfirmationTokens help transport client side data collected by Stripe JS over
     * to your server for confirming a PaymentIntent or SetupIntent. If the confirmation
     * is successful, values present on the ConfirmationToken are written onto the Intent.
     */
    interface ConfirmationToken {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'confirmation_token';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. This is set to null once this ConfirmationToken has been used.
       */
      expires_at: number | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Data used for generating a Mandate.
       */
      mandate_data: ConfirmationToken.MandateData | null;

      /**
       * ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
       */
      payment_intent: string | null;

      /**
       * ID of an existing PaymentMethod.
       */
      payment_method: string | Stripe.PaymentMethod | null;

      /**
       * Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken.
       */
      payment_method_preview: ConfirmationToken.PaymentMethodPreview | null;

      /**
       * Return URL used to confirm the Intent.
       */
      return_url: string | null;

      /**
       * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
       *
       * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
       */
      setup_future_usage?: ConfirmationToken.SetupFutureUsage | null;

      /**
       * ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
       */
      setup_intent: string | null;

      /**
       * Shipping information collected on this ConfirmationToken.
       */
      shipping: ConfirmationToken.Shipping | null;
    }

    namespace ConfirmationToken {
      interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData.CustomerAcceptance;
      }

      namespace MandateData {
        interface CustomerAcceptance {
          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online: CustomerAcceptance.Online | null;

          /**
           * The type of customer acceptance information included with the Mandate.
           */
          type: string;
        }

        namespace CustomerAcceptance {
          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address: string | null;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent: string | null;
          }
        }
      }

      interface PaymentMethodPreview {
        acss_debit?: PaymentMethodPreview.AcssDebit;

        affirm?: PaymentMethodPreview.Affirm;

        afterpay_clearpay?: PaymentMethodPreview.AfterpayClearpay;

        alipay?: PaymentMethodPreview.Alipay;

        au_becs_debit?: PaymentMethodPreview.AuBecsDebit;

        bacs_debit?: PaymentMethodPreview.BacsDebit;

        bancontact?: PaymentMethodPreview.Bancontact;

        billing_details: PaymentMethodPreview.BillingDetails;

        blik?: PaymentMethodPreview.Blik;

        boleto?: PaymentMethodPreview.Boleto;

        card?: PaymentMethodPreview.Card;

        card_present?: PaymentMethodPreview.CardPresent;

        cashapp?: PaymentMethodPreview.Cashapp;

        customer_balance?: PaymentMethodPreview.CustomerBalance;

        eps?: PaymentMethodPreview.Eps;

        fpx?: PaymentMethodPreview.Fpx;

        giropay?: PaymentMethodPreview.Giropay;

        grabpay?: PaymentMethodPreview.Grabpay;

        ideal?: PaymentMethodPreview.Ideal;

        interac_present?: PaymentMethodPreview.InteracPresent;

        klarna?: PaymentMethodPreview.Klarna;

        konbini?: PaymentMethodPreview.Konbini;

        link?: PaymentMethodPreview.Link;

        oxxo?: PaymentMethodPreview.Oxxo;

        p24?: PaymentMethodPreview.P24;

        paynow?: PaymentMethodPreview.Paynow;

        paypal?: PaymentMethodPreview.Paypal;

        pix?: PaymentMethodPreview.Pix;

        promptpay?: PaymentMethodPreview.Promptpay;

        sepa_debit?: PaymentMethodPreview.SepaDebit;

        sofort?: PaymentMethodPreview.Sofort;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodPreview.Type;

        us_bank_account?: PaymentMethodPreview.UsBankAccount;

        wechat_pay?: PaymentMethodPreview.WechatPay;

        zip?: PaymentMethodPreview.Zip;
      }

      namespace PaymentMethodPreview {
        interface AcssDebit {
          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Institution number of the bank account.
           */
          institution_number: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * Transit number of the bank account.
           */
          transit_number: string | null;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        interface AuBecsDebit {
          /**
           * Six-digit number identifying bank and branch associated with this bank account.
           */
          bsb_number: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;
        }

        interface BacsDebit {
          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code: string | null;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address: Stripe.Address | null;

          /**
           * Email address.
           */
          email: string | null;

          /**
           * Full name.
           */
          name: string | null;

          /**
           * Billing phone number (including extension).
           */
          phone: string | null;
        }

        interface Blik {}

        interface Boleto {
          /**
           * Uniquely identifies the customer tax id (CNPJ or CPF)
           */
          tax_id: string;
        }

        interface Card {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string;

          /**
           * Checks on Card address and CVC if provided.
           */
          checks: Card.Checks | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint?: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string;

          /**
           * Contains information about card networks that can be used to process the payment.
           */
          networks: Card.Networks | null;

          /**
           * Contains details on how this Card may be used for 3D Secure authentication.
           */
          three_d_secure_usage: Card.ThreeDSecureUsage | null;

          /**
           * If this Card is part of a card wallet, this contains the details of the card wallet.
           */
          wallet: Card.Wallet | null;
        }

        namespace Card {
          interface Checks {
            /**
             * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_line1_check: string | null;

            /**
             * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_postal_code_check: string | null;

            /**
             * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            cvc_check: string | null;
          }

          interface Networks {
            /**
             * All available networks for the card.
             */
            available: Array<string>;

            /**
             * The preferred network for the card.
             */
            preferred: string | null;
          }

          interface ThreeDSecureUsage {
            /**
             * Whether 3D Secure is supported on this card.
             */
            supported: boolean;
          }

          interface Wallet {
            amex_express_checkout?: Wallet.AmexExpressCheckout;

            apple_pay?: Wallet.ApplePay;

            /**
             * (For tokenized numbers only.) The last four digits of the device account number.
             */
            dynamic_last4: string | null;

            google_pay?: Wallet.GooglePay;

            link?: Wallet.Link;

            masterpass?: Wallet.Masterpass;

            samsung_pay?: Wallet.SamsungPay;

            /**
             * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
             */
            type: Wallet.Type;

            visa_checkout?: Wallet.VisaCheckout;
          }

          namespace Wallet {
            interface AmexExpressCheckout {}

            interface ApplePay {}

            interface GooglePay {}

            interface Link {}

            interface Masterpass {
              /**
               * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              billing_address: Stripe.Address | null;

              /**
               * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              email: string | null;

              /**
               * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              name: string | null;

              /**
               * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              shipping_address: Stripe.Address | null;
            }

            interface SamsungPay {}

            type Type =
              | 'amex_express_checkout'
              | 'apple_pay'
              | 'google_pay'
              | 'link'
              | 'masterpass'
              | 'samsung_pay'
              | 'visa_checkout';

            interface VisaCheckout {
              /**
               * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              billing_address: Stripe.Address | null;

              /**
               * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              email: string | null;

              /**
               * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              name: string | null;

              /**
               * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              shipping_address: Stripe.Address | null;
            }
          }
        }

        interface CardPresent {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string | null;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Contains information about card networks that can be used to process the payment.
           */
          networks: CardPresent.Networks | null;

          /**
           * How card details were read in this transaction.
           */
          read_method: CardPresent.ReadMethod | null;
        }

        namespace CardPresent {
          interface Networks {
            /**
             * All available networks for the card.
             */
            available: Array<string>;

            /**
             * The preferred network for the card.
             */
            preferred: string | null;
          }

          type ReadMethod =
            | 'contact_emv'
            | 'contactless_emv'
            | 'contactless_magstripe_mode'
            | 'magnetic_stripe_fallback'
            | 'magnetic_stripe_track2';
        }

        interface Cashapp {
          /**
           * A unique and immutable identifier assigned by Cash App to every buyer.
           */
          buyer_id: string | null;

          /**
           * A public identifier for buyers using Cash App.
           */
          cashtag: string | null;
        }

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
           */
          bank: Eps.Bank | null;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type, if provided. Can be one of `individual` or `company`.
           */
          account_holder_type: Fpx.AccountHolderType | null;

          /**
           * The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
           */
          bank: Ideal.Bank | null;

          /**
           * The Bank Identifier Code of the customer's bank, if the bank was provided.
           */
          bic: Ideal.Bic | null;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'n26'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';

          type Bic =
            | 'ABNANL2A'
            | 'ASNBNL21'
            | 'BITSNL2A'
            | 'BUNQNL2A'
            | 'FVLBNL22'
            | 'HANDNL2A'
            | 'INGBNL2A'
            | 'KNABNL2H'
            | 'MOYONL21'
            | 'NTSBDEB1'
            | 'RABONL2U'
            | 'RBRBNL21'
            | 'REVOIE23'
            | 'REVOLT21'
            | 'SNSBNL2A'
            | 'TRIONL2U';
        }

        interface InteracPresent {
          /**
           * Card brand. Can be `interac`, `mastercard` or `visa`.
           */
          brand: string | null;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Contains information about card networks that can be used to process the payment.
           */
          networks: InteracPresent.Networks | null;

          /**
           * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
           */
          preferred_locales: Array<string> | null;

          /**
           * How card details were read in this transaction.
           */
          read_method: InteracPresent.ReadMethod | null;
        }

        namespace InteracPresent {
          interface Networks {
            /**
             * All available networks for the card.
             */
            available: Array<string>;

            /**
             * The preferred network for the card.
             */
            preferred: string | null;
          }

          type ReadMethod =
            | 'contact_emv'
            | 'contactless_emv'
            | 'contactless_magstripe_mode'
            | 'magnetic_stripe_fallback'
            | 'magnetic_stripe_track2';
        }

        interface Klarna {
          /**
           * The customer's date of birth, if provided.
           */
          dob: Klarna.Dob | null;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number | null;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year of birth.
             */
            year: number | null;
          }
        }

        interface Konbini {}

        interface Link {
          /**
           * Account owner's email address.
           */
          email: string | null;

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           */
          persistent_token?: string;
        }

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank, if provided.
           */
          bank: P24.Bank | null;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {
          /**
           * Uniquely identifies this particular PayPal account. You can use this attribute to check whether two PayPal accounts are the same.
           */
          fingerprint?: string | null;

          /**
           * Owner's email. Values are provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          payer_email: string | null;

          /**
           * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
           */
          payer_id: string | null;

          /**
           * Owner's verified email. Values are verified or provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_email?: string | null;
        }

        interface Pix {}

        interface Promptpay {}

        interface SepaDebit {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Branch code of bank associated with the bank account.
           */
          branch_code: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Information about the object that generated this PaymentMethod.
           */
          generated_from: SepaDebit.GeneratedFrom | null;

          /**
           * Last four characters of the IBAN.
           */
          last4: string | null;
        }

        namespace SepaDebit {
          interface GeneratedFrom {
            /**
             * The ID of the Charge that generated this PaymentMethod, if any.
             */
            charge: string | Stripe.Charge | null;

            /**
             * The ID of the SetupAttempt that generated this PaymentMethod, if any.
             */
            setup_attempt: string | Stripe.SetupAttempt | null;
          }
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;
        }

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'card'
          | 'card_present'
          | 'cashapp'
          | 'customer_balance'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'interac_present'
          | 'klarna'
          | 'konbini'
          | 'link'
          | 'oxxo'
          | 'p24'
          | 'paynow'
          | 'paypal'
          | 'pix'
          | 'promptpay'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type: UsBankAccount.AccountHolderType | null;

          /**
           * Account number of the bank account.
           */
          account_number?: string | null;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type: UsBankAccount.AccountType | null;

          /**
           * The name of the bank.
           */
          bank_name: string | null;

          /**
           * The ID of the Financial Connections Account used to create the payment method.
           */
          financial_connections_account?: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * Contains information about US bank account networks that can be used.
           */
          networks: UsBankAccount.Networks | null;

          /**
           * Routing number of the bank account.
           */
          routing_number: string | null;

          /**
           * Contains information about the future reusability of this PaymentMethod.
           */
          status_details?: UsBankAccount.StatusDetails | null;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';

          interface Networks {
            /**
             * The preferred network.
             */
            preferred: string | null;

            /**
             * All supported networks.
             */
            supported: Array<Networks.Supported>;
          }

          namespace Networks {
            type Supported = 'ach' | 'us_domestic_wire';
          }

          interface StatusDetails {
            blocked?: StatusDetails.Blocked;
          }

          namespace StatusDetails {
            interface Blocked {
              /**
               * The ACH network code that resulted in this block.
               */
              network_code: Blocked.NetworkCode | null;

              /**
               * The reason why this PaymentMethod's fingerprint has been blocked
               */
              reason: Blocked.Reason | null;
            }

            namespace Blocked {
              type NetworkCode =
                | 'R02'
                | 'R03'
                | 'R04'
                | 'R05'
                | 'R07'
                | 'R08'
                | 'R10'
                | 'R11'
                | 'R16'
                | 'R20'
                | 'R29'
                | 'R31';

              type Reason =
                | 'bank_account_closed'
                | 'bank_account_frozen'
                | 'bank_account_invalid_details'
                | 'bank_account_restricted'
                | 'bank_account_unusable'
                | 'debit_not_authorized';
            }
          }
        }

        interface WechatPay {}

        interface Zip {}
      }

      type SetupFutureUsage = 'off_session' | 'on_session';

      interface Shipping {
        address: Stripe.Address;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone: string | null;
      }
    }
  }
}
