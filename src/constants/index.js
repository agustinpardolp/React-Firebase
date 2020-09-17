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
    fileError: "Error, only JPG o PNG allowed",
    addNew: "Add new picture",
    noProd: "'Sorry, there are no products in this gallery",
  },
  modal: {
    delete: "Are you sure you want to delete this image?",
    cancel: "Cancel",
    confirm: "Confirm",
    input: "Add a file...",
    file: "File",
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

export const DUMMY_USER_ID = { userId: "1" };

export const TABLE_HEADER_TITLES = [
  {
    id: "1",
    styles: { fontWeight: "bold" },
    name: "Number",
    dataField: "number",
  },
  { id: "2", styles: { fontWeight: "bold" }, name: "Name", dataField: "name" },
  { id: "3", styles: { fontWeight: "bold" }, name: "Date", dataField: "date" },
  { id: "4", styles: { fontWeight: "bold" }, name: "Sku", dataField: "sku" },
  {
    id: "5",
    styles: { fontWeight: "bold" },
    name: "Weight",
    dataField: "weight",
  },
  {
    id: "6",
    styles: { fontWeight: "bold" },
    name: "Height",
    dataField: "height",
  },
  {
    id: "7",
    styles: { fontWeight: "bold" },
    name: "Width",
    dataField: "width",
  },
  {
    id: "8",
    styles: { fontWeight: "bold" },
    name: "Origin",
    dataField: "origin",
  },
  {
    id: "9",
    styles: { fontWeight: "bold" },
    name: "Minimum",
    dataField: "minimum",
  },
  {
    id: "10",
    styles: { fontWeight: "bold" },
    name: "Delay",
    dataField: "delay",
  },
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
