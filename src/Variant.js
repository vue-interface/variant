export default {

    props: {
        
        /**
         * The variant name.
         *
         * @param {String} [variant=primary]
         */
        variant: {
            type: String,
            default: 'primary'
        },

        /**
         * The variant prefix.
         *
         * @param {String}
         */
        variantPrefix: {
            type: String,
            default() {
                return this.$options.name;
            }
        }

    },

    computed: {

        /**
         * The computed variant class prefix.
         *
         * @param {String}
         */
        variantClassPrefix() {
            return this.variantPrefix;
        },

        /**
         * The computed variant class name.
         *
         * @param {String}
         */
        variantClass() {
            return `${this.variant && this.variantClassPrefix && `${this.variantClassPrefix}-`}${this.variant}`;
        }

    }

};
