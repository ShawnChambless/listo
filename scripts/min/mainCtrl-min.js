var app=angular.module("todoApp");app.controller("mainCtrl",function(e){e.title="Work Todo List",e.list=["Build a new queue","Talk to Cahlan","Review Lessons"],e.addItem=function(){e.newItem&&(e.list.push(e.newItem),e.newItem="")},e.removeItem=function(){var t=e.list.indexOf(e.thingToRemove);-1!==t&&(e.list.splice(t,1),e.thingToRemove=" ")}});