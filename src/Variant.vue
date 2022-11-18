<script lang="ts">
export default {

    props: {

        /**
         * The generic component prefix.
         */
        componentPrefix: String,
        
        /**
         * The variant name.
         */
        variant: String,

        /**
         * The variant prefix. Should use to component prefix, unless the
         * variant prefix is different than the component prefix.
         */
        variantPrefix: String

    },

    computed: {

        /**
         * The computed variant class prefix.
         */
        variantClassPrefix(): string|undefined {
            return this.variantPrefix || this.componentPrefix;
        },
        
        /**
         * Determines if the variant already has the prefix.
         */
        hasVariantPrefix(): boolean {
            if(this.variant === undefined) {
                return false;
            }

            return !!this.variant.match(
                new RegExp(`^${this.variantClassPrefix}`)
            );
        },

        /**
         * The variant classes that get injected into the DOM.
         */
        variantClass(): string {
            // If there is no variant just return an empty string.
            if(!this.variant) {
                return '';
            }

            // If there is no variant prefix or the variant already had the
            // prefix, then return the variant as-is.
            if(!this.variantClassPrefix || this.hasVariantPrefix) {
                return this.variant;
            }

            // Otherwise prefix the variant.
            return `${this.variantClassPrefix}-${this.variant}`;
        }

    }

};
</script>