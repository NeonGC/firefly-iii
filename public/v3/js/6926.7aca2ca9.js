"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[6926],{6926:(t,n,s)=>{s.r(n),s.d(n,{default:()=>d});var c=s(9835);const a={class:"row"},i={class:"col q-mr-sm"};function o(t,n,s,o,e,r){const u=(0,c.up)("TransactionList");return(0,c.wg)(),(0,c.iD)("div",a,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.accounts,(t=>((0,c.wg)(),(0,c.iD)("div",i,[(0,c.Wm)(u,{"account-id":t},null,8,["account-id"])])))),256))])}s(702);var e=s(1746);const r={name:"TransactionLists",components:{TransactionList:(0,c.RC)((()=>Promise.all([s.e(4736),s.e(6471)]).then(s.bind(s,6471))))},data(){return{accounts:[]}},mounted(){this.getAccounts()},methods:{getAccounts:function(){(new e.Z).get("frontpageAccounts").then((t=>this.parseAccounts(t.data)))},parseAccounts:function(t){const n=t.data.attributes.data;for(let s in n)n.hasOwnProperty(s)&&this.accounts.push(n[s])}}};var u=s(1639);const l=(0,u.Z)(r,[["render",o]]),d=l}}]);