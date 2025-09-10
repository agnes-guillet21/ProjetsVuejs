import useFormatRevenus from "./useFormatRevenus";


export default function useGetBestCountry(i: any) {

  const excludedKeys = ["data", "game", "totalRevenus", "totalViews", "totalConversions"];

  const [bestCountryName, bestCountryValue] = Object.entries(i)
    .filter(([key]) => !excludedKeys.includes(key)) // garder que les pays
    .reduce(
      (best, [country, value]) =>
        value > best[1] ? [country, value as number] : best,
      ["", 0] as [string, number]
    );


    return `${bestCountryName.slice(-2)} with a total of ${useFormatRevenus(bestCountryValue)}`;

}