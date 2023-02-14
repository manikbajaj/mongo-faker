// eslint-disable-next-line no-undef
module.exports = {
  transform : {
    '^.+\\.(t|j)s$' : 'ts-jest' ,
  } ,
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleFileExtensions : [ 'ts' , 'js' , 'json' , 'node' ] ,
  rootDir : './src' ,
  collectCoverage : true ,
  collectCoverageFrom : [
    '**/*.{js,ts}' ,
    '!**/node_modules/**' ,
    '!**/vendor/**' ,
    '!**/lib/**' ,
    '!**/coverage/**',
    '!**/tools/**'
  ] ,
  coverageDirectory : '../coverage' ,
  coverageThreshold : {
    global : {
      lines : 95,
    },
  },
};
