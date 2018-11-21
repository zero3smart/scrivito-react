import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = [style];
  const color = widget.get('color');
  
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("b-bottom");
  }
  if (widget.get("showMargin") === "no") {
    classNames.push("no-margin");
  }
  if (color) {
    classNames.push(`about-title-color-${color}`);
  }

  return (
    <Scrivito.ContentTag
      tag={level}
      content={widget}
      attribute="headline"
      className={classNames.join(" ")}
    />
  );
});
