import { h, FunctionComponent } from 'preact'
import axios from 'axios'

export const Logout: FunctionComponent = () => {
  const handleLogout = () => {
    axios.get('https://dreamy.jejunu.ac.kr/frame/sysUser.do?mode=logout')
    location.href = 'index.do'
  }
  return <button onClick={handleLogout}>로그아웃</button>
}
