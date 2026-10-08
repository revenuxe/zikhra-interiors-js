export const BANGALORE_NEIGHBOURHOODS = ['RT Nagar','Koramangala','Indiranagar','Whitefield','HSR Layout','Jayanagar','Sarjapur Road','Electronic City','Hebbal','JP Nagar','Bellandur'];
export const BANGALORE_CORE_KEYWORDS = ['Umrah packages Bangalore','Hajj enquiries Bangalore','Muslim tours and travels Bangalore','Zikhra Tours and Travels','Umrah from Bengaluru'];
export const BANGALORE_SERVICE_KEYWORDS = ['family Umrah Bangalore','group Umrah Bangalore','private Umrah Bangalore','Ramadan Umrah enquiries','Makkah Madinah travel planning','Muslim-friendly holidays'];
export const BANGALORE_COST_KEYWORDS = ['Umrah package quote Bangalore','Umrah travel package guide','family Umrah costs','Umrah accommodation options'];
export function uniqueKeywords(...groups: Array<Array<string | false | null | undefined>>): string[] {return Array.from(new Set(groups.flat().filter(Boolean) as string[]));}
export function areaSeoKeywords(areaName:string):string[]{return uniqueKeywords([
 'Umrah packages '+areaName,'Hajj enquiries '+areaName,'travel planning '+areaName],BANGALORE_CORE_KEYWORDS);}
export function serviceSeoKeywords(serviceTitle:string):string[]{return uniqueKeywords([serviceTitle+' Bangalore',serviceTitle+' Bengaluru'],BANGALORE_CORE_KEYWORDS);}
