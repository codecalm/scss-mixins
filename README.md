# Useful SCSS mixins

### `font-size($font-size[, $line-height])`

Usage:

```scss
h1 {
   @include font-size(60px, 68px);
   font-weight: 300;
}
```

Result:

```css
h1 {
   font-size: 3.75em; /* 60px */
   line-height: 1.13333em; /* 68px */
   font-weight: 300;
}
```

### `rtl`

Usage:

```scss
p {
	float: left;

	@include rtl {
		float: right;
	}

	@include rtl {
		a {
			color: #cc0000;
		}
	}
}

@include rtl {
	background: #cc0000;
}
```

Result:

```css
p {
   float: left;
}
  
html[dir="rtl"] p {
   float: right;
}

html[dir="rtl"] p a {
   color: #cc0000;
}

html[dir="rtl"] {
   background: #cc0000;
}
```

### `feature($name)`

Usage

```scss
.wrap {
   width: 100%;

   @include feature('page-boxed') {
      width: 990px;
   }
}

@include feature('page-boxed') {
   background: #fafafa;
}
```

Result:

```css
.wrap {
   width: 100%; 
}

body.page-boxed .wrap {
   width: 990px; 
}

body.page-boxed {
   background: #fafafa;
}
```
