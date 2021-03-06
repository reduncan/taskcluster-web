import React, { Component } from 'react';
import MuiSpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { bool } from 'prop-types';
import { withAuth } from '../../utils/Auth';

@withAuth
/**
 * A Material UI SpeedDialAction augmented with application specific props.
 */
export default class SpeedDialAction extends Component {
  static defaultProps = {
    requiresAuth: false,
  };

  static propTypes = {
    /** If true, the button will be disabled if the user is not authenticated */
    requiresAuth: bool,
  };

  render() {
    const {
      requiresAuth,
      ButtonProps,
      user,
      onAuthorize,
      onUnauthorize,
      ...props
    } = this.props;
    const disabled = requiresAuth && !user;
    const buttonProps = {
      ...ButtonProps,
      ...(disabled ? { disabled: true } : {}),
    };

    return <MuiSpeedDialAction ButtonProps={buttonProps} {...props} />;
  }
}
