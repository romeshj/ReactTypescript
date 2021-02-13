/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

interface CardProps {
  title: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ title, paragraph }) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
};

export default Card;
