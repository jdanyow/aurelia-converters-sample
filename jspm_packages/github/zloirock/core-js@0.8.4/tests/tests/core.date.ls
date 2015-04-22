QUnit.module 'core-js Date'
isFunction = -> typeof! it is \Function
test '.locale' !->
  {locale} = core
  ok isFunction(locale), 'Is function'
  locale \en
  ok locale! is \en, '.locale() is "en"'
  ok locale(\ru) is \ru, '.locale("ru") is "ru"'
  ok locale! is \ru, '.locale() is "ru"'
  ok locale(\xx) is \ru, '.locale("xx") is "ru"'
test '.addLocale' !->
  {locale, addLocale} = core
  ok isFunction(locale), 'Is function'
  ok locale(\en) is \en
  ok locale(\zz) is \en
  addLocale \zz {
    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
  }
  ok locale(\zz) is \zz
  ok new Date(1 2 3 4 5 6 7)format('W, D MM Y') is 'Воскресенье, 3 Марта 1901'
test '#format' !->
  {locale} = core
  ok isFunction(Date::format), 'Is function'
  date = new Date 1 2 3 4 5 6 7
  ok date.format('DD.NN.Y') is '03.03.1901', 'Works basic'
  locale \en
  ok date.format('s ss m mm h hh D DD W N NN M MM YY foo Y') is '6 06 5 05 4 04 3 03 Sunday 3 03 March March 01 foo 1901', 'Works with defaut locale'
  locale \ru
  ok date.format('s ss m mm h hh D DD W N NN M MM YY foo Y') is '6 06 5 05 4 04 3 03 Воскресенье 3 03 Март Марта 01 foo 1901', 'Works with set in Date.locale locale'
test '#formatUTC' !->
  ok isFunction(Date::formatUTC), 'Is function'
  date = new Date 1 2 3 4 5 6 7
  ok date.formatUTC(\h) is '' + date.getUTCHours!, 'Works'