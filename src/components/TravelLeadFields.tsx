"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { flightSchema, useTravelCatalogue } from "@/lib/travel-cms";
import Link from "next/link";

const journeys = ["Umrah", "Hajj enquiry", "Ramadan Umrah", "Family Umrah", "Group Umrah", "Private Umrah", "Muslim-friendly holiday", "Visa, flights & transfers"];

export type TravelLeadFormData = {
  name: string; phone: string; area: string; projectType: string;
  travelDate: string; travellers: string; message: string;
  packageId?: string; packageName?: string;
  flightId?: string; airline?: string; sharing?: string; pricePerAdult?: number;
};
export const emptyTravelLead: TravelLeadFormData = {
  name: "", phone: "", area: "", projectType: "", travelDate: "", travellers: "", message: "",
};

/** Keeps the existing database columns compatible while recording travel preferences. */
export function travelLeadMessage(data: TravelLeadFormData): string {
  return [data.packageName ? `Selected package: ${data.packageName}` : "", data.airline ? `Airline: ${data.airline}` : "", data.sharing ? `Room sharing: ${data.sharing}` : "", data.travelDate ? `Preferred departure: ${data.travelDate}` : "Departure dates: flexible",
    data.travellers ? `Number of travellers: ${data.travellers}` : "Traveller count: to discuss",
    data.message.trim()].filter(Boolean).join("\n");
}

export default function TravelLeadFields({ value, onChange, compact = false }: {
  value: TravelLeadFormData; onChange: (value: TravelLeadFormData) => void; compact?: boolean;
}) {
  const { categories, packages, loading, error } = useTravelCatalogue();
  const [customDate, setCustomDate] = useState(false);
  const umrah = /umrah/i.test(value.projectType);
  const umrahPackages = packages.filter(pkg => categories.some(category => category.id === pkg.category_id && (/umrah/i.test(category.name) || category.slug === "family")));
  const selectedPackage = umrahPackages.find(pkg => pkg.id === value.packageId);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const flights = selectedPackage ? flightSchema.parse(selectedPackage.options) : [];
  const selectedFlight = flights.find(flight => flight.id === value.flightId);
  const dates = [...new Set((selectedFlight ? [selectedFlight] : flights).flatMap(flight => flight.dates))].filter(date => date >= today).sort();
  useEffect(() => {
    // Resolve older shared links (package + airline label) without replacing their date/count.
    if (loading || !value.projectType) return;
    const pkg = umrahPackages.find(pkg => pkg.id === value.packageId || value.projectType === pkg.name || value.projectType.startsWith(`${pkg.name} · `));
    if (!pkg) return;
    const options = flightSchema.parse(pkg.options);
    const flight = options.find(f => f.id === value.flightId) || options.find(f => f.airline === value.airline || value.projectType.endsWith(` · ${f.airline}`)) || options.find(f => f.dates.includes(value.travelDate)) || options[0];
    const journey = journeys.includes(value.projectType) ? value.projectType : "Umrah";
    if (value.projectType === journey && value.packageId === pkg.id && value.packageName === pkg.name && value.sharing === pkg.sharing && value.flightId === flight.id && value.airline === flight.airline && value.pricePerAdult === flight.rate) return;
    onChange({ ...value, projectType: journey, packageId: pkg.id, packageName: pkg.name, sharing: pkg.sharing, flightId: flight.id, airline: flight.airline, pricePerAdult: flight.rate });
  }, [loading, packages, categories, value, onChange]);
  const menu = "z-[100] max-h-[min(360px,var(--radix-select-content-available-height))] rounded-2xl border-black/10 bg-white p-1.5 font-sans text-[#171717] shadow-[0_12px_40px_rgba(0,0,0,0.14)]";
  const item = "min-h-11 cursor-pointer rounded-lg py-3 pr-4 text-sm focus:bg-[#f3efe6] focus:text-[#171717] data-[state=checked]:bg-[#f3efe6]";
  const journeyOptions = value.projectType && !journeys.includes(value.projectType) ? [value.projectType, ...journeys] : journeys;
  const field = `w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 ${compact ? "py-2.5 text-xs" : "py-3 text-sm"} font-sans text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors`;
  const set = (key: keyof TravelLeadFormData, next: string) => onChange({ ...value, [key]: next });
  return <>
    <input aria-label="Your name" autoComplete="name" placeholder="Your Name" required maxLength={120} value={value.name} onChange={e => set("name", e.target.value)} className={field} />
    <input aria-label="Phone number" type="tel" autoComplete="tel" placeholder="Phone Number" required maxLength={30} value={value.phone} onChange={e => set("phone", e.target.value)} className={field} />
    <input aria-label="Departure city" autoComplete="address-level2" placeholder="Departure city (e.g. Bangalore)" required maxLength={120} value={value.area} onChange={e => set("area", e.target.value)} className={field} />
    <Select value={value.projectType} onValueChange={next => { if (!next || next === value.projectType) return; setCustomDate(false); onChange({ ...value, projectType: next, packageId: undefined, packageName: undefined, flightId: undefined, airline: undefined, sharing: undefined, pricePerAdult: undefined, travelDate: value.packageId ? "" : value.travelDate }); }} required name="journey">
      <SelectTrigger aria-label="Journey or package" className={field + " h-auto min-h-11 rounded-xl text-left focus:ring-2 focus:ring-[#b89b60]/20 focus:ring-offset-0 data-[placeholder]:text-muted-foreground/70"}>
        <SelectValue placeholder="Choose a journey or package">{value.projectType || undefined}</SelectValue>
      </SelectTrigger>
      <SelectContent sideOffset={6} collisionPadding={12} className="z-[100] max-h-[min(360px,var(--radix-select-content-available-height))] rounded-2xl border-black/10 bg-white p-1.5 font-sans text-[#171717] shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
        <div className="px-3 pb-2 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#777]">Your journey</div>
        {journeyOptions.map(journey => <SelectItem key={journey} value={journey} className="min-h-11 cursor-pointer rounded-lg py-3 pr-4 text-sm focus:bg-[#f3efe6] focus:text-[#171717] data-[state=checked]:bg-[#f3efe6] data-[state=checked]:font-medium">{journey}</SelectItem>)}
      </SelectContent>
    </Select>
    {umrah && <div>
      <Select value={value.packageId || ""} disabled={loading || !!error || !umrahPackages.length} onValueChange={id => {
        const pkg = umrahPackages.find(p => p.id === id);
        if (!pkg) return;
        const options = flightSchema.parse(pkg.options);
        const nextDate = options.flatMap(f => f.dates).filter(date => date >= today).sort()[0] || "";
        const flight = options.find(f => f.dates.includes(nextDate)) || options[0];
        setCustomDate(!nextDate);
        onChange({ ...value, packageId: id, packageName: pkg.name, travelDate: nextDate, flightId: flight.id, airline: flight.airline, pricePerAdult: flight.rate, sharing: pkg.sharing });
      }}>
        <SelectTrigger aria-label="Umrah package" className={field + " h-auto min-h-11 rounded-xl"}><SelectValue placeholder={loading ? "Loading packages…" : "Choose your Umrah package"}>{value.packageName || selectedPackage?.name || undefined}</SelectValue></SelectTrigger>
        <SelectContent sideOffset={6} collisionPadding={12} className={menu}>{umrahPackages.map(pkg => <SelectItem key={pkg.id} value={pkg.id} className={item}>{pkg.name}</SelectItem>)}</SelectContent>
      </Select>
      {(error || (!loading && !umrahPackages.length)) && <p className="mt-1 text-xs text-muted-foreground">{error || "No packages currently available. You can still share your preferred date."}</p>}
    </div>}
    {selectedPackage && flights.length > 1 && <Select value={value.flightId || ""} onValueChange={id => {
      const flight = flights.find(f => f.id === id);
      if (!flight) return;
      const nextDate = flight.dates.filter(date => date >= today).sort()[0] || "";
      setCustomDate(!nextDate);
      onChange({ ...value, flightId: id, airline: flight.airline, pricePerAdult: flight.rate, travelDate: nextDate });
    }}><SelectTrigger aria-label="Preferred airline" className={field + " h-auto min-h-11 rounded-xl"}><SelectValue placeholder="Choose your airline" /></SelectTrigger><SelectContent sideOffset={6} collisionPadding={12} className={menu}>{flights.map(flight => <SelectItem key={flight.id} value={flight.id} className={item}>{flight.airline} · ₹{flight.rate.toLocaleString("en-IN")}</SelectItem>)}</SelectContent></Select>}
    <div className="grid grid-cols-2 gap-3">
      <div className="min-w-0 text-xs text-muted-foreground">Preferred departure
        {selectedPackage && <Select value={customDate || !dates.includes(value.travelDate) ? "custom" : value.travelDate} onValueChange={date => { if (!date) return; setCustomDate(date === "custom"); set("travelDate", date === "custom" ? "" : date); }}>
          <SelectTrigger aria-label="Departure batch" className={field + " mt-1 h-auto min-h-11"}><SelectValue /></SelectTrigger>
          <SelectContent sideOffset={6} collisionPadding={12} className={menu}>{dates.map(date => <SelectItem key={date} value={date} className={item}>{new Date(date + "T12:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</SelectItem>)}<SelectItem value="custom" className={item}>Choose my own date</SelectItem></SelectContent>
        </Select>}
        {(!selectedPackage || customDate || !dates.includes(value.travelDate)) && <input aria-label="Preferred departure" type="date" value={value.travelDate} onChange={e => set("travelDate", e.target.value)} className={`${field} mt-1 min-w-0`} />}
      </div>
      <label className="min-w-0 text-xs text-muted-foreground">Travellers<input aria-label="Number of travellers" type="number" min={1} max={200} step={1} placeholder="e.g. 2" value={value.travellers} onChange={e => set("travellers", e.target.value)} className={`${field} mt-1`} /></label>
    </div>
    <textarea aria-label="Travel requirements" placeholder="Tell us about your destination, children or seniors, and any travel requirements" rows={compact ? 2 : 3} maxLength={4000} value={value.message} onChange={e => set("message", e.target.value)} className={`${field} resize-none`} />
    <p className="text-[11px] leading-relaxed text-muted-foreground">By submitting, you ask Zikhra to contact you about this enquiry. Read our <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link> and <Link href="/terms" className="underline underline-offset-2">booking terms</Link>. An enquiry does not confirm a booking.</p>
  </>;
}
