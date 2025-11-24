import { Suspense } from "react";
import AssessmentPageInner from "./AssessmentPageInner";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AssessmentPageInner />
    </Suspense>
  );
}
