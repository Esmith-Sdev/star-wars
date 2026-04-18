import React, { useState } from "react";

import PropTypes from "prop-types";

import { View, Image } from "react-native";

export default function LazyImage({ source }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View>
      {!loaded && <Image source={require("../assets/placeholder.png")} />}

      <Image source={source} onLoad={() => setLoaded(true)} />
    </View>
  );
}

LazyImage.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.number.isRequired,

    height: PropTypes.number.isRequired,
  }),
};
