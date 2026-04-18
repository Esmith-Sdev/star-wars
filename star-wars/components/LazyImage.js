import React, { useState } from "react";

import PropTypes from "prop-types";

import { View, Image } from "react-native";

export default function LazyImage({ source, style }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View
      style={{
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {!loaded && (
        <Image style={style} source={require("../assets/placeholder.png")} />
      )}

      <Image
        resizeMode="fill"
        style={style}
        source={source}
        onLoad={() => setLoaded(true)}
      />
    </View>
  );
}

LazyImage.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.number.isRequired,

    height: PropTypes.number.isRequired,
  }),
};
