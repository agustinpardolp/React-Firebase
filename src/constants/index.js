export const SCREEN_LABELS = {
  navbar: {
    brand: "Technical Review",
    profile: "Profile",
    gallery: "Gallery",
    products: "Products",
  },
  profile: {
    name: "Name",
    surname: "Surname",
    address: "Addres",
    phone: "Phone",
    state: "State",
    city: "City",
  },
  gallery: {
    delete: "Delete",
    addNew: "Add new picture",
  },
  modal: {
    delete: "Are you sure you delete this image?",
    cancel: "Cancel",
    confirm: "Confirm",
  },
  footer: {
    copyrigth: "Copyright © 2020 by Agustin Pardo",
  },
};
export const NAVBAR_TITLES = [
  { name: "Profile", path: "/profile" },
  { name: "Gallery", path: "/gallery" },
  { name: "Products", path: "/products" },
];

export const REQUEST_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED",
};
export const MEDIA_SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const DEVICES_MAX_WIDTH = {
  mobileS: `(max-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(max-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(max-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(max-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(max-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(max-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(max-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(max-width: ${MEDIA_SIZES.desktop})`,
};

export const DEVICES_MIN_WIDTH = {
  mobileS: `(min-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(min-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(min-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(min-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(min-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(min-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(min-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(min-width: ${MEDIA_SIZES.desktop})`,
};
