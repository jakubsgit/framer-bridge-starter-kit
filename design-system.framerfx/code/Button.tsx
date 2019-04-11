import * as React from "react"
import * as System from "../../design-system/src"
import { ControlType, PropertyControls } from "framer"

type Props = System.ButtonProps & {
  height: number
}

export class Button extends React.Component<Props> {
  render() {
    return <System.Button {...this.props} />
  }

  static defaultProps: Props = {
    height: 52,
    text: "Hello World!",
    fluid: true,
    disabled: false
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    kind: {
      type: ControlType.Enum,
      options: ["default", "primary", "danger"],
      optionTitles: ["Default", "Primary", "Danger"]
    },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    fluid: { type: ControlType.Boolean, title: "Fluid" }
  }
}
