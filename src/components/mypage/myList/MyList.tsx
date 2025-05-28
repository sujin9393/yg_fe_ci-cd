import { useState } from "react";
import * as S from "./MyList.styled";
import MyListCard from "../myListCard/MyListCard";
import { useOrderList } from "../../../hooks/queries/useOrderQuery";
import { useHostList } from "../../../hooks/queries/useHostList";
import FilterSelector from "../../common/filteringSelector/FilteringSelector";
import EmptySection from "../../common/emptySection/EmptySection";
import { useModalStore } from "../../../stores/useModalStore";

const statusMap = {
  공구중: "open",
  모집마감: "closed",
  공구종료: "ended",
} as const;

type StatusKey = keyof typeof statusMap;

interface MyListProps {
  activeTab: "참여목록" | "주최목록" | "관심목록";
}

const MyList = ({ activeTab }: MyListProps) => {
  const [status, setStatus] = useState<StatusKey>("공구중");
  const openModal = useModalStore((s) => s.openModal);

  const commonParams = { sort: statusMap[status] };

  // ✅ Hook은 조건 없이 항상 호출
  const orderQuery = useOrderList(commonParams);
  const hostQuery = useHostList(commonParams);

  // ✅ 조건에 따라 데이터를 선택
  const items = activeTab === "참여목록" ? orderQuery.data : hostQuery.data;
  console.log(items);

  return (
    <S.Container>
      <S.FilteringSection>
        <FilterSelector
          options={["공구중", "모집마감", "공구종료"]}
          selected={status}
          onSelect={setStatus}
        />
      </S.FilteringSection>
      {!items || items.length === 0 ? (
        <EmptySection
          category={activeTab === "참여목록" ? "참여한" : "주최한"}
        />
      ) : (
        items.map((item) => (
          <MyListCard
            key={item.postId}
            item={item}
            renderActions={(item) => {
              if (activeTab === "참여목록") {
                return (
                  <>
                    <S.TopButton>
                      <S.WhiteButton>주문 상세</S.WhiteButton>
                      <S.WhiteButton>채팅방 이동</S.WhiteButton>
                    </S.TopButton>
                  </>
                );
              }

              if (activeTab === "주최목록" && status !== "공구종료") {
                return (
                  <>
                    <S.TopButton>
                      <S.MainButton onClick={() => openModal("host")}>
                        참여자 확인하기
                      </S.MainButton>
                      <S.WhiteButton>공구글 수정</S.WhiteButton>
                    </S.TopButton>
                    <S.EndButton>공구 종료</S.EndButton>
                  </>
                );
              }

              return null;
            }}
          />
        ))
      )}
    </S.Container>
  );
};

export default MyList;
