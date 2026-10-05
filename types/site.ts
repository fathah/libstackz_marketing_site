/**
 * Global site-wide types (Header, Footer, Navigation, Brand)
 */

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeaderData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  navLinks: NavLink[];
  signIn: {
    label: string;
    href: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface FooterData {
  brand: {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    description: string;
    social: {
      label: string;
      href: string;
    };
  };
  linkGroups: FooterLinkGroup[];
  bottom: {
    copyright: string;
    legalLinks: {
      label: string;
      href: string;
    }[];
  };
}
