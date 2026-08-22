export const CAL_LINK = "usman-vhehv8/30min";
export const CAL_NAMESPACE = "30min";

type CalApi = (...args: unknown[]) => void;
type CalGlobal = CalApi & { ns?: Record<string, CalApi> };

export function openCalModal(event: React.MouseEvent) {
  event.preventDefault();
  const cal = (window as unknown as { Cal?: CalGlobal }).Cal;
  const namespaced = cal?.ns?.[CAL_NAMESPACE];
  if (namespaced) {
    namespaced("modal", {
      calLink: CAL_LINK,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
    });
  } else {
    window.open(`https://cal.com/${CAL_LINK}`, "_blank", "noopener,noreferrer");
  }
}
