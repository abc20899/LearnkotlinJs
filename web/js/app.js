if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function helloWorld() {
    println('hello world!');
  }
  var package$cn = _.cn || (_.cn = {});
  var package$junechiu = package$cn.junechiu || (package$cn.junechiu = {});
  var package$learnkotlin = package$junechiu.learnkotlin || (package$junechiu.learnkotlin = {});
  package$learnkotlin.helloWorld = helloWorld;
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);

//# sourceMappingURL=app.js.map
