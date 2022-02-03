var Variant = {
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    variantPrefix: {
      type: String,
      default() {
        return this.$options.name;
      }
    }
  },
  computed: {
    variantClassPrefix() {
      return this.variantPrefix;
    },
    variantClass() {
      return `${this.variantClassPrefix && `${this.variantClassPrefix}-`}${this.variant}`;
    }
  }
};
export { Variant };
