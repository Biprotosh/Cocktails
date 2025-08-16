// types/index.ts

// ✅ navLinks
export type TNavLink = {
  id: string;
  title: string;
};

// ✅ cocktailLists / mockTailLists
export type TDrinkItem = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

// ✅ profileLists
export type TProfile = {
  imgPath: string;
};

// ✅ featureLists / goodLists
// (these are just arrays of strings)
export type TFeature = string;

// ✅ storeInfo
export type TStoreInfo = {
  heading: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
};

// ✅ openingHours
export type TOpeningHour = {
  day: string;
  time: string;
};

// ✅ socials
export type TSocial = {
  name: string;
  icon: string;
  url: string;
};

// ✅ sliderLists
export type TSliderItem = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
};
