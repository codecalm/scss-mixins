# Useful SCSS mixins

## `font-size`

Usage:

```scss
h1 {
	@include font-size(60px, 68px);
	font-weight: 300;
}
```

Result:

```
h1 {
	font-size: 3.75em; /* 60px */
	line-height: 1.13333em; /* 68px */
	font-weight: 300;
}
```
