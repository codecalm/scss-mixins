# Useful SCSS mixins

#### `font-size($font-size[, $line-height: false])`

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

#### `rtl`

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

#### `feature($name)`

Usage:

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

#### `clearfix([$extend: true])`

Usage:

```scss
.grid {
   @include clearfix;
}

footer {
   @include clearfix;
}

.gallery {
   @include clearfix(false);
}
```

Result:

```css
.grid::after,
footer::after {
   clear: both;
   content: "";
   display: table;
}

.gallery::after {
   clear: both;
   content: "";
   display: table;
}
```

### `media-query($from[, $and: false])`

Usage:

```scss
.container {
   width: 100%;

   @include mq(tablet) {
      width: 740px;
   }

   @include mq(desktop, print) {
      width: 980px;
   }

   @include mq(wide) {
      width: 1300px;
   }
}
```

Result:

```css
.container {
   width: 100%;
}

@media (min-width: 37em) {
   .container {
      width: 740px;
   }
}

@media (min-width: 49em) and print {
   .container {
      width: 980px;
   }
}

@media (min-width: 65em) {
   .container {
      width: 1300px;
   }
}
```

### `ellipsis([$width: 100%])`

Usage:

```scss
strong.w150 {
   color: #cc0000;

   @include ellipsis(150px);
}
```

Result:

```css
strong.w150 {
   color: #cc0000;
   display: inline-block;
   max-width: 150px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}
```
