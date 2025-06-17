/**
 * This is where all hr-main-section related component registered here
 */
import { HrApplicationSection } from './application-section';
import { HrApprovalSection } from './approval-section';
import { HrHeaderSection } from './head-section';
import { OthersSection } from './others-section';
import { HrViewSubmissionSection } from './submission-section';

export default function HrMainBlocksManager() {
  return (
    <>
      <HrHeaderSection />
      <div className="relative flex flex-col space-y-4 -translate-y-11">
        <HrViewSubmissionSection />
        <OthersSection />
        <HrApplicationSection />
        <HrApprovalSection />
      </div>
    </>
  );
}
