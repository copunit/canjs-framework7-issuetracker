define(["can"],function(e){e.Model.extend("Model.Issue",{findAll:"GET /issue",create:"POST /issue",update:"PUT /issue/{id}"},{status:"todo",comments:[],init:function(){this.backup()},addComment:function(e){this.comments.push(e)},save:function(){var t=this,n;return this.id==null&&(n={to:this.status}),this._super().done(function(){n=n||{from:t._backupStore.status,to:t.status},t.backup(),n.from!=n.to&&(n.issue=t,e.trigger(Model.Issue,"statuschange",n))})},restore:function(){this._super()},nextStatus:function(){switch(this.attr("status")){case"todo":return"inprogress";case"inprogress":return"done";case"done":return null}}}),Model.Issue.List=Model.Issue.List.extend({},{withStatus:function(e){return this.grep(function(t){return t.status==e})}})});