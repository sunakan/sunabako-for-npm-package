import BluePromise from "bluebird";

const errorPromise = (() => {
  let errorCount = 0;
  return () => {
    return new BluePromise((resolve, reject) => {
      reject(errorCount += 1);
    });
  };
})();

const successPromise = (() => {
  let count = 0;
  return () => {
    return new Promise((resolve, reject) => {
      resolve(count += 1);
    });
  };
})();

const debug = function debug(alphabet, count) {
  console.log(`----------${alphabet}`);
  console.log(count);
};

await successPromise()
  .then(function(c)  {debug('then-A', c); return successPromise(); })
  .then(function(c)  {debug('then-B', c); return successPromise(); })
  .then(function(c)  {debug('then-C', c); return errorPromise();   })
  .then(function(c)  {debug('then-D', c); return successPromise(); })
  .catch(function(c) {debug('catched-E', c); return successPromise(); })
  .then(function(c)  {debug('then-F', c); return successPromise(); })
  .then(function(c)  {debug('then-G', c); return errorPromise();   })
  .then(function(c)  {debug('then-H', c); return successPromise(); })
  .then(function(c)  {debug('then-I', c); return successPromise(); })
  .then(function(c)  {debug('then-J', c); return successPromise(); })
  .then(function(c)  {debug('then-K', c); return successPromise(); })
  .catch(function(c) {debug('catched-L', c); return successPromise(); })
  .then(function(c)  {debug('then-FINISH', c);})
;

// ----------------------------------------------------

// https://qiita.com/horiuchie/items/50d6d48640856d45994e
//
// mapについての説明はこちら
// https://blog.leko.jp/post/benefits-of-node-bluebird/
// Promise.mapはPromise.all(list.map(fn))の略らしい
const x2 = num => {
  return new BluePromise((resolve, reject) => {
    const ms = Math.random() * 1000;
    console.log(`${num}を${ms}ms後に2倍にして出力します`);
    setTimeout(() => {
      const result = num * 2;
      console.log(`${num} * 2 = ${result}`);
      resolve(result);
    }, ms);
  });
};
const result = await BluePromise.map([1,2,3,4,5], x2);
console.log(result);
const result2 = await Promise.all([1,2,3,4,5].map(x2));
console.log(result2);
