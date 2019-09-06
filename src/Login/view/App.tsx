import { h, FunctionComponent } from 'preact'

interface AppProps {
  optOutUrl: string
}

const App: FunctionComponent<AppProps> = ({ optOutUrl }) => (
  <div>{optOutUrl && <a href={optOutUrl}>원본 페이지 보기</a>}</div>
)

export default App
