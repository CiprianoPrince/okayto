import React, { forwardRef } from 'react';
const ForwardRefDropDownMenuIcon = ({ children, className, ...props }, ref) => {
    const child = React.Children.only(children);

    const enhancedChild = React.isValidElement(child)
        ? React.cloneElement(child, {
              className: `${
                  child.props.className || ''
              } text-primary-100 lg:12 group-focus:text-accent-500`,
          })
        : child;

    return (
        <button
            className={`group rounded-full bg-accent-300 p-2 focus:bg-accent-100 focus:outline-none ${className}`}
            ref={ref}
            aria-label="Menu button"
            {...props}
        >
            {enhancedChild}
        </button>
    );
};

const DropDownMenuIcon = forwardRef(ForwardRefDropDownMenuIcon);

export default DropDownMenuIcon;
