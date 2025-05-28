import { useState } from "react";
import { useModalStore } from "../../../../stores/useModalStore";
import AgreeCheckBox from "../../agreeCheckbox/AgreeCheckBox";
import DotText from "../../dotText/DotText";
import { SectionLine } from "../../SectionLine.styled";
import Modal from "../Modal";
import * as S from "./HostModal.styled";
import { Button } from "../../button/Button.styled";

const HostModal = () => {
  const closeModal = useModalStore((s) => s.closeModal);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Modal onClose={closeModal}>
      <S.Container>
        <S.StyledXIcon onClick={closeModal} />
        <S.Label>참여자 확인하기</S.Label>
        <SectionLine />
        <S.Ment>
          <DotText
            text={
              <S.StyledText>
                참여자가 입금을 완료한 경우, 오른쪽의 토글을 눌러 입금 상태를
                '완료'로 변경해야 참여자의 입금 여부가 확인됩니다.
              </S.StyledText>
            }
          />
          <DotText
            text={
              <S.StyledText>
                입금자명과 입금 내역을 비교하여 토글 상태를 정확히 설정해
                주세요.
              </S.StyledText>
            }
          />
          <DotText
            text={
              <S.StyledText>
                참여 인원이나 주문 수량에 이상이 있을 경우, 즉시 운영자에게
                문의해 주세요.
              </S.StyledText>
            }
          />
          <DotText
            text={
              <S.StyledText>
                개인정보 유출 시 모든 책임은 본인에게 있음에 유의해 주세요.
              </S.StyledText>
            }
          />
        </S.Ment>
        <S.ListLabel>참여자 리스트</S.ListLabel>
        <S.TableWrapper>
          <S.Table>
            <colgroup>
              <col style={{ width: "14%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "28%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "16%" }} />
              <col style={{ width: "14%" }} />
            </colgroup>
            <thead>
              <S.Tr>
                <S.Th>닉네임</S.Th>
                <S.Th>입금자명</S.Th>
                <S.Th>전화번호</S.Th>
                <S.Th>주문 수량</S.Th>
                <S.Th>가격(원)</S.Th>
                <S.Th>입금 상태</S.Th>
              </S.Tr>
            </thead>
          </S.Table>
          <S.ScrollBody>
            <S.Table>
              <colgroup>
                <col style={{ width: "14%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "28%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "14%" }} />
              </colgroup>
              <tbody>
                <S.Tr>
                  <S.Td>Kane</S.Td>
                  <S.Td>박진주</S.Td>
                  <S.Td>010-1234-5678</S.Td>
                  <S.Td>4</S.Td>
                  <S.Td>20,000</S.Td>
                  <S.Td>
                    <AgreeCheckBox
                      boxStyle="box"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                  </S.Td>
                </S.Tr>
                <S.Tr>
                  <S.Td>Kane</S.Td>
                  <S.Td>박진주</S.Td>
                  <S.Td>010-1234-5678</S.Td>
                  <S.Td>4</S.Td>
                  <S.Td>20,000</S.Td>
                  <S.Td>
                    <AgreeCheckBox
                      boxStyle="box"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                  </S.Td>
                </S.Tr>
                <S.Tr>
                  <S.Td>Kane</S.Td>
                  <S.Td>박진주</S.Td>
                  <S.Td>010-1234-5678</S.Td>
                  <S.Td>4</S.Td>
                  <S.Td>20,000</S.Td>
                  <S.Td>
                    <AgreeCheckBox
                      boxStyle="box"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                  </S.Td>
                </S.Tr>
                <S.Tr>
                  <S.Td>Kane</S.Td>
                  <S.Td>박진주</S.Td>
                  <S.Td>010-1234-5678</S.Td>
                  <S.Td>4</S.Td>
                  <S.Td>20,000</S.Td>
                  <S.Td>
                    <AgreeCheckBox
                      boxStyle="box"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                  </S.Td>
                </S.Tr>
                <S.Tr>
                  <S.Td>Kane</S.Td>
                  <S.Td>박진주</S.Td>
                  <S.Td>010-1234-5678</S.Td>
                  <S.Td>4</S.Td>
                  <S.Td>20,000</S.Td>
                  <S.Td>
                    <AgreeCheckBox
                      boxStyle="box"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                  </S.Td>
                </S.Tr>
                <S.Tr>
                  <S.Td>Kane</S.Td>
                  <S.Td>박진주</S.Td>
                  <S.Td>010-1234-5678</S.Td>
                  <S.Td>4</S.Td>
                  <S.Td>20,000</S.Td>
                  <S.Td>
                    <AgreeCheckBox
                      boxStyle="box"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                    />
                  </S.Td>
                </S.Tr>
              </tbody>
            </S.Table>
          </S.ScrollBody>
        </S.TableWrapper>
        <Button $buttonStyle="round">저장하기</Button>
      </S.Container>
    </Modal>
  );
};

export default HostModal;
