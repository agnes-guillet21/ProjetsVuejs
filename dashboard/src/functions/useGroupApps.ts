import { addFormat } from "@/enums/format.enum";

export default function groupByAppAndCountry(data : any) {
  let result = [];
  let map = new Map();
  let dataMapped = mapData(data);
  console.log(dataMapped);

  for (let entry of data) {
    const app = entry.app;
    const format = entry.format;
    const revenue = parseInt(entry.revenue);
    const country = entry.country;
    const os = entry.platform;

    if (!map.has(`${app} ${os}`)) {// verifie si la cle n existe pas
      map.set(`${app} ${os}`, {
        data: entry,
        [`totalRevenusByCountry${country}`]: revenue,
        [`totalRevenus`]: 0,
        [`views`]: 0,
        [`conversions`]: 0,
        [`platform`]: "",
        [`rewarded`]: 0,
        [`fullscreen`]: 0,
        [`video`]: 0,
        [`banner`]: 0,
      });
    } else {
      const appData = map.get(`${app} ${os}`); // stoxke données dans la variable
      appData.data = entry;
      appData[`totalRevenusByCountry${country}`] = (appData[`totalRevenus${country}`] || 0) + revenue; //revenus total par pays
      appData[`totalRevenus`] = (appData[`totalRevenus`] || 0) + revenue; //revenu total
      appData[`totalConversions`] = (appData[`totalConversions`] || 0) + entry.conversion;
      appData[`totalViews`] = (appData[`totalViews`] || 0) + entry.views;
      appData[`platform`] = os == "Android" ? "android" : "ios";
      appData[`rewarded`] = (appData[`rewarded`] || 0) + (format == addFormat.REWARDED ? revenue : 0);
      appData[`fullscreen`] = (appData[`fullscreen`] || 0) + (format == addFormat.FULLSCREEN ? revenue : 0);
      appData[`video`] = (appData[`video`] || 0) + (format == addFormat.VIDEO ? revenue : 0);
      appData[`banner`] = (appData[`banner`] || 0) + (format == addFormat.BANNER ? revenue : 0);
    }
  }

  for ( const [key, value] of map) {
    result.push({
      app: key,
      ...value,
    })
  }
  return result;
}

function mapData(data : any) {
  let result = [];
  for (let entry of data) {
    let newDataObject = {
      app: entry.app,
      format: entry.format,
      revenue: parseInt(entry.revenue),
      country: entry.country,
      os: entry.platform,
    };
    result.push(newDataObject);
  }
  return result;
}
// faire une fonction qui attribut une variable a une entree
/**pr eviter ca
 *  const app = entry.app;
    const format = entry.format;
    const revenue = parseInt(entry.revenue);
    const country = entry.country;
    const os = entry.platform;
     */
