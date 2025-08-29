export type NavKey =
  | 'nav_features'
  | 'nav_trailer'
  | 'nav_factSheet'
  | 'nav_mediaKit'
  | 'nav_requestKey'
  | 'nav_contact'
  | 'nav_about'

export type NavItem = {
  key: NavKey
  href: string
}
