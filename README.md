To see how it hangs you can run several times in the console:
```
node --inspect index.js
node --inspect index.js
```

In my particular case it was failing with a bunch of still running tasks:
```
[Favicons] General:source: Source type is string...
[Favicons] General:source: Source type is object...
[Favicons] Image:create: Creating empty 16x16 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 16x16 with offset 0...
[Favicons] Image:render: Rendering SVG to 16x16...
[Favicons] Image:create: Creating empty 32x32 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 32x32 with offset 0...
[Favicons] Image:render: Rendering SVG to 32x32...
[Favicons] Image:create: Creating empty 48x48 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 48x48 with offset 0...
[Favicons] Image:render: Rendering SVG to 48x48...
[Favicons] Image:create: Creating empty 16x16 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 16x16 with offset 0...
[Favicons] Image:render: Rendering SVG to 16x16...
[Favicons] Image:create: Creating empty 24x24 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 24x24 with offset 0...
[Favicons] Image:render: Rendering SVG to 24x24...
[Favicons] Image:create: Creating empty 32x32 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 32x32 with offset 0...
[Favicons] Image:render: Rendering SVG to 32x32...
[Favicons] Image:create: Creating empty 48x48 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 48x48 with offset 0...
[Favicons] Image:render: Rendering SVG to 48x48...
[Favicons] Image:create: Creating empty 64x64 canvas with transparent background...
[Favicons] Image:render: Find nearest icon to 64x64 with offset 0...
[Favicons] Image:render: Rendering SVG to 64x64...
[Favicons] Images:composite: Compositing favicon on 16x16 canvas with offset 0...
[Favicons] Images:composite: Compositing favicon on 24x24 canvas with offset 0...
[Favicons] Images:composite: Compositing favicon on 32x32 canvas with offset 0...
[Favicons] Images:composite: Compositing favicon on 48x48 canvas with offset 0...
[Favicons] Images:composite: Compositing favicon on 64x64 canvas with offset 0...
There are 35 handle(s) keeping the process running

# TTYWRAP
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\colors\lib\system\supports-colors.js:149 - stdout: getSupportLevel(process.stdout),

# SIGNALWRAP
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\colors\lib\system\supports-colors.js:149 - stdout: getSupportLevel(process.stdout),

# TTYWRAP
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\colors\lib\system\supports-colors.js:150 - stderr: getSupportLevel(process.stderr),

# Timeout
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\testFavicons\index.js:25 - const timeoutVar = setTimeout(function () {

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# generic
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:884 - sharp.pipeline(this.options, (err, data, info) => {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:883 - return new Promise((resolve, reject) => {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:118 - return this._pipeline(is.fn(options) ? options : callback);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\dist\helpers.js:265                  - }).toBuffer()).then(Jimp.read);

# generic
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:884 - sharp.pipeline(this.options, (err, data, info) => {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:883 - return new Promise((resolve, reject) => {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:118 - return this._pipeline(is.fn(options) ? options : callback);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\dist\helpers.js:265                  - }).toBuffer()).then(Jimp.read);

# generic
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:884 - sharp.pipeline(this.options, (err, data, info) => {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:883 - return new Promise((resolve, reject) => {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\sharp\lib\output.js:118 - return this._pipeline(is.fn(options) ? options : callback);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\dist\helpers.js:265                  - }).toBuffer()).then(Jimp.read);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52                    - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14              - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40                       - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:40                - var png = new _pngjs.PNG({
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-sync.js:36               - var compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:15                  - return pack(png, options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:45                - return _pngjs.PNG.sync.write(png, {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\promisify.js:21     - fun.bind(ctx).apply(void 0, args);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52                    - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14              - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40                       - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:40                - var png = new _pngjs.PNG({
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-sync.js:36               - var compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:15                  - return pack(png, options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:45                - return _pngjs.PNG.sync.write(png, {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\promisify.js:21     - fun.bind(ctx).apply(void 0, args);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52                    - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14              - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40                       - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:40                - var png = new _pngjs.PNG({
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-sync.js:36               - var compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:15                  - return pack(png, options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:45                - return _pngjs.PNG.sync.write(png, {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\promisify.js:21     - fun.bind(ctx).apply(void 0, args);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52                    - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14              - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40                       - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:40                - var png = new _pngjs.PNG({
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-sync.js:36               - var compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:15                  - return pack(png, options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:45                - return _pngjs.PNG.sync.write(png, {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\promisify.js:21     - fun.bind(ctx).apply(void 0, args);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:18              - zlib.Inflate.call(this, opts);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\sync-inflate.js:155             - return zlibBufferSync(new Inflate(opts), buffer);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-sync.js:85               - inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:10                  - return parse(buffer, options || {});
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:196 - this.bitmap = this.constructor.decoders[_mime](data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\index.js:431              - _imageBitmap.parseBitmap.call(this, data, null, finish);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52                    - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14              - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40                       - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:40                - var png = new _pngjs.PNG({
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-sync.js:36               - var compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png-sync.js:15                  - return pack(png, options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\png\dist\index.js:45                - return _pngjs.PNG.sync.write(png, {
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\image-bitmap.js:251 - var buffer = this.constructor.encoders[mime](this);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\@jimp\core\dist\utils\promisify.js:21     - fun.bind(ctx).apply(void 0, args);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer.js:52       - return this._options.deflateFactory(this.getDeflateOptions());
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\packer-async.js:14 - this._deflate = this._packer.createDeflate();
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\png.js:40          - this._packer = new Packer(options);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\parse-png\index.js:10        - let png = new PNG(opts);

# ZLIB
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser-async.js:72 - this._inflate = zlib.createInflate({ chunkSize: chunkSize });
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\parser.js:273      - this.inflateData(data);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:133 - read.func.call(this, smallerBuf.slice(0, read.length));
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:187 - this._processReadAllowingLess(read);
D:\Personal stuff\Desktop\TestRigs\TestVue\test-favicons\favicons\node_modules\pngjs\lib\chunkstream.js:61  - this._process();
```