/* The one interactive piece of a gated v4.1 case study page: the subscribe
   card plus its waitlist modal. Deliberately takes no app content as props —
   nothing about the gated case study is available to this component, so
   there is nothing gated for it to leak into the client bundle. */
import React, { useState } from "react";
import { SubscribeCard, WaitlistModal } from "./Subscribe.jsx";

export function GateWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}
      <SubscribeCard onSubscribe={() => setModalOpen(true)} />
    </>
  );
}
