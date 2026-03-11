export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "business_card_click"
  | "project_filter_used"
  | "project_detail_view"
  | "brochure_click"
  | "quick_callback_open"
  | "form_start"
  | "form_submit_success"
  | "form_submit_error"
  | "scroll_depth_25"
  | "scroll_depth_50"
  | "scroll_depth_75"
  | "scroll_depth_100"
  | "cta_click_by_section";

export interface EventPayload {
  event: AnalyticsEvent;
  route: string;
  sectionId?: string;
  ctaId?: string;
  businessId?: string;
  projectId?: string;
  timestamp: number;
  source?: string;
  medium?: string;
  campaign?: string;
}
