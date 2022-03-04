const data = {
    "testName":"Типы данных",
    "questions":[
      {
      "title":"Константа?",
      "code": "___ d = 123;",
      "variants" : [
         {"title": "const", "flag": true},
         {"title": "var"},
         {"title": "let"}
      ]
      },
       {
      "title":"какой тип имеет переменная d?",
      "code": "let d;",
      "variants" : [
         {"title": "undefined", "flag": true},
         {"title": "null"},
         {"title": "number"}
      ]
      },
       {
      "title":"Тест вопроса с чекбоксами",
      "code": "",
      "variants" : [
         {"title": "вариант1", "flag": true},
         {"title": "вариант2", "flag": true},
         {"title": "вариант3"}
      ]
      },{
      "title":"Как называется оператор создающий константу",
      "code": "",
      "variants" : [
         {"text": "1", "flag": "const"}
      ]
      }
    ]
    }
    export default data;