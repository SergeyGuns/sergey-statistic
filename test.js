let tr = 'Транслит работает?';
let br = 'Вот те <br><br/></br>';
console.log('translit.js',tr,'=>',require('./index.js').translit(tr))
console.log('brclean.js',br,'=>',require('./index.js').brClean(br))
console.log(require('./index.js').Statistic)
