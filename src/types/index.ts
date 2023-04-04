// Pretty ugly but I auto-generated it from the API response

export type ApiFeed = ApiStory[]

export interface ApiStory {
  id: number
  brand_id?: number
  title: string
  type: string
  url: string
  branch_url: string
  thumbnail: Thumbnail
  nsfw: boolean
  comment_count: number
  comment_status_open: boolean
  category: Category[]
  tag?: string
  tags: string[]
  content_tags: ContentTag[]
  author: Author
  post_type_meta: PostTypeMeta
  product: Product
  campaign: any
  viewability: number
  is_pinned: number
  is_featured: number
  is_published: number
  is_hidden: number
  is_show_guide: number
  is_membership: number
  is_archive: number
  is_search_indexed: number
  gated_product_id: any
  access_level: number
  ads_disabled: number
  is_featured_section: number
  blocker_description: string
  is_instant_article: number
  site_roughnrowdy: number
  user_id: string
  author_is_active: number
  brand?: Brand2
  brand_name?: string
  is_gold: boolean
  date: string
  slug: string
  hidden_tags: string[]
  sites: Sites
  urls: Urls2
  sharing: Sharing
  updated_at: string
}

export interface Thumbnail {
  type: string
  location: string
  images: Images
  desktop: string
  raw: string
  raw_desktop: string
  featured: any
  raw_featured: any
}

export interface Images {
  small: string
  medium: string
  large: string
  featured: any
}

export interface Category {
  id: string
  slug: string
  name: string
}

export interface ContentTag {
  metrics: Metrics
  tag: string
  created_at: string
  slug: string
  updated_at: string
  visibility: string
  id: string
}

export interface Metrics {
  posts: number
  published_posts: number
  published_podcast_episodes?: number
}

export interface Author {
  name: string
  avatar?: string
  author_url: string
  id?: number
  has_notifications: boolean
  is_active: boolean
  twitter_handle?: string
}

export interface PostTypeMeta {
  standard_post: StandardPost
  barstool_original?: BarstoolOriginal
  podcast?: Podcast
  gallery: any
  live: any
  fundraiser?: Fundraiser
}

export interface StandardPost {}

export interface BarstoolOriginal {
  id: string
  duration: number
  image: string
  type: string
  show: Show
  pre_roll_disabled?: boolean
}

export interface Show {
  id: string
  title: string
  slug: string
  image: any
}

export interface Podcast {
  media: Media
  ad_slots_counts: AdSlotsCounts
  monetization: Monetization
  disabled_ad_placements: DisabledAdPlacements
  pipestream_enabled: boolean
  disable_ad_free_partner_intro: boolean
  disable_ad_free_base_intro: boolean
  montage_updated_at: any
  publish_notes: any
  location: any
  podcast: Podcast2
  guid: string
  title: string
  status: string
  tags: any[]
  internal_tags: any[]
  date: string
  brand: Brand
  midroll_enabled: boolean
  montage_status: string
  created_at: string
  updated_at: string
  ad_slots: AdSlot[]
  description: string
  duration: number
  duration_string: string
  ad_slots_final: AdSlotsFinal[]
  planned_episode: string
  tagging_complete: boolean
  montage: any[]
  episode_trackers: any[]
  guests: any[]
  authors: any[]
  id: string
  montage_final: MontageFinal[]
  ad_slots_virtual: AdSlotsVirtual[]
  time: string
  episode_url: string
  show: Show2
  iframe_src: string
}

export interface Media {
  audio: Audio
  content_length: number
  video: string
}

export interface Audio {
  primary_source: PrimarySource
  copyrights: Copyrights
  waveform: Waveform
  advertising: Advertising
  amagi: Amagi
  tagging_complete: boolean
  description: any
  adswizz_id: any
  user: string
  type: string
  title: string
  internal_notes: any
  url: string
  thumbnail: any
  provider: string
  provider_id: string
  provider_status: string
  duration: number
  aspect_ratio: any
  alternate_sources: AlternateSource[]
  transcriptions: any[]
  montage: string[]
  attribution: any
  captured_at: any
  status: string
  transcode_version: string
  guests: any[]
  created_at: string
  updated_at: string
  cue_points: any[]
  authors: any[]
  brands: any[]
  subtitles: any[]
  tags: any[]
  internal_tags: any[]
  metadata: Metadata
  advertisers: any[]
  id: string
}

export interface PrimarySource {
  type: string
  src: string
}

export interface Copyrights {
  status: string
  acr: Acr
}

export interface Acr {
  matches: any[]
  matchCount: number
  total: number
}

export interface Waveform {
  status: string
  url: string
}

export interface Advertising {
  enabled: boolean
}

export interface Amagi {
  season_number: any
  episode_number: any
  episode_name: string
  program_description: string
  thumbnail: any
  airdate: any
  vod: boolean
  status: string
  published_date: any
}

export interface AlternateSource {
  type: string
  src: string
  width: any
  height: any
  master: boolean
}

export interface Metadata {
  s3: S3
  episode_id: string
  s3_transcode: S3Transcode
}

export interface S3 {
  AcceptRanges: string
  LastModified: string
  ContentLength: number
  ETag: string
  CacheControl: string
  ContentType: string
  Key: string
  Bucket: string
}

export interface S3Transcode {
  AcceptRanges: string
  LastModified: string
  ContentLength: number
  ETag: string
  ContentType: string
  Key: string
  Bucket: string
}

export interface AdSlotsCounts {
  count: number
  marked_ads_count: number
  dai_enabled_count: number
}

export interface Monetization {
  airchecks: Aircheck[]
  planned_aircheck_count: number
  fulfilled_aircheck_count: number
  is_fully_airchecked: boolean
  planned_dai_count: number
  dai_enabled_count: number
  is_fully_monetized: boolean
}

export interface Aircheck {
  advertiser: string
  advertiser_name: string
  is_fulfilled: boolean
  is_planned: boolean
}

export interface DisabledAdPlacements {
  preroll: boolean
  midroll: boolean
  postroll: boolean
}

export interface Podcast2 {
  title: string
  id: string
}

export interface Brand {
  name: string
  id: string
}

export interface AdSlot {
  start_time: number
  end_time: number
  dai_enabled: boolean
  dai_enabled_offset: number
  dai_enabled_offset_strategy: string
  metadata: Metadata2
  ad_count: number
  ad: string
  advertiser: string
  bumper: any
  intro: any
  outro: any
  campaign: string
  id: string
  status: string
  type: string
}

export interface Metadata2 {
  color: string
  placement: string
}

export interface AdSlotsFinal {
  bumper: any
  intro: any
  outro: any
  campaign: any
  start_time: number
  end_time: number
  dai_enabled: boolean
  dai_enabled_offset: number
  dai_enabled_offset_strategy: string
  metadata: Metadata3
  ad_count: number
  ad: string
  advertiser: string
  id: string
  status: string
  type: string
}

export interface Metadata3 {
  color: string
  placement: string
}

export interface MontageFinal {
  virtual: boolean
  start_time: number
  end_time: number
  dai_enabled: boolean
  ad_count: number
  ad_slot_type: string
  type: string
}

export interface AdSlotsVirtual {
  type: string
  virtual?: boolean
  _id: any
  start_time?: number
  end_time?: number
  dai_enabled: boolean
  dai_enabled_offset?: number
  dai_enabled_offset_strategy: string
  ad_count?: number
  ad?: string
  advertiser: any
  bumper: any
  intro: any
  outro: any
  campaign?: string
  id?: string
  metadata?: Metadata4
  status?: string
}

export interface Metadata4 {
  color: string
  placement: string
}

export interface Show2 {
  images: Images2
  urls: Urls
  redirect: Redirect
  sandbox: boolean
  disable_ad_free_partner_intro: boolean
  disable_ad_free_base_intro: boolean
  enable_ad_replacement: boolean
  categories: Category2[]
  created_at: string
  description: string
  explicit: boolean
  language: string
  slug: string
  ssai_enabled: boolean
  status: string
  subtitle: string
  title: string
  updated_at: string
  feed_version: any
  pipestream_enabled: boolean
  brand: string
  download_volume: string
  id: string
  label: string
  image: string
}

export interface Images2 {
  src: string
  itunes: string
  desktop: string
}

export interface Urls {
  feed: string
  apple_podcast: string
  tunein: string
  spotify: string
  google_play: any
  stitcher: any
  iheart: string
  pandora: string
  website: string
}

export interface Redirect {
  enabled: boolean
  url: string
}

export interface Category2 {
  category: string
  subcategory: string
}

export interface Fundraiser {
  campaign_form: CampaignForm
  status: string
}

export interface CampaignForm {
  "donately-id": string
  "donately-campaign-id": string
  "donately-account-id"?: string
  "donately-inner-progress"?: string
  "donately-outer-progress"?: string
  "donately-show-percent-funded"?: string
  "donately-show-goal-amount"?: string
  "donately-show-donor-number"?: string
  "stripe-publishable-key"?: string
  "donately-form-id"?: string
  "donately-currency"?: string
  "donately-payment-options"?: string
  "donately-recurring-frequency"?: string
  "donately-donor-pays-fees"?: boolean
  "google-analytics-id"?: string
  "donately-i18n-locale"?: string
  "donately-form-navigation"?: string
}

export interface Product {
  id: any
}

export interface Brand2 {
  name: string
  id: string
}

export interface Sites {
  barstoolsports: boolean
  barstoolbets: boolean
  roughnrowdy: boolean
}

export interface Urls2 {
  barstoolsports: string
  barstoolbets: string
  roughnrowdy: string
  canonical: string
}

export interface Sharing {
  facebook: Facebook
  twitter: Twitter
  sms: Sms
  email: Email
}

export interface Facebook {
  title: string
  url: string
}

export interface Twitter {
  title: string
  url: string
}

export interface Sms {
  title: string
  url: string
}

export interface Email {
  title: string
  url: string
}
