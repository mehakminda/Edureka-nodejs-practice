var math= require('./math.js');

math.add(10,20);
math.sub(10,20);

//whem same_math.js is directly kept in node_modules folder. It is treasted as a third party library
var math1= require('same_math');

math1.add(10,20);
math1.sub(10,20);