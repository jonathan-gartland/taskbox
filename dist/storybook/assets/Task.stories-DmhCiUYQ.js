import{f as l}from"./index-Ci-fLRC6.js";import{j as s}from"./jsx-runtime-BlAj40OV.js";import{P as t}from"./index-D3ylJrlI.js";function o({task:{id:e,title:c,state:i},onArchiveTask:_,onPinTask:x}){return s.jsxs("div",{className:`list-item ${i}`,children:[s.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[s.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:i==="TASK_ARCHIVED"}),s.jsx("span",{className:"checkbox-custom",onClick:()=>_(e)})]}),s.jsx("label",{htmlFor:`title-${e}`,"aria-label":c,className:"title",children:s.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),i!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",onClick:()=>x(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:s.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}o.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onArchiveTask:t.func,onPinTask:t.func};o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const A={onArchiveTask:l(),onPinTask:l()},v={component:o,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...A}},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var k,m,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(T=(m=r.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const b=["ActionsData","Default","Pinned","Archived"],j=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:A,Archived:n,Default:a,Pinned:r,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{a as D,o as T,j as a};
