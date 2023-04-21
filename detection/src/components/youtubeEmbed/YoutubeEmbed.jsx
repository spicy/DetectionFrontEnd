import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div>
  <iframe
    width="853"
    height="480"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameborder="0"
    allowfullscreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    title="Embedded youtube"
  ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;