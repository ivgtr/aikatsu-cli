<div align="center">
  <h3 align="center">aikatsu-cli</h3>
  <p align="center">アイカツ！格言を再生します</p>
</div>

---

> 📌✨ inspire: https://github.com/akameco/sana-voice

## Usages

### CLI

```shell
$ npm install --global aikatsu-cli
```

```shell
$ aikatsu --help
    Usage
      $ aikatsu [query]

    Examples
      $ aikatsu

      $ aikatsu 100

      $ aikatsu 一体感 --title
      30 ライブは一体感！

      $ aikatsu --link
      http://odayaka.work/152%E3%82%A2%E3%82%A4%E3%82%AB%E3%83%84%EF%BC%81%E3%81%AF%E3%81%A4%E3%81%A5%E3%81%8F%EF%BC%81%EF%BC%81.mp3
```

### Packages

```shell
$ yarn add aikatsu-cli
```

```js
import aikatsu from "aikatsu-cli";

const randomKakugen = await aikatsu();
console.log(randomKakugen);
// => { id:100, title:'ゴールはスタート！', link:'~' }

const queryKakugen = await aikatsu("一体感");
console.log(queryKakugen);
// => { id:30, title:'ライブは一体感！', link:'~' }
```

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Github Follow](https://img.shields.io/github/followers/ivgtr?style=social)](https://github.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)
