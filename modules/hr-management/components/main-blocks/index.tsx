/**
 * This is where all hr-main-section related component registered here
 */
import { HrApplicationSection } from './application-section';
import { HrApprovalSection } from './approval-section';
import { HrHeaderSection } from './head-section';
import { HrViewSubmissionSection } from './submission-section';

export default function HrMainBlocksManager() {
  return (
    <>
      <HrHeaderSection />
      <HrViewSubmissionSection />
      <HrApplicationSection />
      <HrApprovalSection />
    </>
  );
}
