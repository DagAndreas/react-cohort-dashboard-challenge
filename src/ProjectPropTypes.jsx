// src/ProjectPropTypes.js

import PropTypes from 'prop-types';

// Define the PropTypes for a Post
export const PostPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  contactId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

// Define the PropTypes for a Contact
export const ContactPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  contactId: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
});

// You can define additional PropTypes here as needed
