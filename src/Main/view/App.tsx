import { h, FunctionComponent, Fragment } from 'preact'
import Logout from './Logout.tsx'

interface AppProps {
  optOutUrl: string
}

const App: FunctionComponent<AppProps> = ({ optOutUrl }) => (
  <Fragment>
    <Logout />
    <div>{optOutUrl && <a href={optOutUrl}>원본 페이지 보기</a>}</div>
  </Fragment>
)

export default App
