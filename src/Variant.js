import { prefix } from '@vue-interface/utils';
import kebabCase from 'lodash.kebabcase';

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
                return kebabCase(this.$options.name);
            }
        }

    },

    computed: {

        /**
         * The computed variant class name.
         *
         * @param {String}
         */
        variantClass() {
            return prefix(this.variant, this.variantPrefix);
        }

    }

};
