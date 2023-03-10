class Loader {
  constructor() {
    this._imports = {
      env: {
        abort: () => {
          throw new Error('Abort called from wasm module');
        },
      },
      index: {
        log: (n) => {
          console.log(n);
        },
      },
    };
  }

  async wasm(path, imports = this._imports) {
    console.log('Loading wasm module from ' + path);
    if (!loader.instantiateStreaming) {
      return this.wasmFallback(path, imports);
    }

    const instance = await loader.instantiateStreaming(fetch(path), imports);
    return instance.exports;
  }

  async wasmFallback(path, imports) {
    console.log('Using fallback for wasm streaming');

    const response = await fetch(path);
    const bytes = await response.arrayBuffer();
    const instance = await loader.instantiate(bytes, imports);
    return instance.exports;
  }
}
