import { h, FunctionComponent, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { FormEvent } from 'react'

import axios from 'axios'

import base64 from '../../utils/base64'

interface AppProps {
  optOutUrl: string
}

const App: FunctionComponent<AppProps> = ({ optOutUrl }) => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    const id: string = e.target[0].value
    const pw: string = e.target[1].value
    const encForm = new FormData()
    encForm.append('tmpu', base64(id))
    encForm.append('tmpw', base64(pw))

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
            value={id}
            onChange={e => setId(e.target.value)}
            autocomplete="username"
          />
        </label>
        <label>
          PW:
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            autocomplete="current-password"
          />
        </label>
        <input type="submit" value="로그인" />
      </form>
      <footer>{optOutUrl && <a href={optOutUrl}>원본 페이지 보기</a>}</footer>
    </Fragment>
  )
}

export default App
