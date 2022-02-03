export default {

    props: {
        
        /**
         * The variant name.
         *
         * @param {String} [variant=primary]
         */
        variant: String,

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
            if(!this.variant || !this.variantClassPrefix) {
                return '';
            }

            return `${this.variantClassPrefix}-${this.variant}`;
        }

    }

};
