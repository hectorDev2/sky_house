interface placeInterface {
  city: string;
  label: string;
  lat: string;
  lng: string;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
}
export const dataFormat = (data: placeInterface[]) => {
  return data.map((place) => ({
    ...place,
    latlng: [Number(place.lat), Number(place.lng)],
  }));
};
