[![Build Status](https://travis-ci.org/yc-ionic/u-share.svg?branch=master)](https://travis-ci.org/yc-ionic/u-share.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-ionic/u-share/badge.svg?branch=master)](https://coveralls.io/github/yc-ionic/u-share?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# @yci/u-share

## Installation

1. Install the cordova plugin
> [https://github.com/yccp/cordova-plugin-u-share](https://github.com/yccp/cordova-plugin-u-share)

2. Install the Ionic plugin
```
 npm i -S @yci/u-share
```

3. Add it to your app’s NgModule.

```typescript
// Import your library
import { UShareModule } from '@yci/u-share';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    UShareModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its service in your Angular application:

```ts
import { UShare } from '@yci/u-share';

constructor(uShare: UShare) {
  // ...
  const res = await uShare.share({
    image: 'https://xxx.png', // 缩略图 必须为https协议
    url: 'http://xxx.xxx/xxx', // 链接
    title: 'xxx', // 标题
    desc: 'xxx' // 简介Ï
  })
}
```

## Methods
```ts
share(options: IUShareOptions): Promise<boolean>;
```

## Interfaces
```ts
export interface IUShareOptions {
  image: string; // 缩略图 必须为https协议
  url: string; // 链接
  title: string; // 标题
  desc: string; // 简介
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)

