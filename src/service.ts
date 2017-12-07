import { Injectable } from '@angular/core';
import { CordovaPlugin, Method } from './decorators';



export interface IUShareOptions {
  image: string; // 缩略图 必须为https协议
  url: string; // 链接
  title: string; // 标题
  desc: string; // 简介
}


@CordovaPlugin({
  plugin: 'cordova-plugin-u-share',
  instance: 'UShare',
  repo: 'https://github.com/yccp/cordova-plugin-u-share'
})
@Injectable()
export class UShare {
  /**
   * Open share panel
   * @param options { IUShareOptions } share options
   * @returns {Promise<boolean>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Method('share')
  share(options: IUShareOptions): Promise<boolean> { return; }
}