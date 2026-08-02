export type RsvpType = "simple" | "detailed";
export type RsvpStage = "not_responded" | "accepted" | "submitted";

export type RsvpFieldType =
  | "text"
  | "textarea"
  | "number"
  | "time"
  | "date"
  | "select"
  | "multiselect"
  | "phone"
  | "email"
  | "checkbox";

export interface RsvpFieldOption {
  label: string;
  value: string;
}

export interface RsvpFieldConfig {
  id: string;
  type: RsvpFieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[] | RsvpFieldOption[];
  hint?: string;
  defaultValue?: any;
}

export interface RsvpSettings {
  rsvpType: RsvpType;
  allowEditRsvp: boolean;
  form: {
    fields: RsvpFieldConfig[];
  };
}

// Default settings per Section 6 of RSVP Build Guide
export const defaultRsvpSettings: RsvpSettings = {
  rsvpType: "detailed",
  allowEditRsvp: true,
  form: {
    fields: [
      {
        id: "guestCount",
        type: "number",
        label: "Number of Guests",
        placeholder: "e.g. 2",
        required: true,
        hint: "Total family members or guests attending",
      },
      {
        id: "arrivalTime",
        type: "time",
        label: "Expected Arrival Time",
        required: false,
        hint: "Approximate time of arrival at Fateh Palace",
      },
      {
        id: "mealPreference",
        type: "select",
        label: "Meal Preference",
        options: ["Veg", "Jain", "Non-Veg"],
        required: false,
        hint: "Select primary dietary preference",
      },
    ],
  },
};

/**
 * Parses URL query parameters for previewing every stage during development:
 * ?rsvp=simple | ?rsvp=detailed
 * &edit=off | &edit=on
 * &screen=not_responded | &screen=accepted | &screen=submitted
 */
export function getEffectiveRsvpSettingsAndStage(
  searchString: string = typeof window !== "undefined" ? window.location.search : ""
): { settings: RsvpSettings; initialStage?: RsvpStage } {
  if (!searchString) {
    return { settings: defaultRsvpSettings };
  }

  const params = new URLSearchParams(searchString);

  // 1. Determine rsvpType override
  const rsvpParam = params.get("rsvp")?.toLowerCase();
  let rsvpType: RsvpType = defaultRsvpSettings.rsvpType;
  if (rsvpParam === "simple" || rsvpParam === "detailed") {
    rsvpType = rsvpParam;
  }

  // 2. Determine allowEditRsvp override
  const editParam = params.get("edit")?.toLowerCase();
  let allowEditRsvp = defaultRsvpSettings.allowEditRsvp;
  if (editParam === "off" || editParam === "false") {
    allowEditRsvp = false;
  } else if (editParam === "on" || editParam === "true") {
    allowEditRsvp = true;
  }

  // 3. Determine direct stage jump
  const screenParam = params.get("screen")?.toLowerCase();
  let initialStage: RsvpStage | undefined = undefined;
  if (screenParam === "not_responded" || screenParam === "accepted" || screenParam === "submitted") {
    initialStage = screenParam as RsvpStage;
  }

  return {
    settings: {
      ...defaultRsvpSettings,
      rsvpType,
      allowEditRsvp,
    },
    initialStage,
  };
}
