import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {any, oneOfType, number, string} from 'prop-types';
/*
  To resolve issue, we need to import Requireable
  error TS4026: Public static property 'propTypes' of exported class has or is using name 'Requireable'
  from external module
  "/Users/andriit/Documents/Projects/wix-ui/packages/wix-ui-core/node_modules/@types/prop-types/index"
  but cannot be named.
*/
import { Requireable } from 'prop-types';
import {Label} from './../Label';
import {Tooltip} from './../Tooltip';
import {isShallowEqual} from './../../utils/isShallowEqual.tsx';
import style from './Badge.st.css';

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: number | string;
}

export interface BadgeState {
  isEllipsisActive: boolean;
}

/**
 * Badge
 */
export class Badge extends React.Component<BadgeProps, BadgeState> {
  static displayName = 'Badge';
  static propTypes = {
    /** Any node to be rendered (usually text node) */
    children: any,

    /** className to place on the root of the rendered element */
    className: any,

    /** When a maximum width is set and the badge content did not fit, a tooltip will become visible */
    maxWidth: oneOfType([number, string]),
  }

  state = {
    isEllipsisActive: false
  }

  componentDidMount() {
    this.setState({isEllipsisActive: this.isEllipsisActive()});
  }

  componentDidUpdate(prevProps) {
    // if props changed, then we want to re-check node for ellipsis state
    // and we can not do such check in render, because we want to check already rendered node
    if (!isShallowEqual(prevProps, this.props)) {
      this.setState({isEllipsisActive: this.isEllipsisActive()});
    }
  }

  isEllipsisActive = () => {
    const node = ReactDOM.findDOMNode(this) as HTMLElement;
    if (!node) {
      return false;
    }
    return node.offsetWidth < node.scrollWidth;
  }

  render() {
    if (!this.state.isEllipsisActive) {
      return (
        <Label
          {...style('root', {}, this.props)}
          ellipsis
          maxWidth={this.props.maxWidth}
        >
          {this.props.children}
        </Label>
      );
    }

    return (
      <Tooltip content={this.props.children}>
        <Label
          {...style('root', {}, this.props)}
          ellipsis
          maxWidth={this.props.maxWidth}
        >
          {this.props.children}
        </Label>
      </Tooltip>
    )
  }
};
