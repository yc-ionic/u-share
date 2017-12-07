[![Build Status](https://travis-ci.org/yc-ionic/image.svg?branch=master)](https://travis-ci.org/yc-ionic/image.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-ionic/image/badge.svg?branch=master)](https://coveralls.io/github/yc-ionic/image?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# @yci/image

## Installation

1. Install the Ionic plugin
```
 npm i -S @yci/image
```

2. Add it to your app’s NgModule.

```typescript
// Import your library
import { ImageModule } from '@yci/image';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    ImageModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its component in your Angular application:

```xml
<yci-image src="xxx.png"></yci-image>
```

## Inputs
```ts
@Input() src: string;
@Input() ratio: number = 1; // height = width * ratio
@Input() width: string = '100%';
@Input('oss-style') style: string; // aliyun oss style
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)

