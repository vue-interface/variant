# Variant

A mixin that adds contextual variations to components. This usually deals with
the color or the way a component is displayed. This mixin is inherited by many
components.

[[toc]]

## Installation

NPM

    npm i @vue-interface/variant --save

Yarn

    yard add @vue-interface/variant

## Options

### variant

- Type: `string`
- Default: `primary`

The default component variant.

### variantPrefix

- Type: `string`
- Default: `kebabCase(this.$options.name)`

The variant prefix. By default, the kebab component name is used.

### variantClass

- Type: `string`
- Default: `prefix(this.variant, this.variantPrefix)`

The prefixed variant value.