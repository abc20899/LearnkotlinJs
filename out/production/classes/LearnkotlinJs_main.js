if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LearnkotlinJs_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LearnkotlinJs_main'.");
}
var LearnkotlinJs_main = function (_, Kotlin) {
  'use strict';
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  function helloWorld() {
    print('hello world!');
  }
  var package$cn = _.cn || (_.cn = {});
  var package$junechiu = package$cn.junechiu || (package$cn.junechiu = {});
  var package$learnkotlin = package$junechiu.learnkotlin || (package$junechiu.learnkotlin = {});
  package$learnkotlin.helloWorld = helloWorld;
  Kotlin.defineModule('LearnkotlinJs_main', _);
  return _;
}(typeof LearnkotlinJs_main === 'undefined' ? {} : LearnkotlinJs_main, kotlin);
