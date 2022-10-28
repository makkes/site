"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"MicroVMs"},a=void 0,l={unversionedId:"troubleshooting/microvm",id:"troubleshooting/microvm",title:"MicroVMs",description:"Understanding common MicroVM boot/run errors",source:"@site/docs/troubleshooting/microvm.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/microvm",permalink:"/site/docs/troubleshooting/microvm",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/troubleshooting/microvm.md",tags:[],version:"current",frontMatter:{title:"MicroVMs"},sidebar:"docs",previous:{title:"Containerd",permalink:"/site/docs/troubleshooting/containerd"},next:{title:"CAPMVM",permalink:"/site/docs/troubleshooting/capmvm"}},c={},s=[{value:"MicroVM network configuration failure/timeout",id:"microvm-network-configuration-failuretimeout",level:3},{value:"Cannot SSH into MicroVM",id:"cannot-ssh-into-microvm",level:3},{value:"MicroVM has not started",id:"microvm-has-not-started",level:3}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Understanding common MicroVM boot/run errors"),(0,o.kt)("p",null,"Data and logs for each MicroVM will be stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm"),", with\nthe full path for a MicroVM being ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm/NAMESPACE/NAME/UUID"),"."),(0,o.kt)("p",null,"Under that directory are the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.cfg"),": the configuration set by ",(0,o.kt)("inlineCode",{parentName:"li"},"flintlock")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"firecracker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.log"),": logs from the firecracker process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.metrics"),": metrics from the firecracker process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.pid"),": the pid of the running firecracker process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.stderr"),": MicroVM boot errors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.stdout"),": MicroVM boot logs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata.json"),": MicroVM boot userdata")),(0,o.kt)("h3",{id:"microvm-network-configuration-failuretimeout"},"MicroVM network configuration failure/timeout"),(0,o.kt)("p",null,"When MicroVMs boot, they will be assigned an address from wherever you have a dhcp server.\nThis may be your home router or a dedicated pool you have configured for a VLAN."),(0,o.kt)("p",null,"If you see the following logs, then it means this has failed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"A start job is running for Wait for Network to be Configured (38s / no limit)\n... etc for a couple of mins. but really if it is going to work it will do\n... so within 10 seconds\nFailed Wait for Network to be Configured.\n")),(0,o.kt)("p",null,"Steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that the host can ping the router. If not, and you have access to the router,\ndisconnect the device (turn it off) and remove the previous record from the router's\nlist. Reconnect the device and try pinging again."),(0,o.kt)("li",{parentName:"ul"},"Ensure that the correct interface has been configured in ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/flintlockd/config.yaml"),".\n",(0,o.kt)("inlineCode",{parentName:"li"},"parent-iface")," should be set to a wired interface (eg ",(0,o.kt)("inlineCode",{parentName:"li"},"eth0"),"). If you are\nusing flintlock in bridge mode, ",(0,o.kt)("inlineCode",{parentName:"li"},"bridge-name")," should be a bridge which is mastered\nto a parent interface with internet access."),(0,o.kt)("li",{parentName:"ul"},"On the MicroVM's host device run ",(0,o.kt)("inlineCode",{parentName:"li"},"tcpdump -i <parent interface name> -vv")," while creating a MicroVM. Look for dhcp\n",(0,o.kt)("inlineCode",{parentName:"li"},"Discover"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Offer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Request")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ACK")," messages. If you see none, it means the\nMicroVM cannot reach your dhcp server at all. If you see the first 2 but not the last,\nit means the dhcp server has offered an IP by the client for some reason does not\nreceive or accept that. From here you are debugging based on your particular device\nand networking setup.")),(0,o.kt)("h3",{id:"cannot-ssh-into-microvm"},"Cannot SSH into MicroVM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that you set a public SSH key in the spec ",(0,o.kt)("inlineCode",{parentName:"li"},"user-data")," or the cluster manifest."),(0,o.kt)("li",{parentName:"ul"},"Check the ",(0,o.kt)("inlineCode",{parentName:"li"},"firecracker.stdout")," boot logs of the MicroVM to make sure you have\nthe correct IP, or that one has been set at all (see the above section).")),(0,o.kt)("h3",{id:"microvm-has-not-started"},"MicroVM has not started"),(0,o.kt)("p",null,"If you create a MicrmVM but cannot see a ",(0,o.kt)("inlineCode",{parentName:"p"},"firecracker")," process or the boot logs\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm/NS/NAME/UID/firecracker.stdout")," are empty, try these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Look at ",(0,o.kt)("inlineCode",{parentName:"li"},"journalctl -fu flintlockd.service")," and for the line:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"finished executing plan" controller=microvm execution_id=UID execution_time=4m3.498577899s num_steps=6 plan_name=microvm_create_update\n')),"If this is not present, find what the last action for that UID was.",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On the first create with a new kernel or OS image, it can take a while for containerd\nto pull it down."))),(0,o.kt)("li",{parentName:"ul"},"Check the MicroVM error logs at ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/flintlock/vm/NS/NAME/UID/firecracker.stderr")),(0,o.kt)("li",{parentName:"ul"},"Check the ",(0,o.kt)("inlineCode",{parentName:"li"},"firecracker")," logs at ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/flintlock/vm/NS/NAME/UID/firecracker.log"))),(0,o.kt)("p",null,"If you are using ARM images, ensure that you have updated the ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel.filename")," in the\nmanifest to be ",(0,o.kt)("inlineCode",{parentName:"p"},"boot/image"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"x86")," this should be ",(0,o.kt)("inlineCode",{parentName:"p"},"boot/vmlinux"),"."))}m.isMDXComponent=!0}}]);