/**
 * Serialize trusted structured data while preventing a future string value
 * containing "<" from terminating the JSON-LD script element.
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

