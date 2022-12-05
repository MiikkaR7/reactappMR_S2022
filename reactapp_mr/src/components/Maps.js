import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react'

  const Maps = (props) => {

    const [useLoc, setLoc] = useState([61.49810673355833, 23.767498119715583])
    useEffect(() => {
        setLoc(props.coords);
     }, [props.coords])

     console.log("Koordinaatit" + props.coords)


    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: "AIzaSyDCLrTImjQu7xnw9CzI4b3YSV-xWFJQGow" }}
          center={useLoc}
          defaultZoom={14}
        >
        </GoogleMapReact>
      </div>
    )
  };

  export default Maps;