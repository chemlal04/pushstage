import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// export async function getAddressFromCoordinates(lat, lng) {
//   const apiKey = 'AIzaSyDCzTRvG0nBe5vmD0j74U1Bsz7rvRCeD34'; // Replace with your own API key
//   const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

//   try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       if (data.status === 'OK') {
//           // Extracting the formatted address from the response
//           const address = data.results[0].formatted_address;
//           return address;
//       } else {
//           throw new Error('Geocoding failed');
//       }
//   } catch (error) {
//       console.error('Error fetching data:', error);
//       return 'problem occured';
//     }
// }