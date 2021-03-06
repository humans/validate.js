---
pageClass: p-available-validation-rules
sidebar:
---



# Available Validation Rules

::: warning Documentation Notes

For now, I’m directly copying the [Laravel’s validation rules](<https://laravel.com/docs/5.7/validation>) descriptions. It’s much more familiar and better written.

:::

[[toc]]

## ~~between~~

The field under validation must have a size between the given *min* and *max*. Strings, numerics, arrays, and files are evaluated in the same fashion as the [`size`](#size) rule.

```javascript
{ age: 'between:18,24' }
```

The `Rule.between` method may be used to for readability.

```javascript
import { Validator, Rule } from '@artisanstudio/validate.js'

new Validator({
  age: ['required', Rule.between(18, 24)]
})
```

## email

The field under validation must be formatted as an e-mail address.

## ~~file~~

The field under validation must be an instance of the [File class](<https://developer.mozilla.org/en-US/docs/Web/API/File>).

## ~~in~~

The field under validation must be included in the given list of values. 

```javascript
{ 'type': 'in:task,note,event' }
```

Since this rule often requires you to `split` an array, the `Rule.in` method may be used to fluently construct the rule:

```javascript
{
  'type': ['required', Rule.in(['task', 'note', 'event'])]
}
```

## ~~max~~

The field under validation must be less than or equal to a maximum *value*. Strings, numerics, arrays, and files are evaluated in the same fashion as the [`size`](#size) rule.

## ~~mimetypes~~

The file under validation must match one of the given MIME types:

```javascript
{ 
  'video': 'mimetypes:video/avi,video/mpeg,video/quicktime' 
}
```

## ~~mimes~~

The file under validation must have a MIME type corresponding to one of the listed extensions.

#### Basic Usage of MIME Rule

```javascript
{ 
  'photo': 'mimes:jpeg,bmp,png' 
}
```

Even though you only need to specify the extensions, this rule uses the `File` class to guess the mimetype from the provided extensions in the rule.

## min

The field under validation must have a minimum *value*. Strings, numerics, arrays, and files are evaluated in the same fashion as the [`size`](#size) rule.

## ~~not_in~~

The field under validation must not be included in the given list of values. 

```javascript
{ 
  'coffee': 'not_in:espresso,americano' 
}
```

The `Rule.notIn` method may be used to fluently construct the rule:

```javascript
import { Rule, Validator } from '@artisanstudio/validate.js'

new Validator({
  'coffee': [
    'required',
    Rule.notIn(['sprinkles', 'cherries']),
  ],
});
```

## required

The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:

- The value is `null`.
- The value is `undefined`.
- The value is an empty string.

## ~~string~~

The field under validation must be a string. This will strictly check against the data’s type with `typeof`:

```javascript
let validator = new Validator({ 
  mobile: 'string'
})

validator.passes({ mobile: 8675309 })
// => false

validator.passes({ mobile:"8675309" })
// => true
```

## ~~size~~

The field under validation must have a size matching the given *value*. 

- For string data, *value* corresponds to the number of characters. 
- For numeric data, *value* corresponds to a given integer value. 
- For an array, *size* corresponds to the `count` of the array. 
- For files, *size*corresponds to the file size in kilobytes.

## ~~url~~

The field under validation must be a valid URL.