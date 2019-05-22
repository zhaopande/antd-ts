{
  "compilerOptions": {// 编译选择
    "target": "es5",// 指定ECMAScript目标版本。允许的值为“es3”、“es5”、“es6”、“es2015”、“es2016”、“es2017”、“es2018”或“esnext”                     
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "baseUrl": ".",
    "module": "commonjs",// 指定模块代码生成:“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”或“esnext”。               
    "jsx": "react", // 指定JSX代码生成:'preserve'、'react'或' reactive -native'。                   
    "rootDir": "src",
    "outDir": "build",                    
    "strict": true,                           
    "esModuleInterop": true,// 为运行时babel生态系统兼容性提供“……importstar”和“……importdefault”帮助，并为类型系统兼容性启用“——allowSyntheticDefaultImports
    "allowJs": true, // 允许编译javascript文件。
    "forceConsistentCasingInFileNames": true, // 不允许对同一文件使用不一致大小写的引用。
  }
}