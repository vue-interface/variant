declare const _default: {
    props: {
        /**
         * The generic component prefix.
         */
        componentPrefix: StringConstructor;
        /**
         * The variant name.
         */
        variant: StringConstructor;
        /**
         * The variant prefix. Should use to component prefix, unless the
         * variant prefix is different than the component prefix.
         */
        variantPrefix: StringConstructor;
    };
    computed: {
        /**
         * The computed variant class prefix.
         */
        variantClassPrefix(): string | undefined;
        /**
         * Determines if the variant already has the prefix.
         */
        hasVariantPrefix(): boolean;
        /**
         * The variant classes that get injected into the DOM.
         */
        variantClass(): string;
    };
};
export default _default;
