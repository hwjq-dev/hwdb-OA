import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { OfficialBadge } from '@/components/molecules/official-badge';
import { Badge } from '@/components/ui/badge';
import { getFormatDatetime } from '@/lib/dayjs';

const Page: NextPage = () => {
  return (
    <section className="overflow-y-auto h-[100dvh] scrollbar scrollbar-none">
      <BackSection label="通告详情" />
      <div className="relative px-4 py-6 mx-5 mt-10 mb-20 min-h-[82dvh] rounded-xl shadow-[0px_0px_45px_0px_rgba(0,_0,_0,_0.1)]">
        <OfficialBadge />

        <div className="flex flex-col space-y-3">
          <p className="text-xs">
            <Badge>发布日期</Badge> : {getFormatDatetime(new Date())}
          </p>
          <p className="font-bold11 text-lg">届时欢迎莅临指导交流</p>
          <div className="w-full h-0.5 border-t border-gray-300 border-dashed" />
          <p className="text-base text-dark leading-relaxed">
            本公司谨此公告，因业务持续拓展与发展规划的需要，我们即将迎来一次重要的变革——办公地点的搬迁。此次搬迁不仅是空间上的转移，更是公司发展道路上的一个新起点。
            新办公地点位于城市核心地段，交通便利，配套设施齐全，环境优美，有利于提升员工的办公体验，也将进一步提高我们为客户提供服务的效率与质量。
            在此，我们衷心感谢广大客户、合作伙伴及各界朋友长期以来对本公司的信任与支持。正是有了你们的陪伴与帮助，我们才能不断迈步向前，迎接新的挑战。
            搬迁工作预计于2025年6月20日全面完成。届时，原有办公地址将不再使用，所有日常业务、会议接待、邮政往来等均将在新址进行。
            此次搬迁涉及多个部门的协调与配合，我们已成立专项小组，确保搬迁过程有序、高效，最大限度减少对客户及合作伙伴的影响。
            本公司谨此公告，因业务持续拓展与发展规划的需要，我们即将迎来一次重要的变革——办公地点的搬迁。此次搬迁不仅是空间上的转移，更是公司发展道路上的一个新起点。
            新办公地点位于城市核心地段，交通便利，配套设施齐全，环境优美，有利于提升员工的办公体验，也将进一步提高我们为客户提供服务的效率与质量。
            在此，我们衷心感谢广大客户、合作伙伴及各界朋友长期以来对本公司的信任与支持。正是有了你们的陪伴与帮助，我们才能不断迈步向前，迎接新的挑战。
            搬迁工作预计于2025年6月20日全面完成。届时，原有办公地址将不再使用，所有日常业务、会议接待、邮政往来等均将在新址进行。
            此次搬迁涉及多个部门的协调与配合，我们已成立专项小组，确保搬迁过程有序、高效，最大限度减少对客户及合作伙伴的影响。
            本公司谨此公告，因业务持续拓展与发展规划的需要，我们即将迎来一次重要的变革——办公地点的搬迁。此次搬迁不仅是空间上的转移，更是公司发展道路上的一个新起点。
            新办公地点位于城市核心地段，交通便利，配套设施齐全，环境优美，有利于提升员工的办公体验，也将进一步提高我们为客户提供服务的效率与质量。
            在此，我们衷心感谢广大客户、合作伙伴及各界朋友长期以来对本公司的信任与支持。正是有了你们的陪伴与帮助，我们才能不断迈步向前，迎接新的挑战。
            搬迁工作预计于2025年6月20日全面完成。届时，原有办公地址将不再使用，所有日常业务、会议接待、邮政往来等均将在新址进行。
            此次搬迁涉及多个部门的协调与配合，我们已成立专项小组，确保搬迁过程有序、高效，最大限度减少对客户及合作伙伴的影响。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
