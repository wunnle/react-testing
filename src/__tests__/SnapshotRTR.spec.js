import React, { useState } from "react";
import { create, act } from "react-test-renderer";

function Button(props) {
  const [text, setText] = useState("");
  function handleClick() {
    setText("PROCEED TO CHECKOUT");
  }
  return <button onClick={handleClick}>{text || props.text}</button>;
}

describe("Button component", () => {
  test("it shows the expected text when clicked", () => {
    //const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    let component
    act(() => {
      component = create(<Button text="SUBSCRIBE TO BASIC" />)
    })

    const instance = component.root;
    const button = instance.findByType("button");
    act(() => button.props.onClick())
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  })
})