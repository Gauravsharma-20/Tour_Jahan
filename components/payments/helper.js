
// import { Alert } from "react-native";
// import { API_URL } from "../../config";
// export async function fetchPublishableKey() {
//   try{
//     const response = await fetch(`${API_URL}/stripe/publishableKey`);
//     const json = await response.json();
//     return json.publishableKey;
//   } catch(error) {
//     console.log(error);
//     console.warn('Error fetching publishable key');
//     Alert.alert('Error', 'Error fetching publishable key');
//   }
// }