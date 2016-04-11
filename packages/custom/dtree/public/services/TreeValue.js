/**
 * Created by rvishnu on 6/12/15.
 */
'use strict';
(function(app) {

    app.value('DecisionTree', [
         {'id': 0, name:'Root', childQuestion:'Root Node'},
        {'id': 1, 'parentId': 0, name:'First', childQuestion:'Do you want to go to India'},
        {'id': 2, 'parentId': 1, name:'Adam Smith', childQuestion:'Adam Smith Question'},
        { 'id': 3, 'parentId':1, name:'Suzy Smith', childQuestion:'Suzy Smith Question'},
        { 'id': 4, 'parentId':2, name: 'Clare Smith', childQuestion:'Clare Smith Question'},
        { 'id': 5, 'parentId':2, name: 'Aaron Smith', childQuestion:'Aaron Smith Question'},
       { 'id': 6, 'parentId': 3, name: 'Simon Smith', childQuestion:'Simon Smith Question'},
        { 'id': 7, 'parentId': 3, name: 'Timmy Smith', childQuestion:'Timmy Smith Question'},
        { 'id':8, 'parentId': 4, name: 'Alison Smith', childQuestion:'Alison Smith Question'},
        { 'id': 9, 'parentId': 4, name:'Natasha Smith', childQuestion:'atasha Smith Question'},
        { 'id': 10, 'parentId': 5, name: 'Zak Smith', childQuestion:'Zak Smith Question'},
        {'id':11, 'parentId':5, name:'Brad Smith', childQuestion:'Brad Smith Question'},
        {'id':12, 'parentId':6, name:'Angelina Smith', childQuestion:'ngelina Smith Question'},
        {'id':13, 'parentId':6, name:'Harrison Smith', childQuestion:'Harrison Smith Question'},
        {'id':14, 'parentId':7, name:'Ford Smith', childQuestion:'Ford Smith Question'},
        {'id':15, 'parentId':7, name:'Samantha Smith', childQuestion:'Samantha Smith Question'},
        {'id':16, 'parentId':8, name:'Sharmila Smith', childQuestion:'Sharmila Smith Question'},
      {'id':17, 'parentId':8, name:'Sharmila Smith', childQuestion:'Sharmila Smith Question'},
      {'id':18, 'parentId':9, name:'Sharmila Smith', childQuestion:'Sharmila Smith Question'}

    ]);

})(angular.module('mean.dtree'));
