/* The one interactive piece of a gated v4.1 case study page: the subscribe
   card. Deliberately takes no app content as props — nothing about the gated
   case study is available to this component, so there is nothing gated for it
   to leak into the client bundle. */
import React from "react";
import { SubscribeCard } from "./Subscribe.jsx";

export function GateWidget() {
  return <SubscribeCard />;
}
