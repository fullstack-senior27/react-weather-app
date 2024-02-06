import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { EmptyLocationModel, LocationModel } from "../models";
const geocodeBaseUrl: string = process.env.REACT_APP_GEO_API_URL!;
export const useLocation = (locationName: string, useMockData: boolean) => {
  
  const options = {
    headers: {
      "X-RapidAPI-Key": "4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  const [location, setLocation] = useState<LocationModel>(EmptyLocationModel);
  const handleError = useErrorHandler();

  // const getLocationDetails = useCallback(
  //   (position: GeolocationPosition) => {
  //     // axios
  //     //   .get(
  //     //     useMockData
  //     //       ? "./mock-data/locality.json"
  //     //       : `${geocodeBaseUrl}?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=${apiKey}`
  //     //   )
  //     //   .then((res: any) => {
  //     //     console.log("useLocation--", res.data);
  //     //     if (res.data && res.data.results[0]) {
  //     //       const formattedAddress =
  //     //         res.data.results[0].formatted_address.split(",");
  //     //       setLocation({
  //     //         position: {
  //     //           latitude: position.coords.latitude,
  //     //           longitude: position.coords.longitude,
  //     //         },
  //     //         locality: formattedAddress[0].replace(/\s/g, ""),
  //     //         country: formattedAddress[1].replace(/\s/g, ""),
  //     //       });
  //     //     }
  //     //   })
  //     //   .catch((error) => {
  //     //     handleError(error);
  //     //   });
  //     setLocation({
  //       position: {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       }
  //     });
  //   },
  //   [apiKey, geocodeBaseUrl, handleError, useMockData]
  // );

  const getCoordsByLocationName = useCallback(
    async (locationName: string) => {
      await axios
        .get(`${geocodeBaseUrl}/cities?minPopulation=10000&namePrefix=${locationName}`, options)
        .then((res: any) => {
          if (res.data && res.data.data[0]) {
            setLocation({
              position: {
                latitude: res.data.data[0].latitude,
                longitude: res.data.data[0].longitude,
              }
            })
          }
        })
        .catch((error) => {
          handleError(error);
        });
    },
    [/*apiKey, */ handleError]
  );

  useEffect(() => {
    if (!locationName || locationName.trim().length === 0) {
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(
      //     (pos: GeolocationPosition) => {
      //       getLocationDetails(pos);
      //     },
      //     () => {
      //       handleError({
      //         message:
      //           "Location - Please enable access location in the browser",
      //       });
      //     }
      //   );
      // }
      return;
    } else {
      getCoordsByLocationName(locationName);
    }
  }, [getCoordsByLocationName/*, getLocationDetails*/, handleError, locationName]);

  return {
    location,
  };
};