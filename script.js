function allMethods() {

  let methods  = "abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos, cosh, exp, expm1, floor, fround, hypot, imul, log, log10, log1p, log2, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc"
  let methodArr  = methods.split(",")
  return methodArr;
  
}
alert(allMethods());
