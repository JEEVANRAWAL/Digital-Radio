export default async function useRadioStationFetcher() {
  try {
    const response = await fetch("/assets/radio_list.json");
    const data = response.json();
    return data;
  } catch (error) {
    console.log("error while fetching radio stations", error.message);
  }
}
