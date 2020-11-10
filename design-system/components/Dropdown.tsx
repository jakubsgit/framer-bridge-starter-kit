import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./Dropdown.scss";
import cx from "classnames";

export type Props = {
  /** Disable Toggle */
  isOpen?: boolean;
  toggleText: string;
  onClick: () => void;
  headerText: string;
  optionsArray: [];
};

export const FelixDropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleText, setToggleText] = useState(
    props.toggleText !== undefined ? props.toggleText : "Default toggle"
  );

  return (
    <div className={cx("input-wrapper", "container")}>
      <p className={cx("font-weight-bold", "row")}>
        {props.headerText !== undefined ? props.headerText : "Default header"}
      </p>
      <div className={cx("row", "role-button")}>
        <Dropdown
          {...props}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
          className={cx("dropdown-button")}
        >
          <DropdownToggle caret={false} className={cx(["drop-toggle"])}>
            <span className={cx("dropdown-placeholder")}>{toggleText}</span>
          </DropdownToggle>
          <DropdownMenu className={cx("dropdown-menu")}>
            {props.optionsArray !== undefined ? (
              props.optionsArray.map((op) => (
                <DropdownItem
                  className={cx("dropdown-item")}
                  onClick={() => setToggleText(op)}
                >
                  <span>{op}</span>
                </DropdownItem>
              ))
            ) : (
              <DropdownItem
                className={cx("dropdown-item")}
                onClick={() => setToggleText("Jeden")}
              >
                <span>Jeden</span>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
