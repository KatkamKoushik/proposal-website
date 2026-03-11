"use client";

import Scene01Entrance from "./components/Scene01Entrance";
import Scene02Conversations from "./components/Scene02Conversations";
import Scene03Connection from "./components/Scene03Connection";
import Scene04HiddenMoments from "./components/Scene04HiddenMoments";
import Scene05FinalMoment from "./components/Scene05FinalMoment";
import Scene06QuietEnding from "./components/Scene06QuietEnding";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <Scene01Entrance />
      <Scene02Conversations />
      <Scene03Connection />
      <Scene04HiddenMoments />
      <Scene05FinalMoment />
      <Scene06QuietEnding />
    </div>
  );
}


