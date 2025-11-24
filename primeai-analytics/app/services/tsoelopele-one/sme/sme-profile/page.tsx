import { Suspense } from "react";
import SmeProfileInner from "./SmeProfileInner";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading SME Profile...</div>}>
      <SmeProfileInner />
    </Suspense>
  );
}
