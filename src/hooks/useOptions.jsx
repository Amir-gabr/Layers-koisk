//
//
//


export const useOptions = () => {
  const countryCodeOptions = [
    { name: "KSA", value: "+966" },
    { name: "EGY", value: "+20" },
  ];
  const languageOptions = [
    { name: "AR", value: "ar" },
    { name: "EN", value: "en-US" },
  ];
  return { countryCodeOptions, languageOptions };
};
