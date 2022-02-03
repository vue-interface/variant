var Variant = {
  props: {
    variant: String,
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
      if (!this.variant || !this.variantClassPrefix) {
        return "";
      }
      return `${this.variantClassPrefix}-${this.variant}`;
    }
  }
};
export { Variant };
