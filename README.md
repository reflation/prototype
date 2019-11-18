# prototype

제주대학교 학사 관리 서비스 [하영드리미](https://dreamy.jejunu.ac.kr/)의 UI를 preact 컴포넌트로 재설계한 프로토타입

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow?style=flat-square)](https://www.conventionalcommits.org/)

## 구현한 UI

- 로그인/로그아웃
- 메인 페이지
- 학번 또는 비밀번호 N회 틀림 알림
- 세션 만료 알림

## 준비물

- node v10 이상
- yarn
- `default-release` 이름의 파이어폭스 프로필

## 사용법

```
yarn dev:wext
```

## 타입 안정성? 그런거 없어요.

프로토타입으로 사용한 `sucrase` 모듈이 정적 타입 검사를 제대로 지원해주고 있지 않습니다. ([issue#8](https://github.com/reflation/prototype/issues/8) 참고)

타입을 미쳐 신경 쓰지 못한 채로 만들어진 점 양해 부탁드립니다. 그래도 작성한 기능은 정상적으로 작동하니 걱정하지 마세요! 🙄
