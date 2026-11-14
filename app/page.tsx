"use client";

import Scene01Entrance from "./components/Scene01Entrance";
import Scene02Conversations from "./components/Scene02Conversations";
import Scene03Connection from "./components/Scene03Connection";
import SceneMemoryTimeline from "./components/SceneMemoryTimeline";
import Scene04HiddenMoments from "./components/Scene04HiddenMoments";
import Scene06ProposalClimax from "./components/Scene06ProposalClimax";
import Scene06QuietEnding from "./components/Scene06QuietEnding";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <Scene01Entrance />
      <Scene02Conversations />
      <Scene03Connection />
      <SceneMemoryTimeline />
      <Scene04HiddenMoments />
      <Scene06ProposalClimax />
      <Scene06QuietEnding />
    </div>
  );
}
