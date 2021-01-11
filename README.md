To see how it hangs you can run several times in the console:
```
node --inspect index.js
node --inspect index.js
```

In my particular case it was failing with a bunch of still running tasks:
```
ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();

ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();

ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();
```