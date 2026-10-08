export type AdminView = 'dashboard' | 'orders' | 'listings';
export function readAdminStorage(key:string):unknown {
 try { const raw=localStorage.getItem(key); return raw?JSON.parse(raw):null; } catch { return null; }
}
export function writeAdminStorage(key:string,value:unknown):boolean {
 try {localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}
}
export function adminView(value:unknown):AdminView|null {return value==='dashboard'||value==='orders'||value==='listings'?value:null;}
