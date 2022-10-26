// PATH CORE MODULE:

// 1- path.basename():

// Returns the last part of the path of the file or folder
// Extract the filename from a file path:

const path = require('path');

console.log(path.basename('/home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/3-Path','.js')); // 3-Path
console.log(path.basename('/home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/')) // 30062020_fbw10

//-------------------------------------------------

// 2- path.delimiter:

// This method property returns the delimeter specified for the server
// It shows : used separate parts for file and folders inside the operating system

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

//-------------------------------------------------

// 3- path.dirname():

// returns the directory name of a path
// like a define URL  - Define and reuse

var directories = path.dirname('/home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/3-Path/path.js');
console.log(directories);

//-------------------------------------------------

// 4 - path.extname():

// It gives the extension of file

console.log(__filename); // /home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/3-Path/test.js
console.log(path.extname('index.html')); // .html
console.log(path.extname(__filename)); // .js


//-------------------------------------------------

// 5 - returns a path string from an object:
// Define path format

var p = path.format({
    root:'/',
    name:'file',
    ext:'.txt'
})

console.log(p); // /file.txt

//-------------------------------------------------

// 6- path.join:

// It will combine it's parameters

console.log(path.join('/foo', 'bar', 'baz/asdf','baz/asdf','bar/alper1','alper1/alper2','alper2', '..')); // /foo/bar/baz/asdf/baz/asdf/bar/alper1/alper1/alper2
console.log(path.join(__dirname,'css','stil.css')); // /home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/3-Path/css/stil.css

//-------------------------------------------------

// 7- path.normalize:

// method normalizes the given path, resolving '..' and '.' segments
// normalize path to correct it!

console.log((path.normalize(__dirname + '/../..'))); // /home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630 => until 2 folders up!
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // /foo/bar/baz/asdf 


//-------------------------------------------------

// 8- path.parse:

// method returns an object whose properties represent significant elements of the path
// seperate the parts of the path into an object

console.log(path.parse('/home/user/dir/file.txt'));
console.log(path.parse(__filename));

//-------------------------------------------------

// 9- path.relative:

// Returns the path from the path given by the first parameter to the path given by the second parameter
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // ../../impl/bbb
console.log(path.relative('/proje/dosyalar/css', '/proje/resimler')); // ../../resimler

//-------------------------------------------------

// 10- path.resolve :

// method returns the relative path from relative directory
console.log(path.resolve('proje')); // /home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/3-Path/proje
console.log(path.resolve('/foo/bar', './baz')); // /foo/bar/baz => combining them and give as a full path

//-------------------------------------------------

// 11- path.sep:
// Returns the operating system file and folder separator
console.log(__filename); // full path : /home/alper/Documents/01.DCI/08.NODEJS/Lessons_2020/L2-20200630/30062020_fbw10/3-Path/test.js
console.log(__filename.split(path.sep)); // seperate parts of the path 
