import{aA as p,b8 as y,p as b,b9 as g,an as q}from"./index-CfWkRTX1.js";function A(){let t=()=>{throw"base table not register reload function"};return[r=>{r&&r.reload&&(t=r.reload)},()=>{t()}]}async function T(t,c){const{limit:o,filters:r,page:s,sort:i,order:u,select:d}=t;let e=p.from(c);if(d&&d.length>0?e=e.select(d.join(","),{count:"exact"}):e=e.select("*",{count:"exact"}),r&&Array.isArray(r)&&r.forEach(l=>{const{field:n,op:k,value:a,hidden:x}=l;switch(k){case"eq":e=e.eq(n,a);break;case"neq":e=e.neq(n,a);break;case"gt":e=e.gt(n,a);break;case"lt":e=e.lt(n,a);break;case"gte":e=e.gte(n,a);break;case"lte":e=e.lte(n,a);break;case"has":e=e.ilike(n,`%${a}%`);break;case"sw":e=e.ilike(n,`${a}%`);break;case"ew":e=e.ilike(n,`%${a}`);break;case"like":e=e.like(n,`%${a}%`);break;default:console.warn(`Unsupported operation: ${k}`)}}),o&&s){const l=(s-1)*o,n=l+o-1;e=e.range(l,n)}if(i&&i.key){const l=i.order==="asc";e=e.order(i.key,{ascending:l})}else if(u){const l=!u.startsWith("-"),n=u.replace("-","");e=e.order(n,{ascending:l})}const{data:w,error:f,count:h}=await e;return f?(console.error("Supabase query error:",f),{data:null,count:null,error:f}):{data:w,count:h,error:null}}async function $(t,c="table_name"){console.log(t),t.sort||(t.sort={key:"created_at",order:"desc"});const{data:o,count:r,error:s}=await T(t,c);return s||!o?{query:t.filters,rows:[]}:{query:{limit:t.limit,filters:t.filters,total:r,select:t.select,page:t.page},rows:o}}async function m(t,c,o,r){y.confirm({title:`Are you sure you want to delete this ${t}?`,icon:b(g),okText:"Ok",okType:"danger",centered:!0,cancelText:"Cancel",async onOk(){try{await o(c),r(),q.success("Deleted successfully.")}catch(s){console.error(s)}},onCancel(){console.log("Cancel")}})}async function O(t,c,o,r){y.confirm({title:t,icon:b(g),okText:"OK",okType:"danger",centered:!0,cancelText:"Cancel",async onOk(){try{await o(c),r&&await r()}catch(s){console.error(s)}},onCancel(){console.log("Cancel")}})}export{$ as T,O as b,m as c,A as u};