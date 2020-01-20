{
    "compilerOptions": {
      "strict": true,
      "module": "commonjs",
      "sourceMap": false,
      "declaration": false,
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "resolveJsonModule": true,
      "esModuleInterop": true,
      "allowJs": true,
      "lib": [
        "esnext",
        "dom"
      ],
      "typeRoots": [
        "./node_modules",
        "./typings"
      ]
    },
    "exclude": ["./node_modules"],
    "include": ["./typings", "./src"]
  }