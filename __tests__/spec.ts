import { async, fakeAsync, tick, inject, TestBed } from '@angular/core/testing';
import { UShare, UShareModule } from '../src/';

describe('Payments', () => {
  let uShare: UShare;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UShareModule.forRoot()
      ]
    });
  }));

  beforeEach(inject([UShare], (_uShare) => {
    uShare = _uShare;
  }));

  afterEach(() => {
    uShare = undefined;
  })

  it('should be defined', () => {
    expect(uShare).toBeDefined();
  });

  it('should share success', async () => {
    const res = await uShare.share({
      image: 'https://xxx.png', // 缩略图 必须为https协议
      url: 'http://xxx.xxx/xxx', // 链接
      title: 'xxx', // 标题
      desc: 'xxx' // 简介
    });
    expect(res).toBe(true);
  });
});