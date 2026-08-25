/**
 * Dynamic OG image generation as SVG data URIs.
 * Each type has a distinct visual style matching the content category.
 */

export function generateServiceOG(serviceTitle: string): string {
  const encoded = encodeURIComponent(serviceTitle);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F26D34;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2308090c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='630' fill='url(%23grad)'/%3E%3Crect x='40' y='40' width='1120' height='550' fill='none' stroke='%23ffffff' stroke-width='2' opacity='0.2'/%3E%3Ctext x='600' y='200' font-family='system-ui' font-size='72' font-weight='700' fill='%23ffffff' text-anchor='middle'%3EService%3C/text%3E%3Ctext x='600' y='340' font-family='system-ui' font-size='56' font-weight='600' fill='%23F26D34' text-anchor='middle'%3E${encoded}%3C/text%3E%3Ctext x='600' y='520' font-family='system-ui' font-size='24' fill='%23ffffff' opacity='0.7' text-anchor='middle'%3EUsman Imran%3C/text%3E%3C/svg%3E`;
}

export function generateCaseStudyOG(
  clientName: string,
  sector: string
): string {
  const clientEnc = encodeURIComponent(clientName);
  const sectorEnc = encodeURIComponent(sector);
  const gradientId = sector.toLowerCase().replace(/\s+/g, '-');

  // Different color schemes per sector
  const gradients: Record<string, string> = {
    banking: "08090c,F26D34", // Dark to orange
    automotive: "08090c,3B82F6", // Dark to blue
    healthcare: "08090c,10B981", // Dark to green
    logistics: "08090c,8B5CF6", // Dark to purple
  };

  const gradient = gradients[sector.toLowerCase().split(' ')[0]] || "08090c,F26D34";
  const [from, to] = gradient.split(',');

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${from};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23${to};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='630' fill='url(%23grad)'/%3E%3Crect x='60' y='60' width='1080' height='510' fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.15'/%3E%3Ctext x='600' y='140' font-family='system-ui' font-size='32' font-weight='500' fill='%23ffffff' text-anchor='middle' opacity='0.8'%3E${sectorEnc}%3C/text%3E%3Ctext x='600' y='300' font-family='system-ui' font-size='64' font-weight='700' fill='%23ffffff' text-anchor='middle'%3E${clientEnc}%3C/text%3E%3Ctext x='600' y='420' font-family='system-ui' font-size='24' fill='%23ffffff' text-anchor='middle' opacity='0.7'%3ECase Study%3C/text%3E%3Ctext x='600' y='530' font-family='system-ui' font-size='20' fill='%23ffffff' opacity='0.6' text-anchor='middle'%3EUsman Imran%3C/text%3E%3C/svg%3E`;
}

export function generateBlogOG(
  title: string,
  date: string
): string {
  const titleEnc = encodeURIComponent(title);
  const dateObj = new Date(date);
  const dateStr = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2308090c;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23162A3A;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='630' fill='url(%23grad)'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%23F26D34' opacity='0.2'/%3E%3Ccircle cx='1100' cy='500' r='60' fill='%23F26D34' opacity='0.15'/%3E%3Ctext x='600' y='200' font-family='system-ui' font-size='52' font-weight='700' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3E${titleEnc}%3C/text%3E%3Ctext x='600' y='450' font-family='system-ui' font-size='20' fill='%23F26D34' text-anchor='middle'%3E${dateStr}%3C/text%3E%3Ctext x='600' y='520' font-family='system-ui' font-size='18' fill='%23ffffff' opacity='0.6' text-anchor='middle'%3EUsman Imran%3C/text%3E%3C/svg%3E`;
}

export function generateAIOG(): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F26D34;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%2308090c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='630' fill='url(%23grad)'/%3E%3Crect x='100' y='100' width='1000' height='430' fill='none' stroke='%23F26D34' stroke-width='2' opacity='0.3'/%3E%3Ctext x='600' y='240' font-family='system-ui' font-size='68' font-weight='700' fill='%23F26D34' text-anchor='middle'%3EAI Systems%3C/text%3E%3Ctext x='600' y='340' font-family='system-ui' font-size='28' fill='%23ffffff' text-anchor='middle' opacity='0.8'%3EVoice, Chat, Automation%3C/text%3E%3Ctext x='600' y='510' font-family='system-us' font-size='20' fill='%23ffffff' opacity='0.6' text-anchor='middle'%3EUsman Imran%3C/text%3E%3C/svg%3E`;
}
