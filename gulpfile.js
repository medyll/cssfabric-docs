// https://gist.github.com/torgeir/8507130

const gulp          = require("gulp"),
      unescapeJs    = require("unescape-js"),
      jsonTransform = require("gulp-json-transform"),
      spawn         = require("cross-spawn");



/**
 * 
 * @param {File} file 
 * @returns File
 */
const json_comments = (file) =>{

  const { file_content, file_info } = file;

  file_info.relative = unescapeJs(file_info.relative);
  const module_name = file_info.relative.split("\\")?.pop().split(".")?.[0];

  if (file_content?.[module_name]) {
    let module_conf = file_content[module_name];

    if (module_conf) {
      const module_data = module_conf?.["_data"] || {};
 

      if (!module_conf?.["_docs"]) module_conf["_docs"] = {};
      const out_docs = {};
      
      Object.keys(module_data).forEach((v, i, a) => {
        if (!module_conf?.["_docs"]?.[v]) {
         //  console.log({ module_data });
          out_docs[v] = "";
        }
      });
      file_content[module_name]._docs = out_docs;
    }
  } else {
    console.log("module not registered or filename mismatch : " + module_name);
  }

  return { ...file_content };
}



const fabricRootDir   = './css-fabric',
      fabricStylesDir = 'styles',
      fabricConfDir   = `${fabricRootDir}/_config`,
      fabricModuleDir = `${fabricRootDir}/modules`,
      generatedDir    = `${fabricRootDir}/_generated`;

/**
 * add default comment key for each property
 * @returns function
 */
function task_scss2json(cb){
  
  spawn.sync(
    `json-to-scss ${fabricConfDir}/*.*   ${generatedDir}/_css-fabric.scss  --mo`
  );

  return cb();
}

function task_sass2css(cb){
  
  spawn.sync(
    `sass  --no-source-map ${fabricModuleDir}/:${fabricStylesDir}/css-fabric/core`
  );
  spawn.sync(
    `sass  --no-source-map ${fabricModuleDir}/:${fabricStylesDir}/css-fabric/min/ --style=compressed`
  );

  return cb();
}

/**
 * 
 * @param {function} cb 
 * @returns function
 */
function task_addComments   (cb) {
   
  return gulp.src(fabricConfDir+"/**/*.json")
        .pipe(
          jsonTransform(function (file_content, file_info) {
            return json_comments({ file_content: file_content, file_info });
          }, "\t")
        )
        .pipe(gulp.dest('copies'))
        .on('end',()=>{return cb()});     
} 
 
function watchJsonTask(cb) { 
  
  gulp.watch(fabricConfDir+"/**/*.json", gulp.parallel(task_addComments,task_scss2json));

  cb();
}

function watchSassTask(cb) {   

  gulp.watch("./css-fabric", task_sass2css);

  cb();
}

exports.watchJson = watchJsonTask;
exports.watchSass = watchSassTask;