import { mount } from "@cypress/react";
import Button from "./Button";

describe("<Button />", () => {
  it("playground", () => {
    mount(<Button>test</Button>);
  });
});
