// eslint-disable-next-line no-undef
module.exports = {
  transform : {
    '^.+\\.(t|j)s$' : 'ts-jest' ,
  } ,
  testRegex : '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s$' ,
  moduleFileExtensions : [ 'ts' , 'js' , 'json' , 'node' ] ,
  rootDir : 'src' ,
  collectCoverage : true ,
  collectCoverageFrom : [
    '**/*.{js,ts}' ,
    '!**/node_modules/**' ,
    '!**/vendor/**' ,
    '!**/lib/**' ,
    '!**/coverage/**'
  ] ,
  coverageDirectory : './coverage' ,
  coverageThreshold : {
    global : {
      lines : 95,
    },
  },
};
