(() => {
  const importMap = document.createElement('script');

  importMap.type = 'importmap';
  importMap.textContent = JSON.stringify({
    imports: {
      immutable: 'https://unpkg.com/immutable@^4.0.0',
      sass: 'https://unpkg.com/sass@^1.63.0/sass.default.js',
    },
  });

  document.head.append(importMap);

  const mlut = document.createElement('script');

  mlut.type = 'module';
  mlut.src = 'mlut.js';
  document.head.append(mlut);
})();
