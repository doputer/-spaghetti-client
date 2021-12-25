import { Content } from 'components/atoms/Content';
import { Title } from 'components/atoms/Title';

interface ProblemProps {
  content?: string;
  input?: string;
  output?: string;
}

export const Problem = ({ content, input, output }: ProblemProps) => {
  return (
    <div>
      <Title
        style={{
          margin: '0px',
          fontSize: '1.125rem',
          fontWeight: '700',
        }}
      >
        {'문제'}
      </Title>
      <Content
        style={{
          fontSize: '1rem',
          fontWeight: '400',
        }}
      >
        {'두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.'}
      </Content>
      <Title
        style={{
          margin: '0px',
          fontSize: '1.125rem',
          fontWeight: '700',
        }}
      >
        {'입력'}
      </Title>
      <Content
        style={{
          fontSize: '1rem',
          fontWeight: '400',
        }}
      >
        {'첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)'}
      </Content>
      <Title
        style={{
          margin: '0px',
          fontSize: '1.125rem',
          fontWeight: '700',
        }}
      >
        {'출력'}
      </Title>
      <Content
        style={{
          margin: '0px',
          fontSize: '1rem',
          fontWeight: '400',
        }}
      >
        {
          '첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.'
        }
      </Content>
    </div>
  );
};
