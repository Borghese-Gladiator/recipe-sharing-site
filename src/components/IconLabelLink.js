import React from 'react';
// ReactRouter Link
import { Link as RouterLink } from 'react-router-dom';
// Prop Type checking
import PropTypes from 'prop-types';
// Material UI components
import { Button, Typography } from '@material-ui/core';

export default function IconLabelLink(props) {
  const { ariaLabel, icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <Button 
      aria-label={ariaLabel}
      color="inherit"
      component={renderLink}
    >
      <Typography variant="button" display="block" gutterBottom>
        {primary}
      </Typography>
      {icon ? <>{icon}</> : null}
    </Button>
  );
}

IconLabelLink.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};