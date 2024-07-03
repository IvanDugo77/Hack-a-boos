"use strict";

//https://developer.mozilla.org/en-US/docs/Web/API/URL_API
let addr = new URL("https://mysite.com/login?user=someguy&page=news");
console.log(addr.host);
console.log(addr.pathname);
console.log(addr.searchParams.has("user"));
console.log(addr.searchParams.get("user"));
console.log("order", addr.searchParams.has("order"));
addr.searchParams.set("order", "ASC");
console.log("order", addr.searchParams.has("order"));
console.log(addr.toString());

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
const queryParam = new URLSearchParams();
queryParam.append("q", "algo algo");
queryParam.append("order", "ASC");
console.log(`http://127.0.0.1:4000/items?${queryParam.toString()}`);
