export default {

    props: {
        
        /**
         * The variant name
         *
         * @param {String} [variant=primary]
         */
        variant: {
            type: String,
            default: 'primary'
        },

        /**
         * The variant prefix
         *
         * @alias color
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
            return `${this.variantClassPrefix && `${this.variantClassPrefix}-`}${this.variant}`;
        }

    }

};
