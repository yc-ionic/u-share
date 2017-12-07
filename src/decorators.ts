export function CordovaPlugin(options: {
  plugin: string;
  repo: string;
  instance: string;
}) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    const arr = options.instance.split('.');
    let index = 0;
    let c = window;
    while (c && index < arr.length) {
      c = c[arr[index]];
      index++;
    }
    constructor.prototype.__plugin = options.plugin;
    constructor.prototype.__repo = options.repo;
    constructor.prototype.__instance = options.instance;
    constructor.prototype.instance = c;
    return constructor;
  }
}

export function Method(name?: string) {
  return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const methodName = name || propertyKey;
    descriptor.value();
    return {
      value: function (...args: any[]): Promise<any> {
        if (!this.instance) {
          return Promise.reject(`${this.__plugin} not installed`);
        }
        if (!this.instance[methodName]) {
          return Promise.reject(`${this.__plugin} does not have method '${methodName}'`);
        }
        return new Promise((resolve, reject) => {
          this.instance[methodName](...args, resolve, reject);
        });
      }
    };
  };
}