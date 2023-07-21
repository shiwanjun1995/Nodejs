// __dirname: 表示的是当前被执行js文件的绝对路径（前面带/的路径）
console.log(110, __dirname)

// path.resolve()方法将路径或路径片段解析为绝对路径，返回解析后的绝对路径。
// 而path.join()方法将所有给定的路径片段连接在一起，并返回一个规范化的路径。

// 具体区别如下：
// path.resolve()：方法将参数解析为绝对路径，并返回该绝对路径。它会考虑当前工作目录（process.cwd()）和参数的顺序来解析路径。如果参数是绝对路径，则直接返回；如果参数是相对路径，则将当前工作目录与相对路径拼接成为一个绝对路径。
// path.join()：方法将所有参数拼接为一个路径，并返回该路径。它会简单地将多个路径片段连接起来，形成一个新的路径。它不会考虑当前工作目录，只是简单地将路径片段连接起来，形成一个新的路径。
// 总结来说，path.resolve()方法返回的是一个绝对路径（可以包含当前工作目录），而path.join()方法返回的是一个相对路径（不考虑当前工作目录）。选择使用哪一个方法取决于您对路径的需求。

// 1.首先先说下文件路径的区别：

// - `/`代表的是根目录；
// - `./`代表的是当前目录；
// - `../`代表的是父级目录；

// 示例：
const path = require('path')

// 某个文件的绝对路径：当前文件的绝对路径+该文件的相对路径 ✅
console.log(111, path.resolve(__dirname, 'foo')) // /Users/shiwanjun/Documents/github/Nodejs/foo
// 这么写获取不了某个文件的绝对路径，需要加一个当前文件的绝对路径 ❌
console.log(112, path.resolve('foo')) // /Users/shiwanjun/Documents/github/foo

// 这么写没啥意义，一般结合 __dirname 变量来实现对文件的路径匹配
console.log(113, path.resolve('foo', './bar')) // /Users/shiwanjun/Documents/github/foo/bar
console.log(114, path.resolve('/foo', './bar')) // /foo/bar
console.log(115, path.resolve('/foo', '../bar')) // /bar
console.log(116, path.resolve('foo', '/bar')) // 因为存在绝对路径 /bar，所以直接输出 /bar

console.log(221, path.join(__dirname, 'foo')) // /Users/shiwanjun/Documents/github/Nodejs/foo
console.log(222, path.join('foo')) // foo

console.log(223, path.join('foo', './bar')) // foo/bar
console.log(224, path.join('/foo', './bar')) // /foo/bar
console.log(225, path.join('/foo', '../bar')) // /bar，本来是拼接起来的，后来向前挪了个位置
console.log(226, path.join('foo', '/bar')) // foo/bar
