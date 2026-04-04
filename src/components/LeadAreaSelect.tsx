"use client";

import { getLeadAreaSelectGroups } from "@/lib/lead-form-areas";

type Props = {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  id?: string;
};

/** Shared Area / locality dropdown for all Supabase lead forms. */
export default function LeadAreaSelect({ value, onChange, required = true, className, id }: Props) {
  const groups = getLeadAreaSelectGroups();
  return (
    <select
      id={id}
      aria-label="Area or locality"
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      <option value="">Select area / locality</option>
      {groups.map((g) => (
        <optgroup key={g.label} label={g.label}>
          {g.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
