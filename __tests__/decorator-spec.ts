import { async, fakeAsync, tick, inject, TestBed } from '@angular/core/testing';
import { CordovaPlugin, Method } from '../src/decorators';

describe('CordovaPlugin', () => {
  it('should attach properties', async () => {

    @CordovaPlugin({
      plugin: 'xxx',
      instance: 'xxx',
      repo: 'xxx'
    })
    class TestPlugin { }

    const tp: any = new TestPlugin();
    expect(tp.__plugin).toBe('xxx');
    expect(tp.__instance).toBe('xxx');
    expect(tp.__repo).toBe('xxx');
    expect(tp.instance).toBeUndefined();

    let err;
  });

  it('should attach instance', () => {
    @CordovaPlugin({
      plugin: 'xxx',
      instance: 'test',
      repo: 'xxx'
    })
    class TestPlugin { }

    const tp: any = new TestPlugin();
    expect(tp.__plugin).toBe('xxx');
    expect(tp.__instance).toBe('test');
    expect(tp.__repo).toBe('xxx');
    expect(tp.instance).toBeDefined();
  });
});


describe('Method', () => {
  it('should throw plugin uninstalled', async () => {
    class TestPlugin {
      @Method()
      test() { return; }
    }

    const tp = new TestPlugin();
    let err;
    try {
      await tp.test();
    } catch (e) {
      err = e;
    }
    expect(err).toMatch(/.* not installed/);
  });

  it('should throw method not found', async () => {
    class TestPlugin {
      instance = {};
      @Method()
      test() { return; }
    }

    const tp = new TestPlugin();
    let err;
    try {
      await tp.test();
    } catch (e) {
      err = e;
    }
    expect(err).toMatch(/.* does not have method .*/);
  });
});