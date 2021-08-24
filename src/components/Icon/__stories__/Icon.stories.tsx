import React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";

import {Icon} from "../Icon";

const s = require("./IconStories.scss");

const stories = storiesOf("Components/Icon", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
  return (
    <div className={s.wrap}>
      <div className={s.item}>
        <Icon iconName='home'/>
      </div>
      <div className={s.item}>
        <Icon iconName='home2' color={"secondary"}/>
      </div>
      <div className={s.item}>
        <Icon iconName='blog'/>
      </div>
    </div>
  );
});
