import { h, FunctionComponent, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import axios from 'axios'

import { encode } from '../../utils/base64'

interface AppProps {
  optOutUrl: string
}

export const App: FunctionComponent<AppProps> = ({ optOutUrl }) => {
  const handleSubmit = async (e: Event) => {
    const [tId, tPw] = e.target
    const encForm = new FormData()
    encForm.append('tmpu', encode(tId.value))
    encForm.append('tmpw', encode(tPw.value))

    e.preventDefault()

    const { data } = await axios.post<string>(
      'https://dreamy.jejunu.ac.kr/frame/sysUser.do?next=',
      encForm,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )

    if (data.includes('dbError')) {
      const invaildMessage = data
        .match(/var dbError = "(?:\.|(\\\")|[^\""\n])*"/)[0]
        .slice(15, -1)

      alert(invaildMessage)
      return
    }
    location.href = 'main.do'
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            autocomplete="username"
          />
        </label>
        <label>
          PW:
          <input
            type="password"
            autocomplete="current-password"
          />
        </label>
        <input type="submit" value="로그인" />
      </form>
      <footer>{optOutUrl && <a href={optOutUrl}>원본 페이지 보기</a>}</footer>
    </Fragment>
  )
}
